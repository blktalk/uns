#!/usr/bin/env bash

# foundryup - Foundry Installer
# Readme: https://github.com/foundry-rs/foundry/blob/master/foundryup/README.md
# Source: https://github.com/foundry-rs/foundry/blob/master/foundryup/foundryup

set -eo pipefail

BASE_DIR=${XDG_CONFIG_HOME:-$HOME}
FOUNDRY_DIR=${FOUNDRY_DIR:-"$BASE_DIR/.foundry"}
FOUNDRY_BIN_DIR="$FOUNDRY_DIR/bin"

BINS=(forge cast anvil chisel)

export RUSTFLAGS="${RUSTFLAGS:--C target-cpu=native}"

main() {
  need_cmd git
  need_cmd curl

  while [[ -n $1 ]]; do
    case $1 in
      --)               shift; break;;

      -r|--repo)        shift; FOUNDRYUP_REPO=$1;;
      -b|--branch)      shift; FOUNDRYUP_BRANCH=$1;;
      -v|--version)     shift; FOUNDRYUP_VERSION=$1;;
      -p|--path)        shift; FOUNDRYUP_LOCAL_REPO=$1;;
      -P|--pr)          shift; FOUNDRYUP_PR=$1;;
      -C|--commit)      shift; FOUNDRYUP_COMMIT=$1;;
      --arch)           shift; FOUNDRYUP_ARCH=$1;;
      --platform)       shift; FOUNDRYUP_PLATFORM=$1;;
      -h|--help)
        usage
        exit 0
        ;;
      *)
        warn "unknown option: $1"
        usage
        exit 1
    esac; shift
  done

  # Print the banner after successfully parsing args
  banner

  if [ -n "$FOUNDRYUP_PR" ]; then
    if [ -z "$FOUNDRYUP_BRANCH" ]; then
      FOUNDRYUP_BRANCH="refs/pull/$FOUNDRYUP_PR/head"
    else
      err "can't use --pr and --branch at the same time"
    fi
  fi

  # Installs foundry from a local repository if --path parameter is provided
  if [[ -n "$FOUNDRYUP_LOCAL_REPO" ]]; then
    need_cmd cargo

    # Ignore branches/versions as we do not want to modify local git state
    if [ -n "$FOUNDRYUP_REPO" ] || [ -n "$FOUNDRYUP_BRANCH" ] || [ -n "$FOUNDRYUP_VERSION" ]; then
      warn "--branch, --version, and --repo arguments are ignored during local install"
    fi

    # Enter local repo and build
    say "installing from $FOUNDRYUP_LOCAL_REPO"
    cd "$FOUNDRYUP_LOCAL_REPO"
    ensure cargo build --bins --release # need 4 speed

    for bin in "${BINS[@]}"; do
      # Remove prior installations if they exist
      rm -f "$FOUNDRY_BIN_DIR/$bin"
      # Symlink from local repo binaries to bin dir
      ensure ln -s "$PWD/target/release/$bin" "$FOUNDRY_BIN_DIR/$bin"
    done

    say "done"
    exit 0
  fi

  FOUNDRYUP_REPO=${FOUNDRYUP_REPO:-foundry-rs/foundry}

  # Install by downloading binaries
  if [[ "$FOUNDRYUP_REPO" == "foundry-rs/foundry" && -z "$FOUNDRYUP_BRANCH" && -z "$FOUNDRYUP_COMMIT" ]]; then
    FOUNDRYUP_VERSION=${FOUNDRYUP_VERSION:-nightly}
    FOUNDRYUP_TAG=$FOUNDRYUP_VERSION

    # Normalize versions (handle channels, versions without v prefix
    if [[ "$FOUNDRYUP_VERSION" =~ ^nightly ]]; then
      FOUNDRYUP_VERSION="nightly"
    elif [[ "$FOUNDRYUP_VERSION" == [[:digit:]]* ]]; then
      # Add v prefix
      FOUNDRYUP_VERSION="v${FOUNDRYUP_VERSION}"
      FOUNDRYUP_TAG="${FOUNDRYUP_VERSION}"
    fi

    say "installing foundry (version ${FOUNDRYUP_VERSION}, tag ${FOUNDRYUP_TAG})"

    uname_s=$(uname -s)
    PLATFORM=$(tolower "${FOUNDRYUP_PLATFORM:-$uname_s}")
    EXT="tar.gz"
    case $PLATFORM in
      linux) ;;
      darwin|mac*)
        PLATFORM="darwin"
        ;;
      mingw*|win*)
        EXT="zip"
        PLATFORM="win32"
        ;;
      *)
        err "unsupported platform: $PLATFORM"
        ;;
    esac

    uname_m=$(uname -m)
    ARCHITECTURE=$(tolower "${FOUNDRYUP_ARCH:-$uname_m}")
    if [ "${ARCHITECTURE}" = "x86_64" ]; then
      # Redirect stderr to /dev/null to avoid printing errors if non Rosetta.
      if [ "$(sysctl -n sysctl.proc_translated 2>/dev/null)" = "1" ]; then
        ARCHITECTURE="arm64" # Rosetta.
      else
        ARCHITECTURE="amd64" # Intel.
      fi
    elif [ "${ARCHITECTURE}" = "arm64" ] ||[ "${ARCHITECTURE}" = "aarch64" ] ; then
      ARCHITECTURE="arm64" # Arm.
    else
      ARCHITECTURE="amd64" # Amd.
    fi

    # Compute the URL of the release tarball in the Foundry repository.
    RELEASE_URL="https://github.com/${FOUNDRYUP_REPO}/releases/download/${FOUNDRYUP_TAG}/"
    BIN_ARCHIVE_URL="${RELEASE_URL}foundry_${FOUNDRYUP_VERSION}_${PLATFORM}_${ARCHITECTURE}.$EXT"

    # Download and extract the binaries archive
    say "downloading latest forge, cast, anvil, and chisel"
    if [ "$PLATFORM" = "win32" ]; then
      tmp="$(mktemp -d 2>/dev/null || echo ".")/foundry.zip"
      ensure download "$BIN_ARCHIVE_URL" "$tmp"
      ensure unzip "$tmp" -d "$FOUNDRY_BIN_DIR"
      rm -f "$tmp"
    else
      ensure download "$BIN_ARCHIVE_URL" | ensure tar -xzC "$FOUNDRY_BIN_DIR"
    fi


    for bin in "${BINS[@]}"; do
      bin_path="$FOUNDRY_BIN_DIR/$bin"

      # Print installed msg
      say "installed - $(ensure "$bin_path" --version)"

      # Check if the default path of the binary is not in FOUNDRY_BIN_DIR
      which_path="$(command -v "$bin" || true)"
      if [ -n "$which_path" ] && [ "$which_path" != "$bin_path" ]; then
        warn ""
        cat 1>&2 <<EOF
There are multiple binaries with the name '$bin' present in your 'PATH'.
This may be the result of installing '$bin' using another method,
like Cargo or other package managers.
You may need to run 'rm $which_path' or move '$FOUNDRY_BIN_DIR'
in your 'PATH' to allow the newly installed version to take precedence!

EOF
      fi
    done

    say "done!"

  # Install by cloning the repo with the provided branch/tag
  else
    need_cmd cargo
    FOUNDRYUP_BRANCH=${FOUNDRYUP_BRANCH:-master}
    REPO_PATH="$FOUNDRY_DIR/$FOUNDRYUP_REPO"

    # If repo path does not exist, grab the author from the repo, make a directory in .foundry, cd to it and clone.
    if [ ! -d "$REPO_PATH" ]; then
      AUTHOR="$(echo "$FOUNDRYUP_REPO" | cut -d'/' -f1 -)"
      ensure mkdir -p "$FOUNDRY_DIR/$AUTHOR"
      cd "$FOUNDRY_DIR/$AUTHOR"
      ensure git clone "https://github.com/$FOUNDRYUP_REPO"
    fi

    # Force checkout, discarding any local changes
    cd "$REPO_PATH"
    ensure git fetch origin "${FOUNDRYUP_BRANCH}:remotes/origin/${FOUNDRYUP_BRANCH}"
    ensure git checkout "origin/${FOUNDRYUP_BRANCH}"

    # If set, checkout specific commit from branch
    if [ -n "$FOUNDRYUP_COMMIT" ]; then
      say "installing at commit $FOUNDRYUP_COMMIT"
      ensure git checkout "$FOUNDRYUP_COMMIT"
    fi

    # Build the repo and install the binaries locally to the .foundry bin directory.
    ensure cargo build --bins --release
    for bin in "${BINS[@]}"; do
      for try_path in target/release/$bin target/release/$bin.exe; do
        if [ -f "$try_path" ]; then
          [ -e "$FOUNDRY_BIN_DIR/$bin" ] && warn "overwriting existing $bin in $FOUNDRY_BIN_DIR"
          mv -f "$try_path" "$FOUNDRY_BIN_DIR"
        fi
      done
    done

    say "done"
  fi
}

usage() {
  cat 1>&2 <<EOF
The installer for Foundry.

Update or revert to a specific Foundry version with ease.

USAGE:
    foundryup <OPTIONS>

OPTIONS:
    -h, --help      Print help information
    -v, --version   Install a specific version
    -b, --branch    Install a specific branch
    -P, --pr        Install a specific Pull Request
    -C, --commit    Install a specific commit
    -r, --repo      Install from a remote GitHub repo (uses default branch if no other options are set)
    -p, --path      Install a local repository
    --arch          Install a specific architecture (supports amd64 and arm64)
    --platform      Install a specific platform (supports win32, linux, and darwin)
EOF
}

say() {
  printf "foundryup: %s\n" "$1"
}

warn() {
  say "warning: ${1}" >&2
}

err() {
  say "$1" >&2
  exit 1
}

tolower() {
  echo "$1" | awk '{print tolower($0)}'
}

need_cmd() {
  if ! check_cmd "$1"; then
    err "need '$1' (command not found)"
  fi
}

check_cmd() {
  command -v "$1" &>/dev/null
}

# Run a command that should never fail. If the command fails execution
# will immediately terminate with an error showing the failing command.
ensure() {
  if ! "$@"; then err "command failed: $*"; fi
}

# Downloads $1 into $2 or stdout
download() {
  if [ -n "$2" ]; then
    # output into $2
    if check_cmd curl; then
      curl -#o "$2" -L "$1"
    else
      wget --show-progress -qO "$2" "$1"
    fi
  else
    # output to stdout
    if check_cmd curl; then
      curl -#L "$1"
    else
      wget --show-progress -qO- "$1"
    fi
  fi
}

# Banner Function for Foundry
banner() {
  printf '

.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

 ╔═╗ ╔═╗ ╦ ╦ ╔╗╔ ╔╦╗ ╦═╗ ╦ ╦         Portable and modular toolkit
 ╠╣  ║ ║ ║ ║ ║║║  ║║ ╠╦╝ ╚╦╝    for Ethereum Application Development
 ╚   ╚═╝ ╚═╝ ╝╚╝ ═╩╝ ╩╚═  ╩                 written in Rust.

.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

Repo       : https://github.com/foundry-rs/
Book       : https://book.getfoundry.sh/
Chat       : https://t.me/foundry_rs/
Support    : https://t.me/foundry_support/
Contribute : https://github.com/orgs/foundry-rs/projects/2/

.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx.xOx

'
}


main "$@"
