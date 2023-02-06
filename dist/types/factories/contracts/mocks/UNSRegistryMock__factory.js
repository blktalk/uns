"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNSRegistryMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
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
                name: "owner",
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
                indexed: false,
                internalType: "uint8",
                name: "version",
                type: "uint8",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "NewKey",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "NewURI",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "NewURIPrefix",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "RemoveReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ResetRecords",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "string",
                name: "keyIndex",
                type: "string",
            },
            {
                indexed: true,
                internalType: "string",
                name: "valueIndex",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "addr",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "SetReverse",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
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
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        inputs: [],
        name: "BATCH_LIMIT",
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
        inputs: [],
        name: "NAME",
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
        inputs: [],
        name: "VERSION",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "addKey",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "addProxyReader",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[][]",
                name: "domains",
                type: "string[][]",
            },
        ],
        name: "backfillReverseNames",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "depositData",
                type: "bytes",
            },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "depositToPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        stateMutability: "nonpayable",
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
        name: "exists",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "get",
        outputs: [
            {
                internalType: "string",
                name: "value",
                type: "string",
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
        name: "getApproved",
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
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getByHash",
        outputs: [
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
        ],
        name: "getKey",
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
                internalType: "uint256[]",
                name: "hashes",
                type: "uint256[]",
            },
        ],
        name: "getKeys",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getMany",
        outputs: [
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getManyByHash",
        outputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "mintingManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "cnsRegistry",
                type: "address",
            },
            {
                internalType: "address",
                name: "rootChainManager",
                type: "address",
            },
            {
                internalType: "address",
                name: "childChainManager",
                type: "address",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
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
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isApprovedOrOwner",
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
                name: "forwarder",
                type: "address",
            },
        ],
        name: "isTrustedForwarder",
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
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "user",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string",
                name: "uri",
                type: "string",
            },
        ],
        name: "mintTLD",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "mintWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "namehash",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
        name: "nonceOf",
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
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
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
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
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
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "reconfigure",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "removeReverse",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "reset",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "resolverOf",
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
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseNameOf",
        outputs: [
            {
                internalType: "string",
                name: "reverseUri",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "reverseOf",
        outputs: [
            {
                internalType: "uint256",
                name: "reverse",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "root",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "pure",
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
                name: "tokenId",
                type: "uint256",
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
                name: "tokenId",
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
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "set",
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
                internalType: "uint256",
                name: "keyHash",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "value",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setByHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setMany",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "keyHashes",
                type: "uint256[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "setManyByHash",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "setOwner",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
        ],
        name: "setReverse",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "prefix",
                type: "string",
            },
        ],
        name: "setTokenURIPrefix",
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
        inputs: [],
        name: "symbol",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
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
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "string[]",
                name: "labels",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
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
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "unlockWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "tokenIds",
                type: "uint256[]",
            },
        ],
        name: "upgradeAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "from",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "nonce",
                        type: "uint256",
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
                internalType: "struct IForwarder.ForwardRequest",
                name: "req",
                type: "tuple",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
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
                internalType: "bytes",
                name: "inputData",
                type: "bytes",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "string[]",
                name: "keys",
                type: "string[]",
            },
            {
                internalType: "string[]",
                name: "values",
                type: "string[]",
            },
        ],
        name: "withdrawFromPolygon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50615116806100206000396000f3fe608060405234801561001057600080fd5b50600436106103a45760003560e01c806370a08231116101e9578063ba5d40b71161010f578063e985e9c5116100ad578063f5c1f76e1161007c578063f5c1f76e1461087e578063f7df5c6014610891578063f8c8765e146108a4578063ffa1ad74146108b757600080fd5b8063e985e9c514610820578063ebf0c7171461085c578063ec129eea14610863578063f25eb5c11461087657600080fd5b8063c87b56dd116100e9578063c87b56dd146107d4578063ce92b33e146107e7578063cf2c52cb146107fa578063d106353f1461080d57600080fd5b8063ba5d40b71461079b578063bb5b27e1146107ae578063bebec6b4146107c157600080fd5b8063a22cb46511610187578063ae31844a11610156578063ae31844a14610741578063b3f9e4cb14610754578063b85afd2814610767578063b88d4fde1461078857600080fd5b8063a22cb465146106dc578063a3f4df7e146106ef578063a42474001461071b578063ab3b87fe1461072e57600080fd5b80639508b1c4116101c35780639508b1c4146106a65780639559c0bd146106b957806395d89b41146106c157806399e0dd7c146106c957600080fd5b806370a082311461066d5780637e37479e1461068057806394d008ef1461069357600080fd5b806342842e0e116102ce57806350382c1a1161026c578063638e5c781161023b578063638e5c7814610605578063663f7b2a14610618578063672b9f811461062b5780636ccbae5f1461064c57600080fd5b806350382c1a146105b057806350960239146105c3578063572b6c05146105d65780636352211e146105f257600080fd5b806344d5f66c116102a857806344d5f66c1461056457806347c81699146105775780634a72584d1461058a5780634f558e791461059d57600080fd5b806342842e0e1461052b57806342966c681461053e578063430c20811461055157600080fd5b80631bf7e13e1161034657806327f189751161031557806327f18975146104df578063310bd74b146104f2578063384e9a551461050557806340c10f191461051857600080fd5b80631bf7e13e146104855780631f71be061461049857806323b872dd146104ab578063276fabb1146104be57600080fd5b8063095ea7b311610382578063095ea7b314610411578063150b7a02146104265780631bd8cc1a146104525780631be5e7ed1461047257600080fd5b806301ffc9a7146103a957806306fdde03146103d1578063081812fc146103e6575b600080fd5b6103bc6103b7366004614795565b6108db565b60405190151581526020015b60405180910390f35b6103d96108ec565b6040516103c89190614cbf565b6103f96103f43660046149c3565b61097e565b6040516001600160a01b0390911681526020016103c8565b61042461041f3660046143da565b6109a5565b005b6104396104343660046141cc565b6109be565b6040516001600160e01b031990911681526020016103c8565b610465610460366004614656565b610b19565b6040516103c89190614c5a565b6103d96104803660046148fd565b610c39565b6103d9610493366004614964565b610c84565b6104246104a63660046142a5565b610d8f565b6104246104b936600461418c565b610e1b565b6104d16104cc3660046145a7565b610e6e565b6040519081526020016103c8565b6104246104ed3660046145e6565b610e7d565b6104246105003660046149c3565b610ec5565b6104246105133660046149c3565b610f00565b6104246105263660046143da565b610f25565b61042461053936600461418c565b610f72565b61042461054c3660046149c3565b610f8d565b6103bc61055f3660046143da565b610fd1565b6104246105723660046144f7565b610fdd565b61042461058536600461489f565b6110bd565b610424610598366004614a0b565b6110fc565b6103bc6105ab3660046149c3565b611142565b6104246105be366004614932565b611161565b6104246105d13660046140c1565b611197565b6103bc6105e43660046140c1565b6001600160a01b0316301490565b6103f96106003660046149c3565b6111f7565b6104246106133660046149c3565b611257565b61042461062636600461469f565b6112a2565b61063e610639366004614a5b565b6112db565b6040516103c8929190614cd2565b6104d161065a3660046149c3565b6000908152610100602052604090205490565b6104d161067b3660046140c1565b6112f3565b6104d161068e3660046140c1565b611379565b6104246106a136600461449e565b6113aa565b6104246106b43660046147cd565b6113f9565b6104d1601481565b6103d9611480565b6104246106d736600461486c565b61148f565b6104246106ea36600461435d565b611515565b6103d96040518060400160405280600d81526020016c554e533a20526567697374727960981b81525081565b6103bc610729366004614964565b611527565b61042461073c3660046143da565b611572565b61042461074f3660046145a7565b6115b7565b6103f96107623660046149c3565b611663565b61077a610775366004614656565b61168d565b6040516103c8929190614c6d565b61042461079636600461423c565b6117f5565b6104246107a93660046142a5565b61183c565b6103d96107bc3660046149c3565b6118ad565b6103d96107cf3660046140c1565b61194f565b6103d96107e23660046149c3565b611a19565b6104246107f53660046145e6565b611a7f565b610424610808366004614388565b611abe565b61042461081b366004614405565b611b9b565b6103bc61082e3660046140f9565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006104d1565b6104246108713660046145e6565b611bf4565b610424611c33565b61046561088c3660046145a7565b611cb9565b61042461089f3660046149db565b611d96565b6104246108b2366004614131565b611e27565b6103d9604051806040016040528060058152602001640c0b8d8b8d60da1b81525081565b60006108e682611ffd565b92915050565b6060606580546108fb90615018565b80601f016020809104026020016040519081016040528092919081815260200182805461092790615018565b80156109745780601f1061094957610100808354040283529160200191610974565b820191906000526020600020905b81548152906001019060200180831161095757829003601f168201915b5050505050905090565b60006109898261204d565b506000908152606960205260409020546001600160a01b031690565b806109af816120ac565b6109b98383612113565b505050565b60007f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec92378546001600160a01b03166109f3612236565b6001600160a01b03161415610ab557610a0a612236565b6001600160a01b03166342966c68856040518263ffffffff1660e01b8152600401610a3791815260200190565b600060405180830381600087803b158015610a5157600080fd5b505af1158015610a65573d6000803e3d6000fd5b505050821580159150610a7f5750610a7f82840184614763565b15610a9d57610a8e3085612245565b610a988585612393565b610aa7565b610aa78585612245565b50630a85bd0160e11b610b10565b60405162461bcd60e51b815260206004820152602560248201527f52656769737472793a204552433732315f524543454956494e475f50524f4849604482015264109255115160da1b60648201526084015b60405180910390fd5b95945050505050565b6060826001600160401b03811115610b4157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610b7457816020015b6060815260200190600190039081610b5f5790505b50905060005b83811015610c3157610bf3858583818110610ba557634e487b7160e01b600052603260045260246000fd5b9050602002810190610bb79190614e66565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061243e915050565b828281518110610c1357634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080610c299061504d565b915050610b7a565b509392505050565b6060610c7c84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525086925061243e915050565b949350505050565b606060005a9050610c96858585611527565b610cf25760405162461bcd60e51b815260206004820152602760248201527f554e535265676973747279466f727761726465723a205349474e41545552455f6044820152661253959053125160ca1b6064820152608401610b07565b610d84610d0260208701876140c1565b30604088013584610d1660608b018b614e66565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b908190840183828082843760009201919091525061247392505050565b9150505b9392505050565b610134546001600160a01b0316610da4612236565b6001600160a01b031614610dca5760405162461bcd60e51b8152600401610b0790614d92565b6000610dde610dd9888a614f40565b612562565b9050610dee8982888888886125bf565b8115610e1057610e108982610e0b610e068b8d614f40565b6125e8565b612685565b505050505050505050565b80610e2d610e27612236565b826126c7565b610e495760405162461bcd60e51b8152600401610b0790614cf7565b81610e53816120ac565b610e5c83612745565b610e678585856127b2565b5050505050565b6000610d88610dd98385614f40565b80610e89610e27612236565b610ea55760405162461bcd60e51b8152600401610b0790614cf7565b81610eaf816120ac565b610ebc8787878787612959565b50505050505050565b80610ed1610e27612236565b610eed5760405162461bcd60e51b8152600401610b0790614cf7565b81610ef7816120ac565b6109b983612745565b80610f0a816129d8565b81610f14816120ac565b6109b9610f1f612236565b84612a48565b610f2d612a90565b6001600160a01b0316610f3e612236565b6001600160a01b031614610f645760405162461bcd60e51b8152600401610b0790614e24565b610f6e8282612245565b5050565b6109b9838383604051806020016040528060008152506117f5565b80610f99610e27612236565b610fb55760405162461bcd60e51b8152600401610b0790614cf7565b81610fbf816120ac565b610fc883612745565b6109b983612ba3565b6000610d8883836126c7565b610134546001600160a01b0316610ff2612236565b6001600160a01b0316146110185760405162461bcd60e51b8152600401610b0790614d92565b60005b8151811015610f6e5761105482828151811061104757634e487b7160e01b600052603260045260246000fd5b60200260200101516125e8565b610138600061108985858151811061107c57634e487b7160e01b600052603260045260246000fd5b6020026020010151612562565b815260200190815260200160002090805190602001906110aa929190613e1a565b50806110b58161504d565b91505061101b565b806110c9610e27612236565b6110e55760405162461bcd60e51b8152600401610b0790614cf7565b816110ef816120ac565b610ebc8787878787612c4a565b80611108610e27612236565b6111245760405162461bcd60e51b8152600401610b0790614cf7565b8161112e816120ac565b61113a86868686612d29565b505050505050565b6000818152606760205260408120546001600160a01b031615156108e6565b611194816040516020016111759190614b25565b6040516020818303038152906040528051906020012060001c82612dc9565b50565b610134546001600160a01b03166111ac612236565b6001600160a01b0316146111d25760405162461bcd60e51b8152600401610b0790614d92565b6001600160a01b0316600090815261013660205260409020805460ff19166001179055565b6000818152606760205260408120546001600160a01b0316806108e65760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610b07565b80611263610e27612236565b61127f5760405162461bcd60e51b8152600401610b0790614cf7565b61129161128a612236565b30846127b2565b610f6e61129c612236565b83612393565b60006112ad82612562565b90506112b8816129d8565b6112c1816120ac565b610f6e6112cc612236565b826112d6856125e8565b612df5565b6060806112e88484612e43565b909590945092505050565b60006001600160a01b03821661135d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610b07565b506001600160a01b031660009081526068602052604090205490565b6001600160a01b0381166000908152610135602052604081205461139c81612e64565b6113a4578091505b50919050565b6113b2612a90565b6001600160a01b03166113c3612236565b6001600160a01b0316146113e95760405162461bcd60e51b8152600401610b0790614e24565b6113f38484612245565b50505050565b6114038787612eae565b61140b612236565b6001600160a01b031661141d866111f7565b6001600160a01b0316146114735760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610b07565b610ebc8484848489612f1d565b6060606680546108fb90615018565b610134546001600160a01b03166114a4612236565b6001600160a01b0316146114ca5760405162461bcd60e51b8152600401610b0790614d92565b6114d76101338383613e9a565b507f4b120d6a959a84a520fa48f5f937cca0e79129423487af7901213b5d2e89313b8282604051611509929190614cab565b60405180910390a15050565b610f6e611520612236565b8383612fa7565b6000610c7c61153585614f4d565b3085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061307692505050565b8061157e610e27612236565b61159a5760405162461bcd60e51b8152600401610b0790614cf7565b816115a4816120ac565b6113f36115b0846111f7565b85856127b2565b610134546001600160a01b03166115cc612236565b6001600160a01b0316146115f25760405162461bcd60e51b8152600401610b0790614d92565b60005b818110156109b9576001610137600085858581811061162457634e487b7160e01b600052603260045260246000fd5b90506020020135815260200190815260200160002060006101000a81548160ff021916908315150217905550808061165b9061504d565b9150506115f5565b6000818152606760205260408120546001600160a01b03166116865760006108e6565b3092915050565b606080836001600160401b038111156116b657634e487b7160e01b600052604160045260246000fd5b6040519080825280602002602001820160405280156116e957816020015b60608152602001906001900390816116d45790505b509150836001600160401b0381111561171257634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561174557816020015b60608152602001906001900390816117305790505b50905060005b848110156117ec5761178386868381811061177657634e487b7160e01b600052603260045260246000fd5b9050602002013585612e43565b8483815181106117a357634e487b7160e01b600052603260045260246000fd5b602002602001018484815181106117ca57634e487b7160e01b600052603260045260246000fd5b60200260200101829052829052505080806117e49061504d565b91505061174b565b50935093915050565b81611801610e27612236565b61181d5760405162461bcd60e51b8152600401610b0790614cf7565b82611827816120ac565b61183084612745565b61113a868686866131ce565b610134546001600160a01b0316611851612236565b6001600160a01b0316146118775760405162461bcd60e51b8152600401610b0790614d92565b6000611886610dd9888a614f40565b90506118a0898261189a610e068b8d614f40565b85613201565b610e108686868685612f1d565b600081815260c9602052604090208054606091906118ca90615018565b80601f01602080910402602001604051908101604052809291908181526020018280546118f690615018565b80156119435780601f1061191857610100808354040283529160200191611943565b820191906000526020600020905b81548152906001019060200180831161192657829003601f168201915b50505050509050919050565b6001600160a01b0381166000908152610135602052604090205460609061197581612e64565b6113a457600081815261013860205260409020805461199390615018565b80601f01602080910402602001604051908101604052809291908181526020018280546119bf90615018565b8015611a0c5780601f106119e157610100808354040283529160200191611a0c565b820191906000526020600020905b8154815290600101906020018083116119ef57829003601f168201915b5050505050915050919050565b6060611a248261204d565b6000611a2e613254565b90506000815111611a4e5760405180602001604052806000815250610d88565b80611a5884613264565b604051602001611a69929190614bcc565b6040516020818303038152906040529392505050565b80611a8b610e27612236565b611aa75760405162461bcd60e51b8152600401610b0790614cf7565b81611ab1816120ac565b610ebc8787878787612f1d565b7f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87546001600160a01b0316611af1612236565b6001600160a01b031614611b175760405162461bcd60e51b8152600401610b0790614e24565b6020811415611b3a576000611b2e828401846149c3565b90506113f38482612245565b6000611b48828401846146d1565b805190915060005b8181101561113a57611b8986848381518110611b7c57634e487b7160e01b600052603260045260246000fd5b6020026020010151612245565b80611b938161504d565b915050611b50565b610134546001600160a01b0316611bb0612236565b6001600160a01b031614611bd65760405162461bcd60e51b8152600401610b0790614d92565b611be48787878787876125bf565b8015610ebc57610ebc878761337d565b80611c00610e27612236565b611c1c5760405162461bcd60e51b8152600401610b0790614cf7565b81611c26816120ac565b610ebc87878787876133be565b6000611c3d612236565b6001600160a01b03811660009081526101356020526040902054909150611cb05760405162461bcd60e51b815260206004820152602160248201527f52656769737472793a20524556455253455f5245434f52445f49535f454d50546044820152605960f81b6064820152608401610b07565b611194816133d4565b6060816001600160401b03811115611ce157634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015611d1457816020015b6060815260200190600190039081611cff5790505b50905060005b82811015611d8f57611d51848483818110611d4557634e487b7160e01b600052603260045260246000fd5b905060200201356118ad565b828281518110611d7157634e487b7160e01b600052603260045260246000fd5b60200260200101819052508080611d879061504d565b915050611d1a565b5092915050565b610134546001600160a01b0316611dab612236565b6001600160a01b031614611dd15760405162461bcd60e51b8152600401610b0790614d92565b61013454611de8906001600160a01b031684612245565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528383604051611e1a929190614cab565b60405180910390a2505050565b600054610100900460ff1615808015611e475750600054600160ff909116105b80611e615750303b158015611e61575060005460ff166001145b611ec45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610b07565b6000805460ff191660011790558015611ee7576000805461ff0019166101001790555b61013480546001600160a01b0319166001600160a01b038716179055837f8ffb960699dc2ba88f34d0e41c029c3c36c95149679fe1d0153a9582bec9237880546001600160a01b0319166001600160a01b03929092169190911790556040805180820182526013815272556e73746f707061626c6520446f6d61696e7360681b60208083019190915282518084019093526002835261155160f21b90830152611f8f91613419565b611f97613467565b611f9f613467565b611fa883613490565b611fb1826134c0565b8015610e67576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050505050565b60006001600160e01b031982166380ac58cd60e01b148061202e57506001600160e01b03198216635b5e139f60e01b145b806108e657506301ffc9a760e01b6001600160e01b03198316146108e6565b6000818152606760205260409020546001600160a01b03166111945760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610b07565b3033141561210a576120bc6134f0565b81146111945760405162461bcd60e51b815260206004820152601760248201527f52656769737472793a20544f4b454e5f494e56414c49440000000000000000006044820152606401610b07565b61119481613505565b600061211e826111f7565b9050806001600160a01b0316836001600160a01b0316141561218c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610b07565b806001600160a01b031661219e612236565b6001600160a01b031614806121ba57506121ba8161082e612236565b61222c5760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610b07565b6109b98383613533565b60006122406135a1565b905090565b6001600160a01b03821661229b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610b07565b6000818152606760205260409020546001600160a01b0316156123005760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610b07565b61230c600083836135bd565b6001600160a01b0382166000908152606860205260408120805460019290612335908490614efd565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061239d612a90565b90506123a98183613533565b6000805160206150ea83398151915254604080516020808201869052825180830390910181528183019283905263e3dec8fb60e01b9092526001600160a01b0390921691829163e3dec8fb91612406918891309190604401614bfb565b600060405180830381600087803b15801561242057600080fd5b505af1158015612434573d6000803e3d6000fd5b5050505050505050565b6060610d88836040516020016124549190614b25565b6040516020818303038152906040528051906020012060001c8361365a565b606061247e85613505565b600080876001600160a01b0316866124988b8a898961373c565b6040516124a59190614b25565b60006040518083038160008787f1925050503d80600081146124e3576040519150601f19603f3d011682016040523d82523d6000602084013e6124e8565b606091505b5090925090506124f9603f87614f15565b5a1161251557634e487b7160e01b600052600160045260246000fd5b61255582826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061376c565b9998505050505050505050565b805160009081905b8015611d8f576125ab8285612580600185614f29565b8151811061259e57634e487b7160e01b600052603260045260246000fd5b60200260200101516137a5565b9150806125b781615001565b91505061256a565b6125c885612745565b6125db6125d4866111f7565b87876127b2565b61113a8484848489612f1d565b606060008260008151811061260d57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600190505b8351811015611d8f578184828151811061264857634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001612661929190614b80565b6040516020818303038152906040529150808061267d9061504d565b91505061261e565b61dead6001600160a01b038416148015906126b757506001600160a01b03831660009081526101356020526040902054155b156109b9576109b9838383612df5565b6000806126d3836111f7565b9050806001600160a01b0316846001600160a01b0316148061271a57506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610c7c5750836001600160a01b03166127338461097e565b6001600160a01b031614949350505050565b61274e81613852565b60405160200161276091815260200190565b60408051601f198184030181528282528051602091820120600085815260cb9092529181209190915582917f185c30856dadb58bf097c1f665a52ada7029752dbcad008ea3fefc73bee8c9fe9190a250565b826001600160a01b03166127c5826111f7565b6001600160a01b0316146128295760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610b07565b6001600160a01b03821661288b5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610b07565b6128968383836135bd565b6128a1600082613533565b6001600160a01b03831660009081526068602052604081208054600192906128ca908490614f29565b90915550506001600160a01b03821660009081526068602052604081208054600192906128f8908490614efd565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60005b8481101561113a576129c686868381811061298757634e487b7160e01b600052603260045260246000fd5b905060200201358585848181106129ae57634e487b7160e01b600052603260045260246000fd5b90506020028101906129c09190614e66565b85612d29565b806129d08161504d565b91505061295c565b6129e0612236565b6001600160a01b03166129f2826111f7565b6001600160a01b0316146111945760405162461bcd60e51b815260206004820152601d60248201527f52656769737472793a2053454e4445525f49535f4e4f545f4f574e45520000006044820152606401610b07565b6001600160a01b03821660008181526101356020526040808220849055518392917feb76a21470988c474a21f690cc28fee1ed511bd812dc3c21fd0f49c5e5d4708a91a35050565b6000806000805160206150ea8339815191525460405163721804d360e11b81523060048201526001600160a01b039091169150600090829063e43009a69060240160206040518083038186803b158015612ae957600080fd5b505afa158015612afd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b21919061477d565b60405163e66f960360e01b8152600481018290529091506001600160a01b0383169063e66f96039060240160206040518083038186803b158015612b6457600080fd5b505afa158015612b78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b9c91906140dd565b9250505090565b6000612bae826111f7565b9050612bbc816000846135bd565b612bc7600083613533565b6001600160a01b0381166000908152606860205260408120805460019290612bf0908490614f29565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60008585604051602001612c5f929190614bbc565b60408051601f198184030181528282528051602091820120601f8901829004820284018201909252878352909250612cb39183918990899081908401838280828437600092019190915250612dc992505050565b61113a8187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b01819004810282018101909252898152925089915088908190840183828082843760009201919091525088925061387e915050565b612d32846139b9565b612d7e5760405162461bcd60e51b815260206004820152601c60248201527f5265636f726453746f726167653a204b45595f4e4f545f464f554e44000000006044820152606401610b07565b6113f384612d8b866118ad565b85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525087925061387e915050565b612dd2826139b9565b610f6e57600082815260c96020908152604090912082516109b992840190613e1a565b6000828152610138602052604090208054612e0f90615018565b15159050612e39576000828152610138602090815260409091208251612e3792840190613e1a565b505b6109b98383612a48565b606080612e4f846118ad565b9150612e5b848461365a565b90509250929050565b6000818152610137602052604081205460ff1680156108e657506101366000612e8b612236565b6001600160a01b0316815260208101919091526040016000205460ff1692915050565b6000805160206150ea83398151915254604051633805550f60e01b81526001600160a01b03909116908190633805550f90612eef9086908690600401614cab565b600060405180830381600087803b158015612f0957600080fd5b505af1158015610ebc573d6000803e3d6000fd5b60005b8481101561113a57612f95868683818110612f4b57634e487b7160e01b600052603260045260246000fd5b9050602002810190612f5d9190614e66565b868685818110612f7d57634e487b7160e01b600052603260045260246000fd5b9050602002810190612f8f9190614e66565b86612c4a565b80612f9f8161504d565b915050612f20565b816001600160a01b0316836001600160a01b031614156130095760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610b07565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f9060240160206040518083038186803b1580156130b857600080fd5b505afa1580156130cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130f0919061477d565b9050600061319e86606001518051906020012086886020015160405160200161313e9392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156131c4575085516131c4906001600160a01b031682866139df565b9695505050505050565b6131d98484846127b2565b6131e584848484613b2f565b6113f35760405162461bcd60e51b8152600401610b0790614d40565b61320b8484612245565b827fc5beef08f693b11c316c0c8394a377a0033c9cf701b8cd8afd79cecef60c39528360405161323b9190614cbf565b60405180910390a280156113f3576113f3848484612685565b606061013380546108fb90615018565b6060816132885750506040805180820190915260018152600360fc1b602082015290565b8160005b81156132b2578061329c8161504d565b91506132ab9050600a83614f15565b915061328c565b6000816001600160401b038111156132da57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015613304576020820181803683370190505b5090505b8415610c7c57613319600183614f29565b9150613326600a86615068565b613331906030614efd565b60f81b81838151811061335457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350613376600a86614f15565b9450613308565b61dead6001600160a01b038316148015906133af57506001600160a01b03821660009081526101356020526040902054155b15610f6e57610f6e8282612a48565b6133c781612745565b610e678585858585612f1d565b6001600160a01b03811660008181526101356020526040808220829055517ffcf5eec0cfa3e6332f5f0e63ec242d71f866a61d121d6cdf5c2eb3b668a26c4f9190a250565b600054610100900460ff166134405760405162461bcd60e51b8152600401610b0790614dd9565b8151613453906065906020850190613e1a565b5080516109b9906066906020840190613e1a565b600054610100900460ff1661348e5760405162461bcd60e51b8152600401610b0790614dd9565b565b600054610100900460ff166134b75760405162461bcd60e51b8152600401610b0790614dd9565b61119481613c40565b600054610100900460ff166134e75760405162461bcd60e51b8152600401610b0790614dd9565b61119481613c99565b6000303314156135025750601f193601355b90565b60008181526101006020526040902054613520906001614efd565b6000918252610100602052604090912055565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190613568826111f7565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000303314156135b8575060331936013560601c90565b503390565b6000818152610137602052604090205460ff1615806135e457506001600160a01b03821615155b6136305760405162461bcd60e51b815260206004820152601860248201527f52656769737472793a20544f4b454e5f555047524144454400000000000000006044820152606401610b07565b6001600160a01b038316600090815261013560205260409020548114156109b9576109b9836133d4565b606061366582612e64565b1561367f57506040805160208101909152600081526108e6565b60ca600061368c84613852565b8152602001908152602001600020600084815260200190815260200160002080546136b690615018565b80601f01602080910402602001604051908101604052809291908181526020018280546136e290615018565b801561372f5780601f106137045761010080835404028352916020019161372f565b820191906000526020600020905b81548152906001019060200180831161371257829003601f168201915b5050505050905092915050565b606082858560405160200161375393929190614b41565b6040516020818303038152906040529050949350505050565b6060831561377b575081610d88565b82511561378b5782518084602001fd5b8160405162461bcd60e51b8152600401610b079190614cbf565b60008151600014156137f15760405162461bcd60e51b815260206004820152601560248201527452656769737472793a204c4142454c5f454d50545960581b6044820152606401610b07565b82826040516020016138039190614b25565b60405160208183030381529060405280519060200120604051602001613833929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b600081815260cb60205260408120541561387a57600082815260cb60205260409020546108e6565b5090565b60ca600061388b83613852565b8152602001908152602001600020600085815260200190815260200160002080546138b590615018565b1515905061390c57826040516138cb9190614b25565b6040518091039020817f7ae4f661958fbecc2f77be6b0eb280d2a6f604b29e1e7221c82b9da0c4af7f86856040516139039190614cbf565b60405180910390a35b8160ca600061391a84613852565b81526020019081526020016000206000868152602001908152602001600020908051906020019061394c929190613e1a565b508160405161395b9190614b25565b6040518091039020836040516139719190614b25565b6040518091039020827f851ffe8e74d5015261dba0a1f9e1b0e5d42c5af5d2ad1908fee897c7d80a0d9286866040516139ab929190614cd2565b60405180910390a450505050565b600081815260c96020526040812080548291906139d590615018565b9050119050919050565b60008060006139ee8585613ce7565b90925090506000816004811115613a1557634e487b7160e01b600052602160045260246000fd5b148015613a335750856001600160a01b0316826001600160a01b0316145b15613a4357600192505050610d88565b600080876001600160a01b0316631626ba7e60e01b8888604051602401613a6b929190614c92565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051613aa99190614b25565b600060405180830381855afa9150503d8060008114613ae4576040519150601f19603f3d011682016040523d82523d6000602084013e613ae9565b606091505b5091509150818015613afc575080516020145b8015613b2357508051630b135d3f60e11b90613b21908301602090810190840161477d565b145b98975050505050505050565b60006001600160a01b0384163b15613c3857836001600160a01b031663150b7a02613b58612236565b8786866040518563ffffffff1660e01b8152600401613b7a9493929190614c27565b602060405180830381600087803b158015613b9457600080fd5b505af1925050508015613bc4575060408051601f3d908101601f19168201909252613bc1918101906147b1565b60015b613c1e573d808015613bf2576040519150601f19603f3d011682016040523d82523d6000602084013e613bf7565b606091505b508051613c165760405162461bcd60e51b8152600401610b0790614d40565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610c7c565b506001610c7c565b600054610100900460ff16613c675760405162461bcd60e51b8152600401610b0790614dd9565b806000805160206150ea8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b600054610100900460ff16613cc05760405162461bcd60e51b8152600401610b0790614dd9565b807f8bea9a6f8afd34f4e29c585f854e0cc5161431bf5fc299d468454d33dce53b87613c78565b600080825160411415613d1e5760208301516040840151606085015160001a613d1287828585613d2d565b94509450505050613d26565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613d645750600090506003613e11565b8460ff16601b14158015613d7c57508460ff16601c14155b15613d8d5750600090506004613e11565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613de1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613e0a57600060019250925050613e11565b9150600090505b94509492505050565b828054613e2690615018565b90600052602060002090601f016020900481019282613e485760008555613e8e565b82601f10613e6157805160ff1916838001178555613e8e565b82800160010185558215613e8e579182015b82811115613e8e578251825591602001919060010190613e73565b5061387a929150613f0e565b828054613ea690615018565b90600052602060002090601f016020900481019282613ec85760008555613e8e565b82601f10613ee15782800160ff19823516178555613e8e565b82800160010185558215613e8e579182015b82811115613e8e578235825591602001919060010190613ef3565b5b8082111561387a5760008155600101613f0f565b6000613f36613f3184614eda565b614eaa565b9050808382526020808301915083868660051b86011115613f5657600080fd5b6000805b87811015613f965782356001600160401b03811115613f77578283fd5b613f838a828a01614057565b8652509383019391830191600101613f5a565b50505050509392505050565b60008083601f840112613fb3578182fd5b5081356001600160401b03811115613fc9578182fd5b6020830191508360208260051b8501011115613d2657600080fd5b600082601f830112613ff4578081fd5b610d8883833560208501613f23565b8035801515811461401357600080fd5b919050565b60008083601f840112614029578182fd5b5081356001600160401b0381111561403f578182fd5b602083019150836020828501011115613d2657600080fd5b600082601f830112614067578081fd5b81356001600160401b03811115614080576140806150a8565b614093601f8201601f1916602001614eaa565b8181528460208386010111156140a7578283fd5b816020850160208301379081016020019190915292915050565b6000602082840312156140d2578081fd5b8135610d88816150be565b6000602082840312156140ee578081fd5b8151610d88816150be565b6000806040838503121561410b578081fd5b8235614116816150be565b91506020830135614126816150be565b809150509250929050565b60008060008060808587031215614146578182fd5b8435614151816150be565b93506020850135614161816150be565b92506040850135614171816150be565b91506060850135614181816150be565b939692955090935050565b6000806000606084860312156141a0578081fd5b83356141ab816150be565b925060208401356141bb816150be565b929592945050506040919091013590565b6000806000806000608086880312156141e3578283fd5b85356141ee816150be565b945060208601356141fe816150be565b93506040860135925060608601356001600160401b0381111561421f578182fd5b61422b88828901614018565b969995985093965092949392505050565b60008060008060808587031215614251578182fd5b843561425c816150be565b9350602085013561426c816150be565b92506040850135915060608501356001600160401b0381111561428d578182fd5b61429987828801614057565b91505092959194509250565b60008060008060008060008060a0898b0312156142c0578586fd5b88356142cb816150be565b975060208901356001600160401b03808211156142e6578788fd5b6142f28c838d01613fa2565b909950975060408b013591508082111561430a578485fd5b6143168c838d01613fa2565b909750955060608b013591508082111561432e578485fd5b5061433b8b828c01613fa2565b909450925061434e905060808a01614003565b90509295985092959890939650565b6000806040838503121561436f578182fd5b823561437a816150be565b9150612e5b60208401614003565b60008060006040848603121561439c578081fd5b83356143a7816150be565b925060208401356001600160401b038111156143c1578182fd5b6143cd86828701614018565b9497909650939450505050565b600080604083850312156143ec578182fd5b82356143f7816150be565b946020939093013593505050565b600080600080600080600060a0888a03121561441f578081fd5b873561442a816150be565b96506020880135955060408801356001600160401b038082111561444c578283fd5b6144588b838c01613fa2565b909750955060608a0135915080821115614470578283fd5b5061447d8a828b01613fa2565b9094509250614490905060808901614003565b905092959891949750929550565b600080600080606085870312156144b3578182fd5b84356144be816150be565b93506020850135925060408501356001600160401b038111156144df578283fd5b6144eb87828801614018565b95989497509550505050565b60006020808385031215614509578182fd5b82356001600160401b038082111561451f578384fd5b818501915085601f830112614532578384fd5b8135614540613f3182614eda565b80828252858201915085850189878560051b880101111561455f578788fd5b875b848110156145985781358681111561457757898afd5b6145858c8a838b0101613fe4565b8552509287019290870190600101614561565b50909998505050505050505050565b600080602083850312156145b9578182fd5b82356001600160401b038111156145ce578283fd5b6145da85828601613fa2565b90969095509350505050565b6000806000806000606086880312156145fd578283fd5b85356001600160401b0380821115614613578485fd5b61461f89838a01613fa2565b90975095506020880135915080821115614637578485fd5b5061464488828901613fa2565b96999598509660400135949350505050565b60008060006040848603121561466a578081fd5b83356001600160401b0381111561467f578182fd5b61468b86828701613fa2565b909790965060209590950135949350505050565b6000602082840312156146b0578081fd5b81356001600160401b038111156146c5578182fd5b610c7c84828501613fe4565b600060208083850312156146e3578182fd5b82356001600160401b038111156146f8578283fd5b8301601f81018513614708578283fd5b8035614716613f3182614eda565b80828252848201915084840188868560051b8701011115614735578687fd5b8694505b83851015614757578035835260019490940193918501918501614739565b50979650505050505050565b600060208284031215614774578081fd5b610d8882614003565b60006020828403121561478e578081fd5b5051919050565b6000602082840312156147a6578081fd5b8135610d88816150d3565b6000602082840312156147c2578081fd5b8151610d88816150d3565b60008060008060008060006080888a0312156147e7578081fd5b87356001600160401b03808211156147fd578283fd5b6148098b838c01614018565b909950975060208a0135965060408a0135915080821115614828578283fd5b6148348b838c01613fa2565b909650945060608a013591508082111561484c578283fd5b506148598a828b01613fa2565b989b979a50959850939692959293505050565b6000806020838503121561487e578182fd5b82356001600160401b03811115614893578283fd5b6145da85828601614018565b6000806000806000606086880312156148b6578283fd5b85356001600160401b03808211156148cc578485fd5b6148d889838a01614018565b909750955060208801359150808211156148f0578485fd5b5061464488828901614018565b600080600060408486031215614911578081fd5b83356001600160401b03811115614926578182fd5b61468b86828701614018565b600060208284031215614943578081fd5b81356001600160401b03811115614958578182fd5b610c7c84828501614057565b600080600060408486031215614978578081fd5b83356001600160401b038082111561498e578283fd5b90850190608082880312156149a1578283fd5b909350602085013590808211156149b6578283fd5b506143cd86828701614018565b6000602082840312156149d4578081fd5b5035919050565b6000806000604084860312156149ef578081fd5b8335925060208401356001600160401b038111156143c1578182fd5b60008060008060608587031215614a20578182fd5b8435935060208501356001600160401b03811115614a3c578283fd5b614a4887828801614018565b9598909750949560400135949350505050565b60008060408385031215614a6d578182fd5b50508035926020909101359150565b600081518084526020808501808196508360051b81019150828601855b85811015614ac3578284038952614ab1848351614af9565b98850198935090840190600101614a99565b5091979650505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60008151808452614b11816020860160208601614fd5565b601f01601f19169290920160200192915050565b60008251614b37818460208701614fd5565b9190910192915050565b60008451614b53818460208901614fd5565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b60008351614b92818460208801614fd5565b601760f91b9083019081528351614bb0816001840160208801614fd5565b01600101949350505050565b8183823760009101908152919050565b60008351614bde818460208801614fd5565b835190830190614bf2818360208801614fd5565b01949350505050565b6001600160a01b03848116825283166020820152606060408201819052600090610b1090830184614af9565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906131c490830184614af9565b602081526000610d886020830184614a7c565b604081526000614c806040830185614a7c565b8281036020840152610d848185614a7c565b828152604060208201526000610c7c6040830184614af9565b602081526000610c7c602083018486614ad0565b602081526000610d886020830184614af9565b604081526000614ce56040830185614af9565b8281036020840152610d848185614af9565b60208082526029908201527f52656769737472793a2053454e4445525f49535f4e4f545f415050524f5645446040820152682fa7a92fa7aba722a960b91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526027908201527f52656769737472793a2053454e4445525f49535f4e4f545f4d494e54494e475f60408201526626a0a720a3a2a960c91b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60208082526022908201527f52656769737472793a20494e53554646494349454e545f5045524d495353494f6040820152614e5360f01b606082015260800190565b6000808335601e19843603018112614e7c578283fd5b8301803591506001600160401b03821115614e95578283fd5b602001915036819003821315613d2657600080fd5b604051601f8201601f191681016001600160401b0381118282101715614ed257614ed26150a8565b604052919050565b60006001600160401b03821115614ef357614ef36150a8565b5060051b60200190565b60008219821115614f1057614f1061507c565b500190565b600082614f2457614f24615092565b500490565b600082821015614f3b57614f3b61507c565b500390565b6000610d88368484613f23565b600060808236031215614f5e578081fd5b604051608081016001600160401b038282108183111715614f8157614f816150a8565b8160405284359150614f92826150be565b81835260208501356020840152604085013560408401526060850135915080821115614fbc578384fd5b50614fc936828601614057565b60608301525092915050565b60005b83811015614ff0578181015183820152602001614fd8565b838111156113f35750506000910152565b6000816150105761501061507c565b506000190190565b600181811c9082168061502c57607f821691505b602082108114156113a457634e487b7160e01b600052602260045260246000fd5b60006000198214156150615761506161507c565b5060010190565b60008261507757615077615092565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461119457600080fd5b6001600160e01b03198116811461119457600080fdfebe2bb46ac0377341a1ec5c3116d70fd5029d704bd46292e58f6265dd177ebafea164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class UNSRegistryMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UNSRegistryMock__factory = UNSRegistryMock__factory;
UNSRegistryMock__factory.bytecode = _bytecode;
UNSRegistryMock__factory.abi = _abi;
