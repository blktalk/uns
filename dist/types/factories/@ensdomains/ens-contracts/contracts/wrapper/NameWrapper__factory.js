"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameWrapper__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ENS",
                name: "_ens",
                type: "address",
            },
            {
                internalType: "contract IBaseRegistrar",
                name: "_registrar",
                type: "address",
            },
            {
                internalType: "contract IMetadataService",
                name: "_metadataService",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "CannotUpgrade",
        type: "error",
    },
    {
        inputs: [],
        name: "IncompatibleParent",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "IncorrectTargetOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "IncorrectTokenType",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "labelHash",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "expectedLabelhash",
                type: "bytes32",
            },
        ],
        name: "LabelMismatch",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "LabelTooLong",
        type: "error",
    },
    {
        inputs: [],
        name: "LabelTooShort",
        type: "error",
    },
    {
        inputs: [],
        name: "NameIsNotWrapped",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "OperationProhibited",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "Unauthorised",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "active",
                type: "bool",
            },
        ],
        name: "ControllerChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "ExpiryExtended",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
        ],
        name: "FusesSet",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "NameUnwrapped",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "NameWrapped",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "values",
                type: "uint256[]",
            },
        ],
        name: "TransferBatch",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "TransferSingle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "URI",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "_tokens",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "uint32",
                name: "fuseMask",
                type: "uint32",
            },
        ],
        name: "allFusesBurned",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "canExtendSubnames",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "canModifyName",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "controllers",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "ens",
        outputs: [
            {
                internalType: "contract ENS",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "labelhash",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "extendExpiry",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "getData",
        outputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "labelhash",
                type: "bytes32",
            },
        ],
        name: "isWrapped",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "isWrapped",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "metadataService",
        outputs: [
            {
                internalType: "contract IMetadataService",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "names",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
            {
                internalType: "address",
                name: "_to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "recoverFunds",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "address",
                name: "wrappedOwner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
        ],
        name: "registerAndWrapETH2LD",
        outputs: [
            {
                internalType: "uint256",
                name: "registrarExpiry",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "registrar",
        outputs: [
            {
                internalType: "contract IBaseRegistrar",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "renew",
        outputs: [
            {
                internalType: "uint256",
                name: "expires",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "ids",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "labelhash",
                type: "bytes32",
            },
            {
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "setChildFuses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
            {
                internalType: "bool",
                name: "active",
                type: "bool",
            },
        ],
        name: "setController",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
        ],
        name: "setFuses",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract IMetadataService",
                name: "_metadataService",
                type: "address",
            },
        ],
        name: "setMetadataService",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64",
            },
        ],
        name: "setRecord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
        ],
        name: "setResolver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "setSubnodeOwner",
        outputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64",
            },
            {
                internalType: "uint32",
                name: "fuses",
                type: "uint32",
            },
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        name: "setSubnodeRecord",
        outputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "uint64",
                name: "ttl",
                type: "uint64",
            },
        ],
        name: "setTTL",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract INameWrapperUpgrade",
                name: "_upgradeAddress",
                type: "address",
            },
        ],
        name: "setUpgradeContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "parentNode",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "labelhash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
        ],
        name: "unwrap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "labelhash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "registrant",
                type: "address",
            },
            {
                internalType: "address",
                name: "controller",
                type: "address",
            },
        ],
        name: "unwrapETH2LD",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "extraData",
                type: "bytes",
            },
        ],
        name: "upgrade",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "upgradeContract",
        outputs: [
            {
                internalType: "contract INameWrapperUpgrade",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "uri",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "wrappedOwner",
                type: "address",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
        ],
        name: "wrap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
            {
                internalType: "address",
                name: "wrappedOwner",
                type: "address",
            },
            {
                internalType: "uint16",
                name: "ownerControlledFuses",
                type: "uint16",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
        ],
        name: "wrapETH2LD",
        outputs: [
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60c06040523480156200001157600080fd5b5060405162005d2338038062005d238339810160408190526200003491620002f8565b823362000041816200028f565b6040516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e260048201526000906001600160a01b038416906302571be390602401602060405180830381865afa158015620000a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cf91906200034c565b604051630f41a04d60e11b81526001600160a01b03848116600483015291925090821690631e83409a906024016020604051808303816000875af11580156200011c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000142919062000373565b505050506001600160a01b0383811660805282811660a052600580546001600160a01b031916918316919091179055600163fffeffff60a01b03197fafa26c20e8b3d9a2853d642cfe1021dae26242ffedfac91c97aab212c1a4b93b8190557fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4955604080518082019091526001815260006020808301829052908052600690527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f89062000210908262000432565b506040805180820190915260058152626cae8d60e31b6020808301919091527f93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae600052600690527ffb9e8e321b8a5ec48f12a7b41f22c6e595d761285c9eb19d8dda7c99edf1b54f9062000285908262000432565b50505050620004fe565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620002f557600080fd5b50565b6000806000606084860312156200030e57600080fd5b83516200031b81620002df565b60208501519093506200032e81620002df565b60408501519092506200034181620002df565b809150509250925092565b6000602082840312156200035f57600080fd5b81516200036c81620002df565b9392505050565b6000602082840312156200038657600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620003b857607f821691505b602082108103620003d957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200042d57600081815260208120601f850160051c81016020861015620004085750805b601f850160051c820191505b81811015620004295782815560010162000414565b5050505b505050565b81516001600160401b038111156200044e576200044e6200038d565b62000466816200045f8454620003a3565b84620003df565b602080601f8311600181146200049e5760008415620004855750858301515b600019600386901b1c1916600185901b17855562000429565b600085815260208120601f198616915b82811015620004cf57888601518255948401946001909101908401620004ae565b5085821015620004ee5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a0516157186200060b6000396000818161047301528181610aee01528181610b9101528181610c20015281816118c60152818161195c01528181611a0a01528181611adc01528181611b4d01528181611bd201528181611de601528181611f2201528181612054015281816121ac0152818161223201526129700152600081816104c001528181610a7401528181610d6a01528181610ef901528181610faa015281816112bc01528181611fa7015281816120d9015281816122dd0152818161248f0152818161276001528181612ba901528181612c5701528181612d0c01528181612d8d01528181613298015281816133eb015281816136530152613bff01526157186000f3fe608060405234801561001057600080fd5b506004361061029f5760003560e01c80636352211e11610167578063c93ab3fd116100ce578063e985e9c511610087578063e985e9c5146106d4578063eb8ae530146106e7578063ed70554d146106fa578063f242432a1461071a578063f2fde38b1461072d578063fd0cd0d91461074057600080fd5b8063c93ab3fd14610652578063cf40882314610665578063d8c9921a14610678578063d9a50c121461068b578063da8c229e1461069e578063e0dba60f146106c157600080fd5b8063a22cb46511610120578063a22cb465146105e0578063a4014982146105f3578063adf4960a14610606578063b6bcad2614610619578063c475abff1461062c578063c658e0861461063f57600080fd5b80636352211e146105635780636e5d6ad214610576578063715018a6146105a15780638b4dfa75146105a95780638cf8b41e146105bc5780638da5cb5b146105cf57600080fd5b80631f4e15041161020b5780633f15457f116101c45780633f15457f146104bb578063402906fc146104e257806341415eab1461050a5780634e1273f41461051d578063530954671461053d5780635d3590d51461055057600080fd5b80631f4e15041461043557806320c38e2b1461044857806324c1af441461045b5780632b20e3971461046e5780632eb2c2d61461049557806333c69ea9146104a857600080fd5b80630e4cd7251161025d5780630e4cd725146103aa5780630e89341c146103bd57806314ab9038146103d0578063150b7a02146103e35780631534e1771461040f5780631896f70a1461042257600080fd5b8062fdd58e146102a45780630178fe3f146102ca57806301ffc9a71461031057806306fdde0314610333578063081812fc1461036a578063095ea7b314610395575b600080fd5b6102b76102b236600461444c565b610753565b6040519081526020015b60405180910390f35b6102dd6102d8366004614478565b610800565b604080516001600160a01b03909416845263ffffffff90921660208401526001600160401b0316908201526060016102c1565b61032361031e3660046144a7565b610830565b60405190151581526020016102c1565b61035d6040518060400160405280600b81526020016a2730b6b2abb930b83832b960a91b81525081565b6040516102c19190614514565b61037d610378366004614478565b610870565b6040516001600160a01b0390911681526020016102c1565b6103a86103a336600461444c565b6108b5565b005b6103236103b8366004614527565b6108fb565b61035d6103cb366004614478565b610975565b6103a86103de366004614573565b6109e7565b6103f66103f13660046145e7565b610ae1565b6040516001600160e01b031990911681526020016102c1565b6103a861041d366004614659565b610cc1565b6103a8610430366004614527565b610ceb565b60075461037d906001600160a01b031681565b61035d610456366004614478565b610da1565b6102b761046936600461474f565b610e3b565b61037d7f000000000000000000000000000000000000000000000000000000000000000081565b6103a86104a3366004614875565b611021565b6103a86104b6366004614922565b61125f565b61037d7f000000000000000000000000000000000000000000000000000000000000000081565b6104f56104f036600461497a565b611430565b60405163ffffffff90911681526020016102c1565b610323610518366004614527565b6114cd565b61053061052b36600461499d565b611506565b6040516102c19190614a9a565b60055461037d906001600160a01b031681565b6103a861055e366004614aad565b61162f565b61037d610571366004614478565b6116b0565b610589610584366004614aee565b6116bb565b6040516001600160401b0390911681526020016102c1565b6103a86117ee565b6103a86105b7366004614b23565b611802565b6105896105ca366004614b65565b611928565b6000546001600160a01b031661037d565b6103a86105ee366004614bed565b611ca4565b6102b7610601366004614c1b565b611d7a565b610323610614366004614c9b565b611ebb565b6103a8610627366004614659565b611ee0565b6102b761063a366004614cbe565b612138565b6102b761064d366004614ce0565b6123a2565b6103a8610660366004614d52565b61256a565b6103a8610673366004614dbd565b6126bd565b6103a8610686366004614df5565b612857565b610323610699366004614cbe565b612920565b6103236106ac366004614659565b60046020526000908152604090205460ff1681565b6103a86106cf366004614bed565b6129ff565b6103236106e2366004614e23565b612a67565b6103a86106f5366004614e51565b612a95565b6102b7610708366004614478565b60016020526000908152604090205481565b6103a8610728366004614eb8565b612e39565b6103a861073b366004614659565b612ee6565b61032361074e366004614478565b612f5c565b60006001600160a01b0383166107c45760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b60006107cf836116b0565b9050836001600160a01b0316816001600160a01b0316036107f45760019150506107fa565b60009150505b92915050565b60008181526001602052604090205460a081901c60c082901c610824838383613034565b90959094509092509050565b60006001600160e01b03198216631b05885b60e31b148061086157506001600160e01b03198216630a85bd0160e11b145b806107fa57506107fa8261306a565b60008061087c836116b0565b90506001600160a01b0381166108955750600092915050565b6000838152600360205260409020546001600160a01b03165b9392505050565b60006108c082610800565b50915050603f1960408216016108ec5760405163a2a7201360e01b8152600481018390526024016107bb565b6108f683836130ba565b505050565b600080808061090986610800565b925092509250846001600160a01b0316836001600160a01b0316148061093457506109348386612a67565b8061095857506001600160a01b03851661094d87610870565b6001600160a01b0316145b801561096b575061096982826131ca565b155b9695505050505050565b6005546040516303a24d0760e21b8152600481018390526060916001600160a01b031690630e89341c90602401600060405180830381865afa1580156109bf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107fa9190810190614f20565b816109f281336114cd565b610a1357803360405163168ab55d60e31b81526004016107bb929190614f97565b8260106000610a2183610800565b5091505063ffffffff8282161615610a4f5760405163a2a7201360e01b8152600481018490526024016107bb565b604051630295720760e31b8152600481018790526001600160401b03861660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906314ab9038906044015b600060405180830381600087803b158015610ac157600080fd5b505af1158015610ad5573d6000803e3d6000fd5b50505050505050505050565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610b2c5760405163032634a760e31b815260040160405180910390fd5b6000808080610b3d86880188614fae565b83516020850120939750919550935091508890808214610b7a576040516331970f3360e21b815260048101829052602481018390526044016107bb565b604051630a3b53db60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906328ed4f6c90610bc89085903090600401614f97565b600060405180830381600087803b158015610be257600080fd5b505af1158015610bf6573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018d9052600092506276a70091506001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d6e4fa8690602401602060405180830381865afa158015610c67573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8b9190615015565b610c959190615044565b9050610ca887878761ffff1684886131fa565b50630a85bd0160e11b9c9b505050505050505050505050565b610cc961330b565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b81610cf681336114cd565b610d1757803360405163168ab55d60e31b81526004016107bb929190614f97565b8260086000610d2583610800565b5091505063ffffffff8282161615610d535760405163a2a7201360e01b8152600481018490526024016107bb565b604051630c4b7b8560e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90610aa79089908990600401614f97565b60066020526000908152604090208054610dba9061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054610de69061506b565b8015610e335780601f10610e0857610100808354040283529160200191610e33565b820191906000526020600020905b815481529060010190602001808311610e1657829003601f168201915b505050505081565b600087610e4881336114cd565b610e6957803360405163168ab55d60e31b81526004016107bb929190614f97565b87516020890120610e7a8a82613365565b9250610e868a84613391565b610e9083866134cf565b610e9b8a848b613502565b50610ea88a8487876135cf565b9350610eb383613615565b610f68576040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b0388811660648301526001600160401b03881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b158015610f3d57600080fd5b505af1158015610f51573d6000803e3d6000fd5b50505050610f638a848b8b89896136ce565b611014565b6040516305ef2c7f60e41b8152600481018b9052602481018290523060448201526001600160a01b0388811660648301526001600160401b03881660848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b158015610fee57600080fd5b505af1158015611002573d6000803e3d6000fd5b505050506110148a848b8b8989613705565b5050979650505050505050565b81518351146110835760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016107bb565b6001600160a01b0384166110a95760405162461bcd60e51b81526004016107bb906150a5565b6001600160a01b0385163314806110c557506110c58533612a67565b61112c5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016107bb565b60005b83518110156111f257600084828151811061114c5761114c6150ea565b60200260200101519050600084838151811061116a5761116a6150ea565b60200260200101519050600080600061118285610800565b9250925092506111938583836137c9565b8360011480156111b457508a6001600160a01b0316836001600160a01b0316145b6111d05760405162461bcd60e51b81526004016107bb90615100565b6111dc858b8484613872565b5050505050806111eb9061514a565b905061112f565b50836001600160a01b0316856001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611242929190615163565b60405180910390a46112583386868686866138b4565b5050505050565b600061126b8585613365565b905061127781846134cf565b6000808061128484610800565b919450925090506001600160a01b038316158061133357506040516302571be360e01b81526004810185905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015611303573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113279190615191565b6001600160a01b031614155b1561135157604051635374b59960e01b815260040160405180910390fd5b60008061135d8a610800565b90935091508a90506113995761137386336114cd565b61139457853360405163168ab55d60e31b81526004016107bb929190614f97565b6113c4565b6113a38a336114cd565b6113c457893360405163168ab55d60e31b81526004016107bb929190614f97565b6113cf868984613a0f565b6113da878483613a4a565b9650620100008416158015906113fe57508363ffffffff1688851763ffffffff1614155b1561141f5760405163a2a7201360e01b8152600481018790526024016107bb565b96831796610ad586868a868b613a90565b60008261143d81336114cd565b61145e57803360405163168ab55d60e31b81526004016107bb929190614f97565b836002600061146c83610800565b5091505063ffffffff828216161561149a5760405163a2a7201360e01b8152600481018490526024016107bb565b600080806114a78a610800565b9250925092506114c08a84848c61ffff16178485613a90565b5098975050505050505050565b60008080806114db86610800565b925092509250846001600160a01b0316836001600160a01b0316148061095857506109588386612a67565b6060815183511461156b5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016107bb565b600083516001600160401b0381111561158657611586614676565b6040519080825280602002602001820160405280156115af578160200160208202803683370190505b50905060005b8451811015611627576115fa8582815181106115d3576115d36150ea565b60200260200101518583815181106115ed576115ed6150ea565b6020026020010151610753565b82828151811061160c5761160c6150ea565b60209081029190910101526116208161514a565b90506115b5565b509392505050565b61163761330b565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015611686573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116aa91906151ae565b50505050565b60006107fa82613b37565b6000806116c88585613365565b90506116d381613615565b6116f057604051635374b59960e01b815260040160405180910390fd5b60006116fc86336108fb565b905080158015611713575061171182336114cd565b155b1561173557813360405163168ab55d60e31b81526004016107bb929190614f97565b6000808061174285610800565b925092509250831580156117595750620400008216155b1561177a5760405163a2a7201360e01b8152600481018690526024016107bb565b60006117858a610800565b92505050611794888383613a4a565b97506117a28685858b613b4d565b6040516001600160401b038916815286907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b1329060200160405180910390a2509598975050505050505050565b6117f661330b565b6118006000613b63565b565b61181a6000805160206156ec83398151915284613365565b61182481336114cd565b61184557803360405163168ab55d60e31b81526004016107bb929190614f97565b306001600160a01b0384160361187957604051632ca49b0d60e11b81526001600160a01b03841660048201526024016107bb565b61189a6118946000805160206156ec83398151915286613365565b83613bb3565b604051632142170760e11b81523060048201526001600160a01b038481166024830152604482018690527f000000000000000000000000000000000000000000000000000000000000000016906342842e0e90606401600060405180830381600087803b15801561190a57600080fd5b505af115801561191e573d6000803e3d6000fd5b5050505050505050565b600080868660405161193b9291906151cb565b6040519081900381206331a9108f60e11b82526004820181905291506000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa1580156119ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cf9190615191565b90506001600160a01b0381163314801590611a77575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015611a51573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7591906151ae565b155b15611ab057611a946000805160206156ec83398151915283613365565b3360405163168ab55d60e31b81526004016107bb929190614f97565b6040516323b872dd60e01b81526001600160a01b038281166004830152306024830152604482018490527f000000000000000000000000000000000000000000000000000000000000000016906323b872dd90606401600060405180830381600087803b158015611b2057600080fd5b505af1158015611b34573d6000803e3d6000fd5b5050604051630a3b53db60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692506328ed4f6c9150611b869085903090600401614f97565b600060405180830381600087803b158015611ba057600080fd5b505af1158015611bb4573d6000803e3d6000fd5b5050604051636b727d4360e11b8152600481018590526276a70092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316915063d6e4fa8690602401602060405180830381865afa158015611c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c469190615015565b611c509190615044565b9250611c9988888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff881686886131fa565b505095945050505050565b6001600160a01b0382163303611d0e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016107bb565b3360008181526002602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b3360009081526004602052604081205460ff16611da95760405162461bcd60e51b81526004016107bb906151db565b60008787604051611dbb9291906151cb565b604051908190038120633f2891eb60e21b8252600482018190523060248301526044820187905291507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063fca247ac906064016020604051808303816000875af1158015611e37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e5b9190615015565b9150611eb088888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508a9250505061ffff8616611eaa6276a70087615044565b886131fa565b509695505050505050565b600080611ec784610800565b50841663ffffffff908116908516149250505092915050565b611ee861330b565b6007546001600160a01b0316156120085760075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b158015611f6857600080fd5b505af1158015611f7c573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600060248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b158015611fef57600080fd5b505af1158015612003573d6000803e3d6000fd5b505050505b600780546001600160a01b0319166001600160a01b038316908117909155156121355760075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f00000000000000000000000000000000000000000000000000000000000000009091169063a22cb46590604401600060405180830381600087803b15801561209a57600080fd5b505af11580156120ae573d6000803e3d6000fd5b505060075460405163a22cb46560e01b81526001600160a01b039182166004820152600160248201527f0000000000000000000000000000000000000000000000000000000000000000909116925063a22cb4659150604401600060405180830381600087803b15801561212157600080fd5b505af1158015611258573d6000803e3d6000fd5b50565b3360009081526004602052604081205460ff166121675760405162461bcd60e51b81526004016107bb906151db565b60006121816000805160206156ec83398151915285613365565b60405163c475abff60e01b815260048101869052602481018590529091506000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063c475abff906044016020604051808303816000875af11580156121f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122199190615015565b6040516331a9108f60e11b8152600481018790529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa92505050801561229d575060408051601f3d908101601f1916820190925261229a91810190615191565b60015b6122aa5791506107fa9050565b6001600160a01b0381163014158061235457506040516302571be360e01b81526004810184905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015612324573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123489190615191565b6001600160a01b031614155b15612363575091506107fa9050565b5060006123736276a70083615044565b60008481526001602052604090205490915060a081901c61239685838386613b4d565b50919695505050505050565b6000866123af81336114cd565b6123d057803360405163168ab55d60e31b81526004016107bb929190614f97565b600087876040516123e29291906151cb565b604051809103902090506123f68982613365565b92506124028984613391565b61240c83866134cf565b600061244f8a858b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061350292505050565b905061245d8a8588886135cf565b945061246884613615565b612517576040516306ab592360e01b8152600481018b9052602481018390523060448201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906306ab5923906064016020604051808303816000875af11580156124e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125049190615015565b506125128482898989613ca3565b61255d565b61255d8a858b8b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c91508b9050613705565b5050509695505050505050565b60006125b0600086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050613ce59050565b6007549091506001600160a01b03166125dc5760405163093075b560e21b815260040160405180910390fd5b6125e681336114cd565b61260757803360405163168ab55d60e31b81526004016107bb929190614f97565b6000808061261484610800565b91945092509050600061262685610870565b905061263185613da4565b600760009054906101000a90046001600160a01b03166001600160a01b0316639198c2768a8a878787878e8e6040518963ffffffff1660e01b815260040161268098979695949392919061524c565b600060405180830381600087803b15801561269a57600080fd5b505af11580156126ae573d6000803e3d6000fd5b50505050505050505050505050565b836126c881336114cd565b6126e957803360405163168ab55d60e31b81526004016107bb929190614f97565b84601c60006126f783610800565b5091505063ffffffff82821616156127255760405163a2a7201360e01b8152600481018490526024016107bb565b60405163cf40882360e01b8152600481018990523060248201526001600160a01b0387811660448301526001600160401b03871660648301527f0000000000000000000000000000000000000000000000000000000000000000169063cf40882390608401600060405180830381600087803b1580156127a457600080fd5b505af11580156127b8573d6000803e3d6000fd5b5050506001600160a01b038816905061281f5760006127d689610800565b509150506201ffff196202000082160161280e57604051632ca49b0d60e11b81526001600160a01b03891660048201526024016107bb565b612819896000613bb3565b5061191e565b600061282a896116b0565b905061284c81898b60001c600160405180602001604052806000815250613e44565b505050505050505050565b6128618383613365565b61286b81336114cd565b61288c57803360405163168ab55d60e31b81526004016107bb929190614f97565b7f6c32148f748aba23997146d7fe89e962e3cc30271290fb96f5f4337756c03b5284016128cc5760405163615a470360e01b815260040160405180910390fd5b6001600160a01b03821615806128ea57506001600160a01b03821630145b1561291357604051632ca49b0d60e11b81526001600160a01b03831660048201526024016107bb565b6116aa6118948585613365565b60008061292d8484613365565b9050600061293a82613615565b90506000805160206156ec833981519152851461295a5791506107fa9050565b6040516331a9108f60e11b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa9250505080156129db575060408051601f3d908101601f191682019092526129d891810190615191565b60015b6129ea576000925050506107fa565b6001600160a01b0316301492506107fa915050565b612a0761330b565b6001600160a01b038216600081815260046020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf8791015b60405180910390a25050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b600080612adc600087878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050613f269050565b915091506000612b258288888080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293925050613ce59050565b90506000612b338285613365565b6000818152600660205260409020909150612b4f888a836152fa565b507f6c32148f748aba23997146d7fe89e962e3cc30271290fb96f5f4337756c03b528201612b905760405163615a470360e01b815260040160405180910390fd5b6040516302571be360e01b8152600481018290526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be390602401602060405180830381865afa158015612bf8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1c9190615191565b90506001600160a01b0381163314801590612cc4575060405163e985e9c560e01b81526001600160a01b0382811660048301523360248301527f0000000000000000000000000000000000000000000000000000000000000000169063e985e9c590604401602060405180830381865afa158015612c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612cc291906151ae565b155b15612ce657813360405163168ab55d60e31b81526004016107bb929190614f97565b6001600160a01b03861615612d7657604051630c4b7b8560e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631896f70a90612d439085908a90600401614f97565b600060405180830381600087803b158015612d5d57600080fd5b505af1158015612d71573d6000803e3d6000fd5b505050505b604051635b0fc9c360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635b0fc9c390612dc49085903090600401614f97565b600060405180830381600087803b158015612dde57600080fd5b505af1158015612df2573d6000803e3d6000fd5b5050505061284c828a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052508d93509150819050613ca3565b6001600160a01b038416612e5f5760405162461bcd60e51b81526004016107bb906150a5565b6001600160a01b038516331480612e7b5750612e7b8533612a67565b612ed95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016107bb565b6112588585858585613e44565b612eee61330b565b6001600160a01b038116612f535760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107bb565b61213581613b63565b60008181526006602052604081208054829190612f789061506b565b80601f0160208091040260200160405190810160405280929190818152602001828054612fa49061506b565b8015612ff15780601f10612fc657610100808354040283529160200191612ff1565b820191906000526020600020905b815481529060010190602001808311612fd457829003601f168201915b50505050509050805160000361300a5750600092915050565b6000806130178382613f26565b909250905060006130288483613ce5565b905061096b8184612920565b60008042836001600160401b031610156130615761ffff196201000085160161305c57600094505b600093505b50929391925050565b60006001600160e01b03198216636cdb3d1360e11b148061309b57506001600160e01b031982166303a24d0760e21b145b806107fa57506301ffc9a760e01b6001600160e01b03198316146107fa565b60006130c5826116b0565b9050806001600160a01b0316836001600160a01b0316036131325760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016107bb565b336001600160a01b038216148061314e575061314e8133612a67565b6131c05760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016107bb565b6108f68383613fdd565b6000620200008381161480156108ae5750426131e96276a700846153b9565b6001600160401b0316109392505050565b84516020860120600061321b6000805160206156ec83398151915283613365565b9050600061324488604051806040016040528060058152602001626cae8d60e31b81525061404b565b600083815260066020526040902090915061325f82826153d9565b50613272828289620300008a1789613ca3565b6001600160a01b0384161561191e57604051630c4b7b8560e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631896f70a906132cf9085908890600401614f97565b600060405180830381600087803b1580156132e957600080fd5b505af11580156132fd573d6000803e3d6000fd5b505050505050505050505050565b6000546001600160a01b031633146118005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107bb565b604080516020808201949094528082019290925280518083038201815260609092019052805191012090565b6000808061339e84610800565b91945092509050426001600160401b0382161080801561346157506001600160a01b038416158061346157506040516302571be360e01b8152600481018690526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa158015613432573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906134569190615191565b6001600160a01b0316145b156134a057600061347187610800565b50915050602081161561349a5760405163a2a7201360e01b8152600481018790526024016107bb565b506134c7565b620100008316156134c75760405163a2a7201360e01b8152600481018690526024016107bb565b505050505050565b63fffdffff81811763ffffffff16146134fe5760405163a2a7201360e01b8152600481018390526024016107bb565b5050565b606060006135ab836006600088815260200190815260200160002080546135289061506b565b80601f01602080910402602001604051908101604052809291908181526020018280546135549061506b565b80156135a15780601f10613576576101008083540402835291602001916135a1565b820191906000526020600020905b81548152906001019060200180831161358457829003601f168201915b505050505061404b565b60008581526006602052604090209091506135c682826153d9565b50949350505050565b6000806135db85610800565b925050506000806135ee8860001c610800565b92509250506135fe878784613a0f565b613609858483613a4a565b98975050505050505050565b600080613621836116b0565b6001600160a01b0316141580156107fa57506040516302571be360e01b81526004810183905230906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa15801561369a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906136be9190615191565b6001600160a01b03161492915050565b600086815260066020526040812080546136ed9187916135289061506b565b90506136fc8682868686613ca3565b50505050505050565b6000808061371288610800565b925092509250600061373c88600660008d815260200190815260200160002080546135289061506b565b60008a81526006602052604090208054919250906137599061506b565b905060000361377c57600089815260066020526040902061377a82826153d9565b505b61378b89858886178589613a90565b6001600160a01b0387166137a9576137a4896000613bb3565b610ad5565b610ad584888b60001c600160405180602001604052806000815250613e44565b6201ffff19620200008316016137e9576137e66276a700826153b9565b90505b42816001600160401b03161015613822576201000082161561381d5760405162461bcd60e51b81526004016107bb90615100565b613847565b60048216156138475760405163a2a7201360e01b8152600481018490526024016107bb565b604082166000036108f6575050600090815260036020526040902080546001600160a01b0319169055565b60c0816001600160401b0316901b60a08363ffffffff16901b846001600160a01b03161717600160008681526020019081526020016000208190555050505050565b6001600160a01b0384163b156134c75760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906138f89089908990889088908890600401615498565b6020604051808303816000875af1925050508015613933575060408051601f3d908101601f19168201909252613930918101906154ea565b60015b6139df5761393f615507565b806308c379a0036139785750613953615523565b8061395e575061397a565b8060405162461bcd60e51b81526004016107bb9190614514565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016107bb565b6001600160e01b0319811663bc197c8160e01b146136fc5760405162461bcd60e51b81526004016107bb906155ac565b63ffff00008216158015906001831615908290613a295750805b156112585760405163a2a7201360e01b8152600481018690526024016107bb565b6000816001600160401b0316846001600160401b03161115613a6a578193505b826001600160401b0316846001600160401b03161015613a88578293505b509192915050565b613a9c85858584613b4d565b60405163ffffffff8416815285907f39873f00c80f4f94b7bd1594aebcf650f003545b74824d57ddf4939e3ff3a34b9060200160405180910390a2816001600160401b0316816001600160401b03161115611258576040516001600160401b038216815285907ff675815a0817338f93a7da433f6bd5f5542f1029b11b455191ac96c7f6a9b132906020015b60405180910390a25050505050565b600080613b4383610800565b5090949350505050565b613b5784836140c2565b6116aa84848484613872565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b613bbe826001611ebb565b15613bdf5760405163a2a7201360e01b8152600481018390526024016107bb565b613be882613da4565b604051635b0fc9c360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635b0fc9c390613c369085908590600401614f97565b600060405180830381600087803b158015613c5057600080fd5b505af1158015613c64573d6000803e3d6000fd5b50506040516001600160a01b03841681528492507fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c49150602001612a5b565b613caf858484846140fb565b847f8ce7013e8abebc55c3890a68f5a27c67c3f7efa64e584de5fb22363c606fd34085858585604051613b2894939291906155f4565b6000806000613cf48585613f26565b909250905081613d665760018551613d0c919061563b565b8414613d5a5760405162461bcd60e51b815260206004820152601d60248201527f6e616d65686173683a204a756e6b20617420656e64206f66206e616d6500000060448201526064016107bb565b50600091506107fa9050565b613d708582613ce5565b6040805160208101929092528101839052606001604051602081830303815290604052805190602001209250505092915050565b60008181526001602052604090205460a081901c60c082901c613dc8838383613034565b600086815260036020526040812080546001600160a01b0319169055909350613df5915085908484613872565b60408051858152600160208201526000916001600160a01b0386169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b6000806000613e5286610800565b925092509250613e638683836137c9565b846001148015613e845750876001600160a01b0316836001600160a01b0316145b613ea05760405162461bcd60e51b81526004016107bb90615100565b866001600160a01b0316836001600160a01b031603613ec157505050611258565b613ecd86888484613872565b60408051878152602081018790526001600160a01b03808a1692908b169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461191e33898989898961416f565b60008083518310613f795760405162461bcd60e51b815260206004820152601e60248201527f726561644c6162656c3a20496e646578206f7574206f6620626f756e6473000060448201526064016107bb565b6000848481518110613f8d57613f8d6150ea565b016020015160f81c90508015613fb957613fb285613fac86600161564e565b8361422a565b9250613fbe565b600092505b613fc8818561564e565b613fd390600161564e565b9150509250929050565b600081815260036020526040902080546001600160a01b0319166001600160a01b0384169081179091558190614012826116b0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b606060018351101561407057604051631406d65b60e11b815260040160405180910390fd5b60ff83511115614095578260405163e3ba295f60e01b81526004016107bb9190614514565b825183836040516020016140ab93929190615661565b604051602081830303815290604052905092915050565b61ffff8116158015906140da57506201000181811614155b156134fe5760405163a2a7201360e01b8152600481018390526024016107bb565b61410584836140c2565b6000848152600160205260409020546001600160a01b038116156141635761412c85613da4565b6040516000815285907fee2ba1195c65bcf218a83d874335c6bf9d9067b4c672f3c3bf16cf40de7586c49060200160405180910390a25b6112588585858561424e565b6001600160a01b0384163b156134c75760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906141b390899089908890889088906004016156a6565b6020604051808303816000875af19250505080156141ee575060408051601f3d908101601f191682019092526141eb918101906154ea565b60015b6141fa5761393f615507565b6001600160e01b0319811663f23a6e6160e01b146136fc5760405162461bcd60e51b81526004016107bb906155ac565b8251600090614239838561564e565b111561424457600080fd5b5091016020012090565b836000808061425c84610800565b9194509250905063ffff000082166001600160401b038087169083161115614282578195505b42826001600160401b03161061429757958617955b6001600160a01b038416156142ee5760405162461bcd60e51b815260206004820152601f60248201527f455243313135353a206d696e74206f66206578697374696e6720746f6b656e0060448201526064016107bb565b6001600160a01b03881661434e5760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016107bb565b306001600160a01b038916036143c35760405162461bcd60e51b815260206004820152603460248201527f455243313135353a206e65774f776e65722063616e6e6f74206265207468652060448201527313985b5955dc985c1c195c8818dbdb9d1c9858dd60621b60648201526084016107bb565b6143cf85898989613872565b60408051868152600160208201526001600160a01b038a169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461284c3360008a8860016040518060200160405280600081525061416f565b6001600160a01b038116811461213557600080fd5b6000806040838503121561445f57600080fd5b823561446a81614437565b946020939093013593505050565b60006020828403121561448a57600080fd5b5035919050565b6001600160e01b03198116811461213557600080fd5b6000602082840312156144b957600080fd5b81356108ae81614491565b60005b838110156144df5781810151838201526020016144c7565b50506000910152565b600081518084526145008160208601602086016144c4565b601f01601f19169290920160200192915050565b6020815260006108ae60208301846144e8565b6000806040838503121561453a57600080fd5b82359150602083013561454c81614437565b809150509250929050565b80356001600160401b038116811461456e57600080fd5b919050565b6000806040838503121561458657600080fd5b8235915061459660208401614557565b90509250929050565b60008083601f8401126145b157600080fd5b5081356001600160401b038111156145c857600080fd5b6020830191508360208285010111156145e057600080fd5b9250929050565b6000806000806000608086880312156145ff57600080fd5b853561460a81614437565b9450602086013561461a81614437565b93506040860135925060608601356001600160401b0381111561463c57600080fd5b6146488882890161459f565b969995985093965092949392505050565b60006020828403121561466b57600080fd5b81356108ae81614437565b634e487b7160e01b600052604160045260246000fd5b601f8201601f191681016001600160401b03811182821017156146b1576146b1614676565b6040525050565b60006001600160401b038211156146d1576146d1614676565b50601f01601f191660200190565b600082601f8301126146f057600080fd5b81356146fb816146b8565b604051614708828261468c565b82815285602084870101111561471d57600080fd5b82602086016020830137600092810160200192909252509392505050565b803563ffffffff8116811461456e57600080fd5b600080600080600080600060e0888a03121561476a57600080fd5b8735965060208801356001600160401b0381111561478757600080fd5b6147938a828b016146df565b96505060408801356147a481614437565b945060608801356147b481614437565b93506147c260808901614557565b92506147d060a0890161473b565b91506147de60c08901614557565b905092959891949750929550565b60006001600160401b0382111561480557614805614676565b5060051b60200190565b600082601f83011261482057600080fd5b8135602061482d826147ec565b60405161483a828261468c565b83815260059390931b850182019282810191508684111561485a57600080fd5b8286015b84811015611eb0578035835291830191830161485e565b600080600080600060a0868803121561488d57600080fd5b853561489881614437565b945060208601356148a881614437565b935060408601356001600160401b03808211156148c457600080fd5b6148d089838a0161480f565b945060608801359150808211156148e657600080fd5b6148f289838a0161480f565b9350608088013591508082111561490857600080fd5b50614915888289016146df565b9150509295509295909350565b6000806000806080858703121561493857600080fd5b843593506020850135925061494f6040860161473b565b915061495d60608601614557565b905092959194509250565b803561ffff8116811461456e57600080fd5b6000806040838503121561498d57600080fd5b8235915061459660208401614968565b600080604083850312156149b057600080fd5b82356001600160401b03808211156149c757600080fd5b818501915085601f8301126149db57600080fd5b813560206149e8826147ec565b6040516149f5828261468c565b83815260059390931b8501820192828101915089841115614a1557600080fd5b948201945b83861015614a3c578535614a2d81614437565b82529482019490820190614a1a565b96505086013592505080821115614a5257600080fd5b50613fd38582860161480f565b600081518084526020808501945080840160005b83811015614a8f57815187529582019590820190600101614a73565b509495945050505050565b6020815260006108ae6020830184614a5f565b600080600060608486031215614ac257600080fd5b8335614acd81614437565b92506020840135614add81614437565b929592945050506040919091013590565b600080600060608486031215614b0357600080fd5b8335925060208401359150614b1a60408501614557565b90509250925092565b600080600060608486031215614b3857600080fd5b833592506020840135614b4a81614437565b91506040840135614b5a81614437565b809150509250925092565b600080600080600060808688031215614b7d57600080fd5b85356001600160401b03811115614b9357600080fd5b614b9f8882890161459f565b9096509450506020860135614bb381614437565b9250614bc160408701614968565b91506060860135614bd181614437565b809150509295509295909350565b801515811461213557600080fd5b60008060408385031215614c0057600080fd5b8235614c0b81614437565b9150602083013561454c81614bdf565b60008060008060008060a08789031215614c3457600080fd5b86356001600160401b03811115614c4a57600080fd5b614c5689828a0161459f565b9097509550506020870135614c6a81614437565b9350604087013592506060870135614c8181614437565b9150614c8f60808801614968565b90509295509295509295565b60008060408385031215614cae57600080fd5b823591506145966020840161473b565b60008060408385031215614cd157600080fd5b50508035926020909101359150565b60008060008060008060a08789031215614cf957600080fd5b8635955060208701356001600160401b03811115614d1657600080fd5b614d2289828a0161459f565b9096509450506040870135614d3681614437565b9250614d446060880161473b565b9150614c8f60808801614557565b60008060008060408587031215614d6857600080fd5b84356001600160401b0380821115614d7f57600080fd5b614d8b8883890161459f565b90965094506020870135915080821115614da457600080fd5b50614db18782880161459f565b95989497509550505050565b60008060008060808587031215614dd357600080fd5b843593506020850135614de581614437565b9250604085013561494f81614437565b600080600060608486031215614e0a57600080fd5b83359250602084013591506040840135614b5a81614437565b60008060408385031215614e3657600080fd5b8235614e4181614437565b9150602083013561454c81614437565b60008060008060608587031215614e6757600080fd5b84356001600160401b03811115614e7d57600080fd5b614e898782880161459f565b9095509350506020850135614e9d81614437565b91506040850135614ead81614437565b939692955090935050565b600080600080600060a08688031215614ed057600080fd5b8535614edb81614437565b94506020860135614eeb81614437565b9350604086013592506060860135915060808601356001600160401b03811115614f1457600080fd5b614915888289016146df565b600060208284031215614f3257600080fd5b81516001600160401b03811115614f4857600080fd5b8201601f81018413614f5957600080fd5b8051614f64816146b8565b604051614f71828261468c565b828152866020848601011115614f8657600080fd5b61096b8360208301602087016144c4565b9182526001600160a01b0316602082015260400190565b60008060008060808587031215614fc457600080fd5b84356001600160401b03811115614fda57600080fd5b614fe6878288016146df565b9450506020850135614ff781614437565b925061500560408601614968565b91506060850135614ead81614437565b60006020828403121561502757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6001600160401b038181168382160190808211156150645761506461502e565b5092915050565b600181811c9082168061507f57607f821691505b60208210810361509f57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60006001820161515c5761515c61502e565b5060010190565b6040815260006151766040830185614a5f565b82810360208401526151888185614a5f565b95945050505050565b6000602082840312156151a357600080fd5b81516108ae81614437565b6000602082840312156151c057600080fd5b81516108ae81614bdf565b8183823760009101908152919050565b60208082526028908201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604082015267373a3937b63632b960c11b606082015260800190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60c08152600061526060c083018a8c615223565b6001600160a01b03898116602085015263ffffffff891660408501526001600160401b03881660608501528616608084015282810360a08401526152a5818587615223565b9b9a5050505050505050505050565b601f8211156108f657600081815260208120601f850160051c810160208610156152db5750805b601f850160051c820191505b818110156134c7578281556001016152e7565b6001600160401b0383111561531157615311614676565b6153258361531f835461506b565b836152b4565b6000601f84116001811461535957600085156153415750838201355b600019600387901b1c1916600186901b178355611258565b600083815260209020601f19861690835b8281101561538a578685013582556020948501946001909201910161536a565b50868210156153a75760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b6001600160401b038281168282160390808211156150645761506461502e565b81516001600160401b038111156153f2576153f2614676565b61540681615400845461506b565b846152b4565b602080601f83116001811461543b57600084156154235750858301515b600019600386901b1c1916600185901b1785556134c7565b600085815260208120601f198616915b8281101561546a5788860151825594840194600190910190840161544b565b50858210156154885787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0386811682528516602082015260a0604082018190526000906154c490830186614a5f565b82810360608401526154d68186614a5f565b9050828103608084015261360981856144e8565b6000602082840312156154fc57600080fd5b81516108ae81614491565b600060033d11156155205760046000803e5060005160e01c5b90565b600060443d10156155315790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561556057505050505090565b82850191508151818111156155785750505050505090565b843d87010160208285010111156155925750505050505090565b6155a16020828601018761468c565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60808152600061560760808301876144e8565b6001600160a01b039590951660208301525063ffffffff9290921660408301526001600160401b0316606090910152919050565b818103818111156107fa576107fa61502e565b808201808211156107fa576107fa61502e565b60ff60f81b8460f81b168152600083516156828160018501602088016144c4565b8351908301906156998160018401602088016144c4565b0160010195945050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906156e0908301846144e8565b97965050505050505056fe93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4aea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class NameWrapper__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_ens, _registrar, _metadataService, overrides) {
        return super.getDeployTransaction(_ens, _registrar, _metadataService, overrides || {});
    }
    deploy(_ens, _registrar, _metadataService, overrides) {
        return super.deploy(_ens, _registrar, _metadataService, overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.NameWrapper__factory = NameWrapper__factory;
NameWrapper__factory.bytecode = _bytecode;
NameWrapper__factory.abi = _abi;
