"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintingManagerMock__factory = void 0;
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
const _bytecode = "0x608060405234801561001057600080fd5b506151b8806100206000396000f3fe6080604052600436106102c95760003560e01c806391d1485411610175578063b9998a24116100dc578063d547741f11610095578063f2fde38b1161006f578063f2fde38b146108cd578063f5243bc4146108ed578063f940e3851461090d578063ffa1ad741461092d57600080fd5b8063d547741f1461087a578063d7db74c71461089a578063ec527389146108ad57600080fd5b8063b9998a24146107b8578063cc2a9a5b146107d8578063cc2c3fc4146107f8578063ceeb4f5014610818578063d1f5692c14610838578063d53913931461085857600080fd5b8063a3f4df7e1161012e578063a3f4df7e146106cb578063a849d65c14610718578063aa271e1a14610738578063ae31844a14610758578063b0aa98c714610778578063b3ab15fb1461079857600080fd5b806391d1485414610621578063983b2d5614610641578063986502751461066157806399e0dd7c14610676578063a217fddf14610696578063a3a3f7f6146106ab57600080fd5b80635b6fa8db11610234578063715018a6116101ed57806381c81d35116101c757806381c81d35146105bb5780638456cb59146105ce5780638da5cb5b146105e3578063906cecc11461060157600080fd5b8063715018a61461056657806371e2a6571461057b57806377a2a5891461059b57600080fd5b80635b6fa8db146104be5780635c975abb146104de5780635cd7e3b3146104f35780635e22cd86146105135780635fc1964f14610533578063634486da1461055357600080fd5b80633092afd5116102865780633092afd5146103c357806336568abe146103e35780633f41b614146104035780633f4ba83a1461043b57806351cff8d914610450578063572b6c051461047057600080fd5b806301ffc9a7146102ce5780631edb948e1461030357806320c5429b14610325578063248a9ca314610345578063268b15ed146103835780632f2ff15d146103a3575b600080fd5b3480156102da57600080fd5b506102ee6102e9366004614023565b61095e565b60405190151581526020015b60405180910390f35b34801561030f57600080fd5b5061032361031e366004614072565b610995565b005b34801561033157600080fd5b5061032361034036600461409e565b610b3e565b34801561035157600080fd5b5061037561036036600461409e565b60009081526097602052604090206001015490565b6040519081526020016102fa565b34801561038f57600080fd5b5061032361039e3660046140f8565b610c61565b3480156103af57600080fd5b506103236103be366004614163565b610cf4565b3480156103cf57600080fd5b506103236103de366004614193565b610d1e565b3480156103ef57600080fd5b506103236103fe366004614163565b610d32565b34801561040f57600080fd5b5060c954610423906001600160a01b031681565b6040516001600160a01b0390911681526020016102fa565b34801561044757600080fd5b50610323610dc0565b34801561045c57600080fd5b5061032361046b366004614193565b610dd2565b34801561047c57600080fd5b506102ee61048b366004614193565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b3480156104ca57600080fd5b5060cc54610423906001600160a01b031681565b3480156104ea57600080fd5b506102ee610e72565b3480156104ff57600080fd5b5061032361050e366004614202565b610e88565b34801561051f57600080fd5b5061032361052e3660046142c1565b6110ec565b34801561053f57600080fd5b5061032361054e3660046143fb565b611331565b610323610561366004614193565b611379565b34801561057257600080fd5b5061032361143c565b34801561058757600080fd5b506103236105963660046143fb565b61144e565b3480156105a757600080fd5b5060ce54610423906001600160a01b031681565b6103236105c9366004614193565b611496565b3480156105da57600080fd5b50610323611513565b3480156105ef57600080fd5b506033546001600160a01b0316610423565b34801561060d57600080fd5b5061032361061c366004614499565b611523565b34801561062d57600080fd5b506102ee61063c366004614163565b6115a9565b34801561064d57600080fd5b5061032361065c366004614193565b6115d4565b34801561066d57600080fd5b506103236115e5565b34801561068257600080fd5b506103236106913660046144f4565b6115ff565b3480156106a257600080fd5b50610375600081565b3480156106b757600080fd5b506103236106c6366004614535565b6116e6565b3480156106d757600080fd5b5061070b604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102fa91906145db565b34801561072457600080fd5b5060cb54610423906001600160a01b031681565b34801561074457600080fd5b506102ee610753366004614193565b61172f565b34801561076457600080fd5b506103236107733660046145ee565b611749565b34801561078457600080fd5b506102ee61079336600461409e565b611854565b3480156107a457600080fd5b506103236107b3366004614193565b6118b2565b3480156107c457600080fd5b506103236107d3366004614193565b6118dc565b3480156107e457600080fd5b506103236107f3366004614623565b611921565b34801561080457600080fd5b5060ca54610423906001600160a01b031681565b34801561082457600080fd5b506103236108333660046146a5565b611f31565b34801561084457600080fd5b506103236108533660046145ee565b611fd5565b34801561086457600080fd5b5061037560008051602061518c83398151915281565b34801561088657600080fd5b50610323610895366004614163565b61208c565b6103236108a836600461475a565b6120b1565b3480156108b957600080fd5b506103236108c836600461409e565b612241565b3480156108d957600080fd5b506103236108e8366004614193565b6122b3565b3480156108f957600080fd5b5061032361090836600461484f565b6122cf565b34801561091957600080fd5b50610323610928366004614967565b612481565b34801561093957600080fd5b5061070b60405180604001604052806005815260200164302e352e3160d81b81525081565b60006001600160e01b03198216637965db0b60e01b148061098f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6109a06107536125fd565b6109c55760405162461bcd60e51b81526004016109bc90614995565b60405180910390fd5b60c95460405163baef73e960e01b8152600481018390526000916001600160a01b03169063baef73e990602401602060405180830381865afa158015610a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3391906149ca565b9050806001600160401b0316600003610a5e5760405162461bcd60e51b81526004016109bc906149e7565b806001600160401b0316836001600160401b031611610acb5760405162461bcd60e51b815260206004820152602360248201527f4d696e74696e674d616e616765723a204558504952595f4e4f545f455854454e60448201526211115160ea1b60648201526084016109bc565b60c954604051631fb9763760e11b81526001600160401b0385166004820152602481018490526001600160a01b0390911690633f72ec6e906044015b600060405180830381600087803b158015610b2157600080fd5b505af1158015610b35573d6000803e3d6000fd5b50505050505050565b610b496107536125fd565b610b655760405162461bcd60e51b81526004016109bc90614995565b60c95460405163baef73e960e01b8152600481018390526001600160a01b039091169063baef73e990602401602060405180830381865afa158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd291906149ca565b6001600160401b0316600003610bfa5760405162461bcd60e51b81526004016109bc906149e7565b60c954604051637eee288d60e01b8152306004820152602481018390526001600160a01b0390911690637eee288d90604401600060405180830381600087803b158015610c4657600080fd5b505af1158015610c5a573d6000803e3d6000fd5b5050505050565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250610ca4935085925084915061260c565b610cac610e72565b15610cc95760405162461bcd60e51b81526004016109bc90614a2a565b6060610b35610cd66125fd565b610ce988610ce489896127e3565b61280f565b838460006001612920565b600082815260976020526040902060010154610d0f81612e74565b610d198383612e85565b505050565b610d26612f0c565b610d2f81612f85565b50565b610d3a6125fd565b6001600160a01b0316816001600160a01b031614610db25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016109bc565b610dbc8282612f9d565b5050565b610dc8612f0c565b610dd0613022565b565b610dda612f0c565b6001600160a01b038116610ded57600080fd5b60405147906001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610e25573d6000803e3d6000fd5b50604080516001600160a01b03841681526020810183905260008183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a15050565b60008051602061516c8339815191525460ff1690565b610e928688614a54565b8051600203610ec757610ea66107536125fd565b610ec25760405162461bcd60e51b81526004016109bc90614b1e565b61100c565b6000610ed2826130ca565b60c9549092506001600160a01b0316905063430c2081610ef06125fd565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa158015610f3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5f9190614b62565b80610fee575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa158015610fb8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdc9190614b62565b8015610fee5750610fee6107536125fd565b61100a5760405162461bcd60e51b81526004016109bc90614b7f565b505b6110168789614a54565b600060028251101561103a5760405162461bcd60e51b81526004016109bc90614bce565b61108f61106e600084600186516110519190614c29565b8151811061106157611061614c3c565b6020026020010151613105565b8360008151811061108157611081614c3c565b60200260200101518361260c565b611097610e72565b156110b45760405162461bcd60e51b81526004016109bc90614a2a565b6110de8b6110c28b8d614a54565b6110cc8a8c614a54565b6110d6898b614a54565b600089612920565b505050505050505050505050565b6110f68789614a54565b805160020361112b5761110a6107536125fd565b6111265760405162461bcd60e51b81526004016109bc90614b1e565b611270565b6000611136826130ca565b60c9549092506001600160a01b0316905063430c20816111546125fd565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101849052604401602060405180830381865afa15801561119f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c39190614b62565b80611252575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c208190604401602060405180830381865afa15801561121c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112409190614b62565b801561125257506112526107536125fd565b61126e5760405162461bcd60e51b81526004016109bc90614b7f565b505b61127a888a614a54565b8360028251101561129d5760405162461bcd60e51b81526004016109bc90614bce565b6112b461106e600084600186516110519190614c29565b6112bc610e72565b156112d95760405162461bcd60e51b81526004016109bc90614a2a565b60028a146112f95760405162461bcd60e51b81526004016109bc90614c52565b6113228c6113078c8e614a54565b6113118b8d614a54565b61131b8a8c614a54565b8989612920565b50505050505050505050505050565b611339612f0c565b60005b8151811015610dbc5761136782828151811061135a5761135a614c3c565b6020026020010151612f85565b8061137181614c98565b91505061133c565b6113846107536125fd565b6113a05760405162461bcd60e51b81526004016109bc90614995565b6001600160a01b0381166113f65760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016109bc565b6113ff816131b9565b6114076115e5565b6040516001600160a01b038216903480156108fc02916000818181858888f19350505050158015610dbc573d6000803e3d6000fd5b611444612f0c565b610dd060006131d1565b611456612f0c565b60005b8151811015610dbc5761148482828151811061147757611477614c3c565b60200260200101516131b9565b8061148e81614c98565b915050611459565b6114a16107536125fd565b6114bd5760405162461bcd60e51b81526004016109bc90614995565b6001600160a01b0381166113ff5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016109bc565b61151b612f0c565b610dd0613223565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250611566935085925084915061260c565b61156e610e72565b1561158b5760405162461bcd60e51b81526004016109bc90614a2a565b606061159f87610ce988610ce489896127e3565b5050505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6115dc612f0c565b610d2f816131b9565b610dd060008051602061518c8339815191526103fe6125fd565b611607612f0c565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906116399085908590600401614cb1565b600060405180830381600087803b15801561165357600080fd5b505af1158015611667573d6000803e3d6000fd5b505060cb546001600160a01b0316159150610dbc90505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906116b09085908590600401614cb1565b600060405180830381600087803b1580156116ca57600080fd5b505af11580156116de573d6000803e3d6000fd5b505050505050565b6116ee612f0c565b610d1983838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085925061328b915050565b600061098f60008051602061518c833981519152836115a9565b6117546107536125fd565b6117705760405162461bcd60e51b81526004016109bc90614995565b60c9546040516000916001600160a01b0316906117939085908590602401614ce0565b60408051601f198184030181529181526020820180516001600160e01b0316635718c22560e11b179052516117c89190614d19565b6000604051808303816000865af19150503d8060008114611805576040519150601f19603f3d011682016040523d82523d6000602084013e61180a565b606091505b5050905080610d195760405162461bcd60e51b81526020600482015260166024820152751d5c19dc985919505b1b081b5bd8dac819985a5b195960521b60448201526064016109bc565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd6960208201529081018290526000906118a8906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b6118ba612f0c565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b6118e4612f0c565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b600054610100900460ff16158080156119415750600054600160ff909116105b8061195b5750303b15801561195b575060005460ff166001145b6119be5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016109bc565b6000805460ff1916600117905580156119e1576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce8054909116918516919091179055611a3f6133ab565b611a476133e2565b611a508261341b565b611a58613442565b604080516104208101825260066103e082018181526563727970746f60d01b610400840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a80825269313637b1b5b1b430b4b760b11b828501526080860191909152855180870187526007808252663134ba31b7b4b760c91b8286015260a0870191909152865180880188528381526207070760eb1b8186015260c0870152865180880188528381526264616f60e81b8186015260e087015286518088018852838152621e9a5b60ea1b8186015261010087015286518088018852908152663837b63cb3b7b760c91b8185015261012086015285518087018752600b81526a756e73746f707061626c6560a81b81850152610140860152855180870187528481526535b632bb32b960d11b8185015261016086015285518087018752600280825261686960f01b8286015261018087019190915286518088018852858152656b726573757360d01b818601526101a087015286518088018852600580825264616e696d6560d81b828701526101c088019190915287518089018952818152646d616e676160d81b818701526101e088015287518089018952600981526862696e616e6365757360b81b8187015261020088015287518089018952818152647265616c6d60d81b818701526102208801528751808901895291825261676f60f01b82860152610240870191909152865180880188526008815267185b1d1a5b5a5cdd60c21b818601526102608701528651808801885281815264707564677960d81b81860152610280870152865180880188528581526530bab9ba34b760d11b818601526102a08701528651808801885285815265189a5d19d95d60d21b818601526102c08701528651808801885292835262706f6760e81b838501526102e086019290925285518087018752600480825263636c617960e01b8286015261030087019190915286518088018852818152637769746760e01b8186015261032087015286518088018852918252696d6574726f706f6c697360b01b8285015261034086019190915285518087018752908152630eee4d6f60e31b8184015261036085015284518086018652928352651cd958dc995d60d21b8383015261038084019290925283518085018552828152643930b4b4b760d91b818301526103a084015283518085019094529083526439ba32b83760d91b908301526103c081019190915260005b601f811015611e5f57611e4d8282601f8110611e4157611e41614c3c565b6020020151600061328b565b80611e5781614c98565b915050611e23565b5060408051608081018252600381830190815262636f6d60e81b6060830152815281518083019092526002825261636160f01b60208381019190915281019190915260005b6002811015611ee057611ece828260028110611ec257611ec2614c3c565b6020020151600161328b565b80611ed881614c98565b915050611ea4565b5050508015610b35576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250611f74935085925084915061260c565b611f7c610e72565b15611f995760405162461bcd60e51b81526004016109bc90614a2a565b611fc88a611fab8b610ce48c8c6127e3565b611fb5888a614a54565b611fbf8789614a54565b60006001612920565b5050505050505050505050565b611fdd612f0c565b60005b81811015610d195760c9546001600160a01b0316635096023984848481811061200b5761200b614c3c565b90506020020160208101906120209190614193565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b15801561206157600080fd5b505af1158015612075573d6000803e3d6000fd5b50505050808061208490614c98565b915050611fe0565b6000828152609760205260409020600101546120a781612e74565b610d198383612f9d565b6120bb898b614a54565b60006002825110156120df5760405162461bcd60e51b81526004016109bc90614bce565b6120f661106e600084600186516110519190614c29565b6120fe610e72565b1561211b5760405162461bcd60e51b81526004016109bc90614a2a565b60028b1461213b5760405162461bcd60e51b81526004016109bc90614c52565b6121818d8d8d898960008a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061348292505050565b843410156121d15760405162461bcd60e51b815260206004820181905260248201527f4d696e74696e674d616e616765723a204e4f545f454e4f5547485f46554e445360448201526064016109bc565b6121e38d8d8d8d8d8d8d8c6000613642565b84341115611322576121f36125fd565b6001600160a01b03166108fc6122098734614c29565b6040518115909202916000818181858888f19350505050158015612231573d6000803e3d6000fd5b5050505050505050505050505050565b612249612f0c565b612252816136fe565b61226e5760405162461bcd60e51b81526004016109bc90614d35565b600081815260cd6020526040812061228591613fd5565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b6122bb612f0c565b6122c481613724565b610d2f60008261379a565b6122d98a8c614a54565b60006002825110156122fd5760405162461bcd60e51b81526004016109bc90614bce565b61231461106e600084600186516110519190614c29565b61231c610e72565b156123395760405162461bcd60e51b81526004016109bc90614a2a565b60028c146123595760405162461bcd60e51b81526004016109bc90614c52565b61239e8e8e8e8a898b8a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061348292505050565b856001600160a01b03166323b872dd6123b56125fd565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152306024820152604481018890526064016020604051808303816000875af1158015612408573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061242c9190614b62565b6124705760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b60448201526064016109bc565b6122318e8e8e8e8e8e8e8c8e613642565b612489612f0c565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156124d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124f49190614d77565b60405163a9059cbb60e01b81526001600160a01b038481166004830152602482018390529192509084169063a9059cbb906044016020604051808303816000875af1158015612547573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061256b9190614b62565b6125af5760405162461bcd60e51b8152602060048201526015602482015274115490cc8c0e881313d5d7d31155915317d1905253605a1b60448201526064016109bc565b604080516001600160a01b0384811682526020820184905285168183015290517e1a143d5b175701cb3246058ffac3d63945192075a926ff73a19930f09d587a9181900360600190a1505050565b60006126076137a4565b905090565b612615836136fe565b6126315760405162461bcd60e51b81526004016109bc90614d35565b600083815260cf602052604090205460ff1615156001600160401b0382161515146126ad5760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544c445f455850495241424c455f4d496044820152650a69a82a886960d31b60648201526084016109bc565b60006126e08360408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a816000015111156127885761270b6126ff826000600a6137ea565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b8036127885760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b60648201526084016109bc565b61279183613829565b6127dd5760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c494400000060448201526064016109bc565b50505050565b606082826040516020016127f8929190614d90565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081612829579050509050828160008151811061285457612854614c3c565b602002602001018190525060cd6000858152602001908152602001600020805461287d90614db8565b80601f01602080910402602001604051908101604052809291908181526020018280546128a990614db8565b80156128f65780601f106128cb576101008083540402835291602001916128f6565b820191906000526020600020905b8154815290600101906020018083116128d957829003601f168201915b50505050508160018151811061290e5761290e614c3c565b60209081029190910101529392505050565b600080600061292e886130ca565b91509150838015612940575060028851115b80156129c2575060c9546040516331a9108f60e11b8152600481018390526001600160a01b038b8116921690636352211e90602401602060405180830381865afa158015612992573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129b69190614df2565b6001600160a01b031614155b15612a225760405162461bcd60e51b815260206004820152602a60248201527f4d696e74696e674d616e616765723a20524556455253455f5245434f52445f4e60448201526913d517d0531313d5d15160b21b60648201526084016109bc565b60c954604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e7990602401602060405180830381865afa158015612a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a8f9190614b62565b8015612b80575060c9546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e90602401602060405180830381865afa158015612adf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b039190614df2565b6001600160a01b03161480612b80575060c95460405163d9548e5360e01b8152600481018490526001600160a01b039091169063d9548e5390602401602060405180830381865afa158015612b5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612b809190614b62565b15612c71576001600160401b03851615612c025760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b158015612be957600080fd5b505af1158015612bfd573d6000803e3d6000fd5b505050505b60c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690612c3a908c908c908c908c908b90600401614e64565b600060405180830381600087803b158015612c5457600080fd5b505af1158015612c68573d6000803e3d6000fd5b50505050612e68565b612c7a8261398d565b612c83886139ec565b8015612c90575087516002145b8015612ca357506001600160401b038516155b15612d815760ca5488516001600160a01b039091169063c36c2125908b908b90600090612cd257612cd2614c3c565b602090810291909101015160cc546040516001600160e01b031960e086901b168152612d0c9392916001600160a01b031690600401614ec3565b600060405180830381600087803b158015612d2657600080fd5b505af1158015612d3a573d6000803e3d6000fd5b50505050600087511115612d7c5760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490612c3a908a908a908790600401614ef8565b612e68565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790612db9908c908c908c908c908b90600401614e64565b600060405180830381600087803b158015612dd357600080fd5b505af1158015612de7573d6000803e3d6000fd5b505050506001600160401b03851615612e685760c954604051631fb9763760e11b81526001600160401b0387166004820152602481018490526001600160a01b0390911690633f72ec6e90604401600060405180830381600087803b158015612e4f57600080fd5b505af1158015612e63573d6000803e3d6000fd5b505050505b50979650505050505050565b610d2f81612e806125fd565b613a46565b612e8f82826115a9565b610dbc5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055612ec86125fd565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b612f146125fd565b6001600160a01b0316612f2f6033546001600160a01b031690565b6001600160a01b031614610dd05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016109bc565b610d2f60008051602061518c8339815191528261208c565b612fa782826115a9565b15610dbc5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19169055612fde6125fd565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61302a610e72565b61306d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016109bc565b60008051602061516c833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6130ad6125fd565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b80156130ff578291506130eb8285611051600185614c29565b9250806130f781614f2e565b9150506130d2565b50915091565b600081516000036131585760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016109bc565b828260405160200161316a9190614d19565b6040516020818303038152906040528051906020012060405160200161319a929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b610d2f60008051602061518c8339815191528261379a565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b61322b610e72565b156132485760405162461bcd60e51b81526004016109bc90614a2a565b60008051602061516c833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586130ad6125fd565b6000613298600084613105565b600081815260cd602052604090209091506132b38482614f8b565b50600081815260cf602052604090819020805460ff19168415151790555181907f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf8980906133009086906145db565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e7990602401602060405180830381865afa158015613351573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906133759190614b62565b610d195760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c6090610b07908490879060040161504a565b600054610100900460ff166133d25760405162461bcd60e51b81526004016109bc9061506b565b610dd06133dd6125fd565b6131d1565b600054610100900460ff166134095760405162461bcd60e51b81526004016109bc9061506b565b610dd060006134166125fd565b61379a565b600054610100900460ff166118e45760405162461bcd60e51b81526004016109bc9061506b565b600054610100900460ff166134695760405162461bcd60e51b81526004016109bc9061506b565b60008051602061516c833981519152805460ff19169055565b60006134966134918789614a54565b6130ca565b506040516bffffffffffffffffffffffff1930606090811b821660208401524660348401528b811b82166054840152606883018490526001600160c01b031960c08a901b1660888401526090830188905286901b1660b082015290915060009061357290849061356c9060c401604051602081830303815290604052805190602001206040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b90613aaa565b905061357d8161172f565b6135d55760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a205349474e45525f49535f4e4f545f4d49604482015263272a22a960e11b60648201526084016109bc565b42866001600160401b0316116136375760405162461bcd60e51b815260206004820152602160248201527f4d696e74696e674d616e616765723a20455850495245445f5349474e415455526044820152604560f81b60648201526084016109bc565b505050505050505050565b60006136898a6136528a8c614a54565b61365c898b614a54565b613666888a614a54565b60008f6001600160a01b031661367a6125fd565b6001600160a01b031614612920565b9050896001600160a01b031661369d6125fd565b6001600160a01b0316827fa545b6fd3355e8d57f8c8147bafe740545bd3ea1f94bef2576a6d532a7c3b60586866040516136ea9291909182526001600160a01b0316602082015260400190565b60405180910390a450505050505050505050565b600081815260cd60205260408120805482919061371a90614db8565b9050119050919050565b61372c612f0c565b6001600160a01b0381166137915760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016109bc565b610d2f816131d1565b610dbc8282612e85565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b031633036137e5575060331936013560601c90565b503390565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161381f91906150b6565b9052949350505050565b6000815160000361383c57506000919050565b60208201805160f81c6030811080159061385a575060398160ff1611155b15801561387c575060618160ff161015801561387a5750607a8160ff1611155b155b1561388b575060009392505050565b835160018111156138f9576138ad836138a5600184614c29565b015160f81c90565b915060308260ff16101580156138c7575060398260ff1611155b1580156138e9575060618260ff16101580156138e75750607a8260ff1611155b155b156138f957506000949350505050565b60015b613907600183614c29565b811015613981578381015160f81c9250602d831480159061393d575060308360ff161015801561393b575060398360ff1611155b155b801561395e575060618360ff161015801561395c5750607a8360ff1611155b155b1561396f5750600095945050505050565b8061397981614c98565b9150506138fc565b50600195945050505050565b61399681611854565b156139e35760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016109bc565b610d2f81613ace565b600080613a03600084600186516110519190614c29565b60ca549091506001600160a01b031615801590613a3f5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b613a5082826115a9565b610dbc57613a68816001600160a01b03166014613b52565b613a73836020613b52565b604051602001613a849291906150c9565b60408051601f198184030181529082905262461bcd60e51b82526109bc916004016145db565b6000806000613ab98585613ced565b91509150613ac681613d32565b509392505050565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600190613b0d9060600161188f565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b60606000613b6183600261513e565b613b6c9060026150b6565b6001600160401b03811115613b8357613b83614392565b6040519080825280601f01601f191660200182016040528015613bad576020820181803683370190505b509050600360fc1b81600081518110613bc857613bc8614c3c565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110613bf757613bf7614c3c565b60200101906001600160f81b031916908160001a9053506000613c1b84600261513e565b613c269060016150b6565b90505b6001811115613c9e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110613c5a57613c5a614c3c565b1a60f81b828281518110613c7057613c70614c3c565b60200101906001600160f81b031916908160001a90535060049490941c93613c9781614f2e565b9050613c29565b508315613a3f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016109bc565b6000808251604103613d235760208301516040840151606085015160001a613d1787828585613ee8565b94509450505050613d2b565b506000905060025b9250929050565b6000816004811115613d4657613d46615155565b03613d4e5750565b6001816004811115613d6257613d62615155565b03613daf5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016109bc565b6002816004811115613dc357613dc3615155565b03613e105760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016109bc565b6003816004811115613e2457613e24615155565b03613e7c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016109bc565b6004816004811115613e9057613e90615155565b03610d2f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016109bc565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115613f1f5750600090506003613fcc565b8460ff16601b14158015613f3757508460ff16601c14155b15613f485750600090506004613fcc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613f9c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116613fc557600060019250925050613fcc565b9150600090505b94509492505050565b508054613fe190614db8565b6000825580601f10613ff1575050565b601f016020900490600052602060002090810190610d2f91905b8082111561401f576000815560010161400b565b5090565b60006020828403121561403557600080fd5b81356001600160e01b031981168114613a3f57600080fd5b6001600160401b0381168114610d2f57600080fd5b803561406d8161404d565b919050565b6000806040838503121561408557600080fd5b82356140908161404d565b946020939093013593505050565b6000602082840312156140b057600080fd5b5035919050565b60008083601f8401126140c957600080fd5b5081356001600160401b038111156140e057600080fd5b602083019150836020828501011115613d2b57600080fd5b60008060006040848603121561410d57600080fd5b8335925060208401356001600160401b0381111561412a57600080fd5b614136868287016140b7565b9497909650939450505050565b6001600160a01b0381168114610d2f57600080fd5b803561406d81614143565b6000806040838503121561417657600080fd5b82359150602083013561418881614143565b809150509250929050565b6000602082840312156141a557600080fd5b8135613a3f81614143565b60008083601f8401126141c257600080fd5b5081356001600160401b038111156141d957600080fd5b6020830191508360208260051b8501011115613d2b57600080fd5b8015158114610d2f57600080fd5b60008060008060008060008060a0898b03121561421e57600080fd5b883561422981614143565b975060208901356001600160401b038082111561424557600080fd5b6142518c838d016141b0565b909950975060408b013591508082111561426a57600080fd5b6142768c838d016141b0565b909750955060608b013591508082111561428f57600080fd5b5061429c8b828c016141b0565b90945092505060808901356142b0816141f4565b809150509295985092959890939650565b600080600080600080600080600060c08a8c0312156142df57600080fd5b89356142ea81614143565b985060208a01356001600160401b038082111561430657600080fd5b6143128d838e016141b0565b909a50985060408c013591508082111561432b57600080fd5b6143378d838e016141b0565b909850965060608c013591508082111561435057600080fd5b5061435d8c828d016141b0565b90955093505060808a01356143718161404d565b915060a08a0135614381816141f4565b809150509295985092959850929598565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156143d0576143d0614392565b604052919050565b60006001600160401b038211156143f1576143f1614392565b5060051b60200190565b6000602080838503121561440e57600080fd5b82356001600160401b0381111561442457600080fd5b8301601f8101851361443557600080fd5b8035614448614443826143d8565b6143a8565b81815260059190911b8201830190838101908783111561446757600080fd5b928401925b8284101561448e57833561447f81614143565b8252928401929084019061446c565b979650505050505050565b600080600080606085870312156144af57600080fd5b84356144ba81614143565b93506020850135925060408501356001600160401b038111156144dc57600080fd5b6144e8878288016140b7565b95989497509550505050565b6000806020838503121561450757600080fd5b82356001600160401b0381111561451d57600080fd5b614529858286016140b7565b90969095509350505050565b60008060006040848603121561454a57600080fd5b83356001600160401b0381111561456057600080fd5b61456c868287016140b7565b9094509250506020840135614580816141f4565b809150509250925092565b60005b838110156145a657818101518382015260200161458e565b50506000910152565b600081518084526145c781602086016020860161458b565b601f01601f19169290920160200192915050565b602081526000613a3f60208301846145af565b6000806020838503121561460157600080fd5b82356001600160401b0381111561461757600080fd5b614529858286016141b0565b60008060008060008060c0878903121561463c57600080fd5b863561464781614143565b9550602087013561465781614143565b9450604087013561466781614143565b9350606087013561467781614143565b9250608087013561468781614143565b915060a087013561469781614143565b809150509295509295509295565b60008060008060008060008060a0898b0312156146c157600080fd5b88356146cc81614143565b97506020890135965060408901356001600160401b03808211156146ef57600080fd5b6146fb8c838d016140b7565b909850965060608b013591508082111561471457600080fd5b6147208c838d016141b0565b909650945060808b013591508082111561473957600080fd5b506147468b828c016141b0565b999c989b5096995094979396929594505050565b600080600080600080600080600080600060e08c8e03121561477b57600080fd5b6147848c614158565b9a506001600160401b038060208e0135111561479f57600080fd5b6147af8e60208f01358f016141b0565b909b50995060408d01358110156147c557600080fd5b6147d58e60408f01358f016141b0565b909950975060608d01358110156147eb57600080fd5b6147fb8e60608f01358f016141b0565b909750955061480c60808e01614062565b945060a08d013593508060c08e0135111561482657600080fd5b506148378d60c08e01358e016140b7565b81935080925050509295989b509295989b9093969950565b6000806000806000806000806000806000806101008d8f03121561487257600080fd5b61487b8d614158565b9b506001600160401b0360208e0135111561489557600080fd5b6148a58e60208f01358f016141b0565b909b5099506001600160401b0360408e013511156148c257600080fd5b6148d28e60408f01358f016141b0565b90995097506001600160401b0360608e013511156148ef57600080fd5b6148ff8e60608f01358f016141b0565b909750955061491060808e01614062565b945061491e60a08e01614158565b935060c08d013592506001600160401b0360e08e0135111561493f57600080fd5b61494f8e60e08f01358f016140b7565b81935080925050509295989b509295989b509295989b565b6000806040838503121561497a57600080fd5b823561498581614143565b9150602083013561418881614143565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b6000602082840312156149dc57600080fd5b8151613a3f8161404d565b60208082526023908201527f4d696e74696e674d616e616765723a20544f4b454e5f4e4f545f455850495241604082015262424c4560e81b606082015260800190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b6000614a62614443846143d8565b80848252602080830192508560051b850136811115614a8057600080fd5b855b81811015614b125780356001600160401b0380821115614aa25760008081fd5b90880190601f3681840112614ab75760008081fd5b823582811115614ac957614ac9614392565b614ada818301601f191688016143a8565b92508083523687828601011115614af357600091508182fd5b8087850188850137600090830187015250865250938201938201614a82565b50919695505050505050565b60208082526024908201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604082015263272a22a960e11b606082015260800190565b600060208284031215614b7457600080fd5b8151613a3f816141f4565b6020808252602f908201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060408201526e282927ab22a22fa7a92fa7aba722a960891b606082015260800190565b60208082526025908201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456040820152642627abaf9960d91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561098f5761098f614c13565b634e487b7160e01b600052603260045260246000fd5b60208082526026908201527f4d696e74696e674d616e616765723a20535542444f4d41494e535f4e4f545f41604082015265131313d5d15160d21b606082015260800190565b600060018201614caa57614caa614c13565b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6020808252810182905260006001600160fb1b03831115614d0057600080fd5b8260051b80856040850137919091016040019392505050565b60008251614d2b81846020870161458b565b9190910192915050565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b600060208284031215614d8957600080fd5b5051919050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b600181811c90821680614dcc57607f821691505b602082108103614dec57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215614e0457600080fd5b8151613a3f81614143565b600081518084526020808501808196508360051b8101915082860160005b85811015614e57578284038952614e458483516145af565b98850198935090840190600101614e2d565b5091979650505050505050565b6001600160a01b038616815260a060208201819052600090614e8890830187614e0f565b8281036040840152614e9a8187614e0f565b90508281036060840152614eae8186614e0f565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152614ee560608401866145af565b9150808416604084015250949350505050565b606081526000614f0b6060830186614e0f565b8281036020840152614f1d8186614e0f565b915050826040830152949350505050565b600081614f3d57614f3d614c13565b506000190190565b601f821115610d1957600081815260208120601f850160051c81016020861015614f6c5750805b601f850160051c820191505b818110156116de57828155600101614f78565b81516001600160401b03811115614fa457614fa4614392565b614fb881614fb28454614db8565b84614f45565b602080601f831160018114614fed5760008415614fd55750858301515b600019600386901b1c1916600185901b1785556116de565b600085815260208120601f198616915b8281101561501c57888601518255948401946001909101908401614ffd565b508582101561503a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b82815260406020820152600061506360408301846145af565b949350505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8082018082111561098f5761098f614c13565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161510181601785016020880161458b565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161513281602884016020880161458b565b01602801949350505050565b808202811582820484141761098f5761098f614c13565b634e487b7160e01b600052602160045260246000fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class MintingManagerMock__factory extends ethers_1.ContractFactory {
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
exports.MintingManagerMock__factory = MintingManagerMock__factory;
MintingManagerMock__factory.bytecode = _bytecode;
MintingManagerMock__factory.abi = _abi;
