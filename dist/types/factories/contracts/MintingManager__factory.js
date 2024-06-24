"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManager__factory = void 0;
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
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Blocked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistDisabled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "BlocklistEnabled",
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
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "DomainPurchase",
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
                indexed: false,
                internalType: "string",
                name: "tld",
                type: "string",
            },
        ],
        name: "NewTld",
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
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
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
        name: "RemoveTld",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "previousAdminRole",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "newAdminRole",
                type: "bytes32",
            },
        ],
        name: "RoleAdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleGranted",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "RoleRevoked",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "recepient",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "Withdrawal",
        type: "event",
    },
    {
        inputs: [],
        name: "DEFAULT_ADMIN_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINTER_ROLE",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
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
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "addMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "addrs",
                type: "address[]",
            },
        ],
        name: "addProxyReaders",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "tld",
                type: "string",
            },
            {
                internalType: "bool",
                name: "isExpirable",
                type: "bool",
            },
        ],
        name: "addTld",
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
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "buy",
        outputs: [],
        stateMutability: "payable",
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
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "buyForErc20",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claim",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
            },
        ],
        name: "claimTo",
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
                name: "tld",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "label",
                type: "string",
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
        name: "claimToWithRecords",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "closeMinter",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsMintingController",
        outputs: [
            {
                internalType: "contract IMintingController",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsResolver",
        outputs: [
            {
                internalType: "contract IResolver",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "cnsURIPrefixController",
        outputs: [
            {
                internalType: "contract IURIPrefixController",
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
                name: "role",
                type: "bytes32",
            },
        ],
        name: "getRoleAdmin",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "grantRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "hasRole",
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
                internalType: "contract IUNSRegistry",
                name: "unsRegistry_",
                type: "address",
            },
            {
                internalType: "contract IMintingController",
                name: "cnsMintingController_",
                type: "address",
            },
            {
                internalType: "contract IURIPrefixController",
                name: "cnsURIPrefixController_",
                type: "address",
            },
            {
                internalType: "contract IResolver",
                name: "cnsResolver_",
                type: "address",
            },
            {
                internalType: "address",
                name: "unsOperator_",
                type: "address",
            },
            {
                internalType: "address",
                name: "forwarder",
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
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "isBlocked",
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
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
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
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "bool",
                name: "withReverse",
                type: "bool",
            },
        ],
        name: "issueExpirableWithRecords",
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
        name: "issueWithRecords",
        outputs: [],
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
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
                name: "account",
                type: "address",
            },
        ],
        name: "removeMinter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "accounts",
                type: "address[]",
            },
        ],
        name: "removeMinters",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tld",
                type: "uint256",
            },
        ],
        name: "removeTld",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "expiry",
                type: "uint64",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "renew",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceMinter",
        outputs: [],
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
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "renounceRole",
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
        name: "revoke",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "role",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "revokeRole",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address payable",
                name: "receiver",
                type: "address",
            },
        ],
        name: "rotateMinter",
        outputs: [],
        stateMutability: "payable",
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
        name: "setForwarder",
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
        ],
        name: "setOperator",
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
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unsOperator",
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
        inputs: [],
        name: "unsRegistry",
        outputs: [
            {
                internalType: "contract IUNSRegistry",
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
                name: "recepient",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "recepient",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50614ffc806100206000396000f3fe6080604052600436106102ae5760003560e01c8063906cecc111610175578063b9998a24116100dc578063d547741f11610095578063f2fde38b1161006f578063f2fde38b14610892578063f5243bc4146108b2578063f940e385146108d2578063ffa1ad74146108f257600080fd5b8063d547741f1461083f578063d7db74c71461085f578063ec5273891461087257600080fd5b8063b9998a241461077d578063cc2a9a5b1461079d578063cc2c3fc4146107bd578063ceeb4f50146107dd578063d1f5692c146107fd578063d53913931461081d57600080fd5b8063a3a3f7f61161012e578063a3a3f7f614610690578063a3f4df7e146106b0578063a849d65c146106fd578063aa271e1a1461071d578063b0aa98c71461073d578063b3ab15fb1461075d57600080fd5b8063906cecc1146105e657806391d1485414610606578063983b2d5614610626578063986502751461064657806399e0dd7c1461065b578063a217fddf1461067b57600080fd5b80635b6fa8db11610219578063715018a6116101d2578063715018a61461054b57806371e2a6571461056057806377a2a5891461058057806381c81d35146105a05780638456cb59146105b35780638da5cb5b146105c857600080fd5b80635b6fa8db146104a35780635c975abb146104c35780635cd7e3b3146104d85780635e22cd86146104f85780635fc1964f14610518578063634486da1461053857600080fd5b80633092afd51161026b5780633092afd5146103a857806336568abe146103c85780633f41b614146103e85780633f4ba83a1461042057806351cff8d914610435578063572b6c051461045557600080fd5b806301ffc9a7146102b35780631edb948e146102e857806320c5429b1461030a578063248a9ca31461032a578063268b15ed146103685780632f2ff15d14610388575b600080fd5b3480156102bf57600080fd5b506102d36102ce366004613ea0565b610923565b60405190151581526020015b60405180910390f35b3480156102f457600080fd5b50610308610303366004613eef565b61095a565b005b34801561031657600080fd5b50610308610325366004613f1b565b610b03565b34801561033657600080fd5b5061035a610345366004613f1b565b60009081526097602052604090206001015490565b6040519081526020016102df565b34801561037457600080fd5b50610308610383366004613f75565b610c26565b34801561039457600080fd5b506103086103a3366004613fe0565b610cb9565b3480156103b457600080fd5b506103086103c3366004614010565b610ce3565b3480156103d457600080fd5b506103086103e3366004613fe0565b610cf7565b3480156103f457600080fd5b5060c954610408906001600160a01b031681565b6040516001600160a01b0390911681526020016102df565b34801561042c57600080fd5b50610308610d85565b34801561044157600080fd5b50610308610450366004614010565b610d97565b34801561046157600080fd5b506102d3610470366004614010565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156104af57600080fd5b5060cc54610408906001600160a01b031681565b3480156104cf57600080fd5b506102d3610e37565b3480156104e457600080fd5b506103086104f336600461407f565b610e4d565b34801561050457600080fd5b5061030861051336600461413e565b6110b1565b34801561052457600080fd5b50610308610533366004614278565b6112f6565b610308610546366004614010565b61133e565b34801561055757600080fd5b50610308611401565b34801561056c57600080fd5b5061030861057b366004614278565b611413565b34801561058c57600080fd5b5060ce54610408906001600160a01b031681565b6103086105ae366004614010565b61145b565b3480156105bf57600080fd5b506103086114d8565b3480156105d457600080fd5b506033546001600160a01b0316610408565b3480156105f257600080fd5b50610308610601366004614316565b6114e8565b34801561061257600080fd5b506102d3610621366004613fe0565b61156e565b34801561063257600080fd5b50610308610641366004614010565b611599565b34801561065257600080fd5b506103086115aa565b34801561066757600080fd5b50610308610676366004614371565b6115c4565b34801561068757600080fd5b5061035a600081565b34801561069c57600080fd5b506103086106ab3660046143b2565b6116ab565b3480156106bc57600080fd5b506106f0604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102df9190614458565b34801561070957600080fd5b5060cb54610408906001600160a01b031681565b34801561072957600080fd5b506102d3610738366004614010565b6116f4565b34801561074957600080fd5b506102d3610758366004613f1b565b61170e565b34801561076957600080fd5b50610308610778366004614010565b61176c565b34801561078957600080fd5b50610308610798366004614010565b611796565b3480156107a957600080fd5b506103086107b836600461446b565b6117db565b3480156107c957600080fd5b5060ca54610408906001600160a01b031681565b3480156107e957600080fd5b506103086107f83660046144ed565b611dae565b34801561080957600080fd5b506103086108183660046145a2565b611e52565b34801561082957600080fd5b5061035a600080516020614fd083398151915281565b34801561084b57600080fd5b5061030861085a366004613fe0565b611f09565b61030861086d3660046145d7565b611f2e565b34801561087e57600080fd5b5061030861088d366004613f1b565b6120be565b34801561089e57600080fd5b506103086108ad366004614010565b612130565b3480156108be57600080fd5b506103086108cd3660046146cc565b61214c565b3480156108de57600080fd5b506103086108ed3660046147e4565b6122fe565b3480156108fe57600080fd5b506106f060405180604001604052806005815260200164302e352e3160d81b81525081565b60006001600160e01b03198216637965db0b60e01b148061095457506301ffc9a760e01b6001600160e01b03198316145b92915050565b61096561073861247a565b61098a5760405162461bcd60e51b815260040161098190614812565b60405180910390fd5b60c95460405163baef73e960e01b8152600481018390526000916001600160a01b03169063baef73e990602401602060405180830381865afa1580156109d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f89190614847565b9050806001600160401b0316600003610a235760405162461bcd60e51b815260040161098190614864565b806001600160401b0316836001600160401b031611610a905760405162461bcd60e51b815260206004820152602360248201527f4d696e74696e674d616e616765723a204558504952595f4e4f545f455854454e60448201526211115160ea1b6064820152608401610981565b60c954604051631fb9763760e11b81526001600160401b0385166004820152602481018490526001600160a01b0390911690633f72ec6e906044015b600060405180830381600087803b158015610ae657600080fd5b505af1158015610afa573d6000803e3d6000fd5b50505050505050565b610b0e61073861247a565b610b2a5760405162461bcd60e51b815260040161098190614812565b60c95460405163baef73e960e01b8152600481018390526001600160a01b039091169063baef73e990602401602060405180830381865afa158015610b73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b979190614847565b6001600160401b0316600003610bbf5760405162461bcd60e51b815260040161098190614864565b60c954604051637eee288d60e01b8152306004820152602481018390526001600160a01b0390911690637eee288d90604401600060405180830381600087803b158015610c0b57600080fd5b505af1158015610c1f573d6000803e3d6000fd5b5050505050565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610c699350859250849150612489565b610c71610e37565b15610c8e5760405162461bcd60e51b8152600401610981906148a7565b6060610afa610c9b61247a565b610cae88610ca98989612660565b61268c565b83846000600161279d565b600082815260976020526040902060010154610cd481612cf1565b610cde8383612d02565b505050565b610ceb612d89565b610cf481612e02565b50565b610cff61247a565b6001600160a01b0316816001600160a01b031614610d775760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610981565b610d818282612e1a565b5050565b610d8d612d89565b610d95612e9f565b565b610d9f612d89565b6001600160a01b038116610db257600080fd5b60405147906001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610dea573d6000803e3d6000fd5b50604080516001600160a01b03841681526020810183905260008183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a15050565b600080516020614fb08339815191525460ff1690565b610e5786886148d1565b8051600203610e8c57610e6b61073861247a565b610e875760405162461bcd60e51b81526004016109819061499b565b610fd1565b6000610e9782612f47565b60c9549092506001600160a01b0316905063430c2081610eb561247a565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015610f00573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f2491906149df565b80610fb3575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa158015610f7d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fa191906149df565b8015610fb35750610fb361073861247a565b610fcf5760405162461bcd60e51b8152600401610981906149fc565b505b610fdb87896148d1565b6000600282511015610fff5760405162461bcd60e51b815260040161098190614a4b565b611054611033600084600186516110169190614aa6565b8151811061102657611026614ab9565b6020026020010151612f82565b8360008151811061104657611046614ab9565b602002602001015183612489565b61105c610e37565b156110795760405162461bcd60e51b8152600401610981906148a7565b6110a38b6110878b8d6148d1565b6110918a8c6148d1565b61109b898b6148d1565b60008961279d565b505050505050505050505050565b6110bb87896148d1565b80516002036110f0576110cf61073861247a565b6110eb5760405162461bcd60e51b81526004016109819061499b565b611235565b60006110fb82612f47565b60c9549092506001600160a01b0316905063430c208161111961247a565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015611164573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118891906149df565b80611217575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa1580156111e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120591906149df565b8015611217575061121761073861247a565b6112335760405162461bcd60e51b8152600401610981906149fc565b505b61123f888a6148d1565b836002825110156112625760405162461bcd60e51b815260040161098190614a4b565b611279611033600084600186516110169190614aa6565b611281610e37565b1561129e5760405162461bcd60e51b8152600401610981906148a7565b60028a146112be5760405162461bcd60e51b815260040161098190614acf565b6112e78c6112cc8c8e6148d1565b6112d68b8d6148d1565b6112e08a8c6148d1565b898961279d565b50505050505050505050505050565b6112fe612d89565b60005b8151811015610d815761132c82828151811061131f5761131f614ab9565b6020026020010151612e02565b8061133681614b15565b915050611301565b61134961073861247a565b6113655760405162461bcd60e51b815260040161098190614812565b6001600160a01b0381166113bb5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610981565b6113c481613036565b6113cc6115aa565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610d81573d6000803e3d6000fd5b611409612d89565b610d95600061304e565b61141b612d89565b60005b8151811015610d815761144982828151811061143c5761143c614ab9565b6020026020010151613036565b8061145381614b15565b91505061141e565b61146661073861247a565b6114825760405162461bcd60e51b815260040161098190614812565b6001600160a01b0381166113c45760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d5054590000006044820152606401610981565b6114e0612d89565b610d956130a0565b8282828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525061152b9350859250849150612489565b611533610e37565b156115505760405162461bcd60e51b8152600401610981906148a7565b606061156487610cae88610ca98989612660565b5050505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6115a1612d89565b610cf481613036565b610d95600080516020614fd08339815191526103e361247a565b6115cc612d89565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906115fe9085908590600401614b2e565b600060405180830381600087803b15801561161857600080fd5b505af115801561162c573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610d8190505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906116759085908590600401614b2e565b600060405180830381600087803b15801561168f57600080fd5b505af11580156116a3573d6000803e3d6000fd5b505050505050565b6116b3612d89565b610cde83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250859250613108915050565b6000610954600080516020614fd08339815191528361156e565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600090611762906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b611774612d89565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b61179e612d89565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b600054610100900460ff16158080156117fb5750600054600160ff909116105b806118155750303b158015611815575060005460ff166001145b6118785760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610981565b6000805460ff19166001179055801561189b576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce80549091169185169190911790556118f9613228565b61190161325f565b61190a82613298565b6119126132bf565b604080516103e08101825260066103a082018181526563727970746f60d01b6103c0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a80825269313637b1b5b1b430b4b760b11b828501526080860191909152855180870187526007808252663134ba31b7b4b760c91b8286015260a0870191909152865180880188528381526207070760eb1b8186015260c0870152865180880188528381526264616f60e81b8186015260e087015286518088018852838152621e9a5b60ea1b8186015261010087015286518088018852908152663837b63cb3b7b760c91b8185015261012086015285518087018752600b81526a756e73746f707061626c6560a81b81850152610140860152855180870187528481526535b632bb32b960d11b8185015261016086015285518087018752600280825261686960f01b8286015261018087019190915286518088018852858152656b726573757360d01b818601526101a087015286518088018852600580825264616e696d6560d81b828701526101c088019190915287518089018952818152646d616e676160d81b818701526101e088015287518089018952600981526862696e616e6365757360b81b8187015261020088015287518089018952818152647265616c6d60d81b818701526102208801528751808901895291825261676f60f01b82860152610240870191909152865180880188526008815267185b1d1a5b5a5cdd60c21b818601526102608701528651808801885290815264707564677960d81b81850152610280860152855180870187528481526530bab9ba34b760d11b818501526102a08601528551808701875284815265189a5d19d95d60d21b818501526102c08601528551808701875291825262706f6760e81b828401526102e085019190915284518086018652600480825263636c617960e01b8285015261030086019190915285518087018752818152637769746760e01b8185015261032086015285518087018752918252696d6574726f706f6c697360b01b8284015261034085019190915284518086018652908152630eee4d6f60e31b818301526103608401528351808501909452908352651cd958dc995d60d21b9083015261038081019190915260005b601d811015611cdc57611cca8282601d8110611cbe57611cbe614ab9565b60200201516000613108565b80611cd481614b15565b915050611ca0565b5060408051608081018252600381830190815262636f6d60e81b6060830152815281518083019092526002825261636160f01b60208381019190915281019190915260005b6002811015611d5d57611d4b828260028110611d3f57611d3f614ab9565b60200201516001613108565b80611d5581614b15565b915050611d21565b5050508015610afa576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250611df19350859250849150612489565b611df9610e37565b15611e165760405162461bcd60e51b8152600401610981906148a7565b611e458a611e288b610ca98c8c612660565b611e32888a6148d1565b611e3c87896148d1565b6000600161279d565b5050505050505050505050565b611e5a612d89565b60005b81811015610cde5760c9546001600160a01b03166350960239848484818110611e8857611e88614ab9565b9050602002016020810190611e9d9190614010565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b158015611ede57600080fd5b505af1158015611ef2573d6000803e3d6000fd5b505050508080611f0190614b15565b915050611e5d565b600082815260976020526040902060010154611f2481612cf1565b610cde8383612e1a565b611f38898b6148d1565b6000600282511015611f5c5760405162461bcd60e51b815260040161098190614a4b565b611f73611033600084600186516110169190614aa6565b611f7b610e37565b15611f985760405162461bcd60e51b8152600401610981906148a7565b60028b14611fb85760405162461bcd60e51b815260040161098190614acf565b611ffe8d8d8d898960008a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506132ff92505050565b8434101561204e5760405162461bcd60e51b815260206004820181905260248201527f4d696e74696e674d616e616765723a204e4f545f454e4f5547485f46554e44536044820152606401610981565b6120608d8d8d8d8d8d8d8c60006134bf565b843411156112e75761207061247a565b6001600160a01b03166108fc6120868734614aa6565b6040518115909202916000818181858888f193505050501580156120ae573d6000803e3d6000fd5b5050505050505050505050505050565b6120c6612d89565b6120cf8161357b565b6120eb5760405162461bcd60e51b815260040161098190614b5d565b600081815260cd6020526040812061210291613e52565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b612138612d89565b612141816135a1565b610cf4600082613617565b6121568a8c6148d1565b600060028251101561217a5760405162461bcd60e51b815260040161098190614a4b565b612191611033600084600186516110169190614aa6565b612199610e37565b156121b65760405162461bcd60e51b8152600401610981906148a7565b60028c146121d65760405162461bcd60e51b815260040161098190614acf565b61221b8e8e8e8a898b8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506132ff92505050565b856001600160a01b03166323b872dd61223261247a565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018890526064016020604051808303816000875af1158015612285573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122a991906149df565b6122ed5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b6044820152606401610981565b6120ae8e8e8e8e8e8e8e8c8e6134bf565b612306612d89565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa15801561234d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123719190614b9f565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af11580156123c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123e891906149df565b61242c5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b6044820152606401610981565b604080516001600160a01b0384811682526020820184905285168183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a1505050565b6000612484613621565b905090565b6124928361357b565b6124ae5760405162461bcd60e51b815260040161098190614b5d565b600083815260cf602052604090205460ff1615156001600160401b03821615151461252a5760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544c445f455850495241424c455f4d496044820152650a69a82a886960d31b6064820152608401610981565b600061255d8360408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a816000015111156126055761258861257c826000600a613667565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8036126055760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b6064820152608401610981565b61260e836136a6565b61265a5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c49440000006044820152606401610981565b50505050565b60608282604051602001612675929190614bb8565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b60608152602001906001900390816126a657905050905082816000815181106126d1576126d1614ab9565b602002602001018190525060cd600085815260200190815260200160002080546126fa90614be0565b80601f016020809104026020016040519081016040528092919081815260200182805461272690614be0565b80156127735780601f1061274857610100808354040283529160200191612773565b820191906000526020600020905b81548152906001019060200180831161275657829003601f168201915b50505050508160018151811061278b5761278b614ab9565b60209081029190910101529392505050565b60008060006127ab88612f47565b915091508380156127bd575060028851115b801561283f575060c9546040516331a9108f60e11b8152600481018390526001600160a01b038b8116921690636352211e90602401602060405180830381865afa15801561280f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906128339190614c1a565b6001600160a01b031614155b1561289f5760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b6064820152608401610981565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401602060405180830381865afa1580156128e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061290c91906149df565b80156129fd575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e90602401602060405180830381865afa15801561295c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129809190614c1a565b6001600160a01b031614806129fd575060c95460405163d9548e5360e01b8152600481018490526001600160a01b039091169063d9548e5390602401602060405180830381865afa1580156129d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129fd91906149df565b15612aee576001600160401b03851615612a7f5760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b158015612a6657600080fd5b505af1158015612a7a573d6000803e3d6000fd5b505050505b60c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690612ab7908c908c908c908c908b90600401614c8c565b600060405180830381600087803b158015612ad157600080fd5b505af1158015612ae5573d6000803e3d6000fd5b50505050612ce5565b612af78261380a565b612b0088613869565b8015612b0d575087516002145b8015612b2057506001600160401b038516155b15612bfe5760ca5488516001600160a01b039091169063c36c2125908b908b90600090612b4f57612b4f614ab9565b602090810291909101015160cc546040516001600160e01b031960e086901b168152612b899392916001600160a01b031690600401614ceb565b600060405180830381600087803b158015612ba357600080fd5b505af1158015612bb7573d6000803e3d6000fd5b50505050600087511115612bf95760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490612ab7908a908a908790600401614d20565b612ce5565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790612c36908c908c908c908c908b90600401614c8c565b600060405180830381600087803b158015612c5057600080fd5b505af1158015612c64573d6000803e3d6000fd5b505050506001600160401b03851615612ce55760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b158015612ccc57600080fd5b505af1158015612ce0573d6000803e3d6000fd5b505050505b50979650505050505050565b610cf481612cfd61247a565b6138c3565b612d0c828261156e565b610d815760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055612d4561247a565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612d9161247a565b6001600160a01b0316612dac6033546001600160a01b031690565b6001600160a01b031614610d955760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610981565b610cf4600080516020614fd083398151915282611f09565b612e24828261156e565b15610d815760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612e5b61247a565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b612ea7610e37565b612eea5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b6044820152606401610981565b600080516020614fb0833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa612f2a61247a565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b8015612f7c57829150612f688285611016600185614aa6565b925080612f7481614d56565b915050612f4f565b50915091565b60008151600003612fd55760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d50545900000000006044820152606401610981565b8282604051602001612fe79190614d6d565b60405160208183030381529060405280519060200120604051602001613017929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610cf4600080516020614fd083398151915282613617565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6130a8610e37565b156130c55760405162461bcd60e51b8152600401610981906148a7565b600080516020614fb0833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258612f2a61247a565b6000613115600084612f82565b600081815260cd602052604090209091506131308482614dcf565b50600081815260cf602052604090819020805460ff19168415151790555181907f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf89809061317d908690614458565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e7990602401602060405180830381865afa1580156131ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906131f291906149df565b610cde5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c6090610acc9084908790600401614e8e565b600054610100900460ff1661324f5760405162461bcd60e51b815260040161098190614eaf565b610d9561325a61247a565b61304e565b600054610100900460ff166132865760405162461bcd60e51b815260040161098190614eaf565b610d95600061329361247a565b613617565b600054610100900460ff1661179e5760405162461bcd60e51b815260040161098190614eaf565b600054610100900460ff166132e65760405162461bcd60e51b815260040161098190614eaf565b600080516020614fb0833981519152805460ff19169055565b600061331361330e87896148d1565b612f47565b506040516bffffffffffffffffffffffff1930606090811b821660208401524660348401528b811b82166054840152606883018490526001600160c01b031960c08a901b1660888401526090830188905286901b1660b08201529091506000906133ef9084906133e99060c401604051602081830303815290604052805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90613927565b90506133fa816116f4565b6134525760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a205349474e45525f49535f4e4f545f4d49604482015263272a22a960e11b6064820152608401610981565b42866001600160401b0316116134b45760405162461bcd60e51b815260206004820152602160248201527f4d696e74696e674d616e616765723a20455850495245445f5349474e415455526044820152604560f81b6064820152608401610981565b505050505050505050565b60006135068a6134cf8a8c6148d1565b6134d9898b6148d1565b6134e3888a6148d1565b60008f6001600160a01b03166134f761247a565b6001600160a01b03161461279d565b9050896001600160a01b031661351a61247a565b6001600160a01b0316827fa545b6fd3355e8d57f8c8147bafe740545bd3ea1f94bef2576a6d532a7c3b60586866040516135679291909182526001600160a01b0316602082015260400190565b60405180910390a450505050505050505050565b600081815260cd60205260408120805482919061359790614be0565b9050119050919050565b6135a9612d89565b6001600160a01b03811661360e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610981565b610cf48161304e565b610d818282612d02565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163303613662575060331936013560601c90565b503390565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161369c9190614efa565b9052949350505050565b600081516000036136b957506000919050565b60208201805160f81c603081108015906136d7575060398160ff1611155b1580156136f9575060618160ff16101580156136f75750607a8160ff1611155b155b15613708575060009392505050565b835160018111156137765761372a83613722600184614aa6565b015160f81c90565b915060308260ff1610158015613744575060398260ff1611155b158015613766575060618260ff16101580156137645750607a8260ff1611155b155b1561377657506000949350505050565b60015b613784600183614aa6565b8110156137fe578381015160f81c9250602d83148015906137ba575060308360ff16101580156137b8575060398360ff1611155b155b80156137db575060618360ff16101580156137d95750607a8360ff1611155b155b156137ec5750600095945050505050565b806137f681614b15565b915050613779565b50600195945050505050565b6138138161170e565b156138605760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b45440000006044820152606401610981565b610cf48161394b565b600080613880600084600186516110169190614aa6565b60ca549091506001600160a01b0316158015906138bc5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6138cd828261156e565b610d81576138e5816001600160a01b031660146139cf565b6138f08360206139cf565b604051602001613901929190614f0d565b60408051601f198184030181529082905262461bcd60e51b825261098191600401614458565b60008060006139368585613b6a565b9150915061394381613baf565b509392505050565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061398a90606001611749565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b606060006139de836002614f82565b6139e9906002614efa565b6001600160401b03811115613a0057613a0061420f565b6040519080825280601f01601f191660200182016040528015613a2a576020820181803683370190505b509050600360fc1b81600081518110613a4557613a45614ab9565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110613a7457613a74614ab9565b60200101906001600160f81b031916908160001a9053506000613a98846002614f82565b613aa3906001614efa565b90505b6001811115613b1b576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110613ad757613ad7614ab9565b1a60f81b828281518110613aed57613aed614ab9565b60200101906001600160f81b031916908160001a90535060049490941c93613b1481614d56565b9050613aa6565b5083156138bc5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610981565b6000808251604103613ba05760208301516040840151606085015160001a613b9487828585613d65565b94509450505050613ba8565b506000905060025b9250929050565b6000816004811115613bc357613bc3614f99565b03613bcb5750565b6001816004811115613bdf57613bdf614f99565b03613c2c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610981565b6002816004811115613c4057613c40614f99565b03613c8d5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610981565b6003816004811115613ca157613ca1614f99565b03613cf95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610981565b6004816004811115613d0d57613d0d614f99565b03610cf45760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610981565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613d9c5750600090506003613e49565b8460ff16601b14158015613db457508460ff16601c14155b15613dc55750600090506004613e49565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613e19573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613e4257600060019250925050613e49565b9150600090505b94509492505050565b508054613e5e90614be0565b6000825580601f10613e6e575050565b601f016020900490600052602060002090810190610cf491905b80821115613e9c5760008155600101613e88565b5090565b600060208284031215613eb257600080fd5b81356001600160e01b0319811681146138bc57600080fd5b6001600160401b0381168114610cf457600080fd5b8035613eea81613eca565b919050565b60008060408385031215613f0257600080fd5b8235613f0d81613eca565b946020939093013593505050565b600060208284031215613f2d57600080fd5b5035919050565b60008083601f840112613f4657600080fd5b5081356001600160401b03811115613f5d57600080fd5b602083019150836020828501011115613ba857600080fd5b600080600060408486031215613f8a57600080fd5b8335925060208401356001600160401b03811115613fa757600080fd5b613fb386828701613f34565b9497909650939450505050565b6001600160a01b0381168114610cf457600080fd5b8035613eea81613fc0565b60008060408385031215613ff357600080fd5b82359150602083013561400581613fc0565b809150509250929050565b60006020828403121561402257600080fd5b81356138bc81613fc0565b60008083601f84011261403f57600080fd5b5081356001600160401b0381111561405657600080fd5b6020830191508360208260051b8501011115613ba857600080fd5b8015158114610cf457600080fd5b60008060008060008060008060a0898b03121561409b57600080fd5b88356140a681613fc0565b975060208901356001600160401b03808211156140c257600080fd5b6140ce8c838d0161402d565b909950975060408b01359150808211156140e757600080fd5b6140f38c838d0161402d565b909750955060608b013591508082111561410c57600080fd5b506141198b828c0161402d565b909450925050608089013561412d81614071565b809150509295985092959890939650565b600080600080600080600080600060c08a8c03121561415c57600080fd5b893561416781613fc0565b985060208a01356001600160401b038082111561418357600080fd5b61418f8d838e0161402d565b909a50985060408c01359150808211156141a857600080fd5b6141b48d838e0161402d565b909850965060608c01359150808211156141cd57600080fd5b506141da8c828d0161402d565b90955093505060808a01356141ee81613eca565b915060a08a01356141fe81614071565b809150509295985092959850929598565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561424d5761424d61420f565b604052919050565b60006001600160401b0382111561426e5761426e61420f565b5060051b60200190565b6000602080838503121561428b57600080fd5b82356001600160401b038111156142a157600080fd5b8301601f810185136142b257600080fd5b80356142c56142c082614255565b614225565b81815260059190911b820183019083810190878311156142e457600080fd5b928401925b8284101561430b5783356142fc81613fc0565b825292840192908401906142e9565b979650505050505050565b6000806000806060858703121561432c57600080fd5b843561433781613fc0565b93506020850135925060408501356001600160401b0381111561435957600080fd5b61436587828801613f34565b95989497509550505050565b6000806020838503121561438457600080fd5b82356001600160401b0381111561439a57600080fd5b6143a685828601613f34565b90969095509350505050565b6000806000604084860312156143c757600080fd5b83356001600160401b038111156143dd57600080fd5b6143e986828701613f34565b90945092505060208401356143fd81614071565b809150509250925092565b60005b8381101561442357818101518382015260200161440b565b50506000910152565b60008151808452614444816020860160208601614408565b601f01601f19169290920160200192915050565b6020815260006138bc602083018461442c565b60008060008060008060c0878903121561448457600080fd5b863561448f81613fc0565b9550602087013561449f81613fc0565b945060408701356144af81613fc0565b935060608701356144bf81613fc0565b925060808701356144cf81613fc0565b915060a08701356144df81613fc0565b809150509295509295509295565b60008060008060008060008060a0898b03121561450957600080fd5b883561451481613fc0565b97506020890135965060408901356001600160401b038082111561453757600080fd5b6145438c838d01613f34565b909850965060608b013591508082111561455c57600080fd5b6145688c838d0161402d565b909650945060808b013591508082111561458157600080fd5b5061458e8b828c0161402d565b999c989b5096995094979396929594505050565b600080602083850312156145b557600080fd5b82356001600160401b038111156145cb57600080fd5b6143a68582860161402d565b600080600080600080600080600080600060e08c8e0312156145f857600080fd5b6146018c613fd5565b9a506001600160401b038060208e0135111561461c57600080fd5b61462c8e60208f01358f0161402d565b909b50995060408d013581101561464257600080fd5b6146528e60408f01358f0161402d565b909950975060608d013581101561466857600080fd5b6146788e60608f01358f0161402d565b909750955061468960808e01613edf565b945060a08d013593508060c08e013511156146a357600080fd5b506146b48d60c08e01358e01613f34565b81935080925050509295989b509295989b9093969950565b6000806000806000806000806000806000806101008d8f0312156146ef57600080fd5b6146f88d613fd5565b9b506001600160401b0360208e0135111561471257600080fd5b6147228e60208f01358f0161402d565b909b5099506001600160401b0360408e0135111561473f57600080fd5b61474f8e60408f01358f0161402d565b90995097506001600160401b0360608e0135111561476c57600080fd5b61477c8e60608f01358f0161402d565b909750955061478d60808e01613edf565b945061479b60a08e01613fd5565b935060c08d013592506001600160401b0360e08e013511156147bc57600080fd5b6147cc8e60e08f01358f01613f34565b81935080925050509295989b509295989b509295989b565b600080604083850312156147f757600080fd5b823561480281613fc0565b9150602083013561400581613fc0565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60006020828403121561485957600080fd5b81516138bc81613eca565b60208082526023908201527f4d696e74696e674d616e616765723a20544f4b454e5f4e4f545f455850495241604082015262424c4560e81b606082015260800190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60006148df6142c084614255565b80848252602080830192508560051b8501368111156148fd57600080fd5b855b8181101561498f5780356001600160401b038082111561491f5760008081fd5b90880190601f36818401126149345760008081fd5b8235828111156149465761494661420f565b614957818301601f19168801614225565b9250808352368782860101111561497057600091508182fd5b80878501888501376000908301870152508652509382019382016148ff565b50919695505050505050565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b6000602082840312156149f157600080fd5b81516138bc81614071565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561095457610954614a90565b634e487b7160e01b600052603260045260246000fd5b60208082526026908201527f4d696e74696e674d616e616765723a20535542444f4d41494e535f4e4f545f41604082015265131313d5d15160d21b606082015260800190565b600060018201614b2757614b27614a90565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b600060208284031215614bb157600080fd5b5051919050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b600181811c90821680614bf457607f821691505b602082108103614c1457634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215614c2c57600080fd5b81516138bc81613fc0565b600081518084526020808501808196508360051b8101915082860160005b85811015614c7f578284038952614c6d84835161442c565b98850198935090840190600101614c55565b5091979650505050505050565b6001600160a01b038616815260a060208201819052600090614cb090830187614c37565b8281036040840152614cc28187614c37565b90508281036060840152614cd68186614c37565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152614d0d606084018661442c565b9150808416604084015250949350505050565b606081526000614d336060830186614c37565b8281036020840152614d458186614c37565b915050826040830152949350505050565b600081614d6557614d65614a90565b506000190190565b60008251614d7f818460208701614408565b9190910192915050565b601f821115610cde57600081815260208120601f850160051c81016020861015614db05750805b601f850160051c820191505b818110156116a357828155600101614dbc565b81516001600160401b03811115614de857614de861420f565b614dfc81614df68454614be0565b84614d89565b602080601f831160018114614e315760008415614e195750858301515b600019600386901b1c1916600185901b1785556116a3565b600085815260208120601f198616915b82811015614e6057888601518255948401946001909101908401614e41565b5085821015614e7e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000614ea7604083018461442c565b949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8082018082111561095457610954614a90565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351614f45816017850160208801614408565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351614f76816028840160208801614408565b01602801949350505050565b808202811582820484141761095457610954614a90565b634e487b7160e01b600052602160045260246000fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManager__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
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
exports.MintingManager__factory = MintingManager__factory;
MintingManager__factory.bytecode = _bytecode;
MintingManager__factory.abi = _abi;
