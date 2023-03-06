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
        ],
        name: "addTld",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5061388f806100206000396000f3fe6080604052600436106102675760003560e01c806391d1485411610144578063b9998a24116100b6578063d1f5692c1161007a578063d1f5692c14610776578063d539139314610796578063d547741f146107b8578063ec527389146107d8578063f2fde38b146107f8578063ffa1ad741461081857600080fd5b8063b9998a24146106d6578063c3a3bc00146106f6578063cc2a9a5b14610716578063cc2c3fc414610736578063ceeb4f501461075657600080fd5b8063a3f4df7e11610108578063a3f4df7e146105e9578063a849d65c14610636578063aa271e1a14610656578063ae31844a14610676578063b0aa98c714610696578063b3ab15fb146106b657600080fd5b806391d148541461055f578063983b2d561461057f578063986502751461059f57806399e0dd7c146105b4578063a217fddf146105d457600080fd5b80635c975abb116101dd57806371e2a657116101a157806371e2a657146104b957806377a2a589146104d957806381c81d35146104f95780638456cb591461050c5780638da5cb5b14610521578063906cecc11461053f57600080fd5b80635c975abb1461043c5780635cd7e3b3146104515780635fc1964f14610471578063634486da14610491578063715018a6146104a457600080fd5b806336568abe1161022f57806336568abe146103415780633f41b614146103615780633f4ba83a1461039957806344d5f66c146103ae578063572b6c05146103ce5780635b6fa8db1461041c57600080fd5b806301ffc9a71461026c578063248a9ca3146102a1578063268b15ed146102df5780632f2ff15d146103015780633092afd514610321575b600080fd5b34801561027857600080fd5b5061028c610287366004613199565b61084a565b60405190151581526020015b60405180910390f35b3480156102ad57600080fd5b506102d16102bc366004613152565b60009081526097602052604090206001015490565b604051908152602001610298565b3480156102eb57600080fd5b506102ff6102fa366004613275565b610881565b005b34801561030d57600080fd5b506102ff61031c36600461316a565b610924565b34801561032d57600080fd5b506102ff61033c366004612d9c565b61094e565b34801561034d57600080fd5b506102ff61035c36600461316a565b610962565b34801561036d57600080fd5b5060c954610381906001600160a01b031681565b6040516001600160a01b039091168152602001610298565b3480156103a557600080fd5b506102ff6109f0565b3480156103ba57600080fd5b506102ff6103c9366004613073565b610a02565b3480156103da57600080fd5b5061028c6103e9366004612d9c565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546001600160a01b0390811691161490565b34801561042857600080fd5b5060cc54610381906001600160a01b031681565b34801561044857600080fd5b5061028c610a8e565b34801561045d57600080fd5b506102ff61046c366004612dd4565b610aa4565b34801561047d57600080fd5b506102ff61048c366004612fd8565b610dfe565b6102ff61049f366004612d9c565b610e54565b3480156104b057600080fd5b506102ff610f17565b3480156104c557600080fd5b506102ff6104d4366004612fd8565b610f29565b3480156104e557600080fd5b5060ce54610381906001600160a01b031681565b6102ff610507366004612d9c565b610f7f565b34801561051857600080fd5b506102ff610ffc565b34801561052d57600080fd5b506033546001600160a01b0316610381565b34801561054b57600080fd5b506102ff61055a366004612e8f565b61100c565b34801561056b57600080fd5b5061028c61057a36600461316a565b611092565b34801561058b57600080fd5b506102ff61059a366004612d9c565b6110bd565b3480156105ab57600080fd5b506102ff6110ce565b3480156105c057600080fd5b506102ff6105cf366004613242565b6110e8565b3480156105e057600080fd5b506102d1600081565b3480156105f557600080fd5b50610629604051806040016040528060148152602001732aa7299d1026b4b73a34b7339026b0b730b3b2b960611b81525081565b6040516102989190613588565b34801561064257600080fd5b5060cb54610381906001600160a01b031681565b34801561066257600080fd5b5061028c610671366004612d9c565b6111c7565b34801561068257600080fd5b506102ff610691366004612f99565b6111e1565b3480156106a257600080fd5b5061028c6106b1366004613152565b6112ec565b3480156106c257600080fd5b506102ff6106d1366004612d9c565b61134a565b3480156106e257600080fd5b506102ff6106f1366004612d9c565b611374565b34801561070257600080fd5b506102ff610711366004613242565b6113b9565b34801561072257600080fd5b506102ff6107313660046131c1565b611400565b34801561074257600080fd5b5060ca54610381906001600160a01b031681565b34801561076257600080fd5b506102ff610771366004612ee8565b611789565b34801561078257600080fd5b506102ff610791366004612f99565b61181f565b3480156107a257600080fd5b506102d160008051602061386383398151915281565b3480156107c457600080fd5b506102ff6107d336600461316a565b6118e4565b3480156107e457600080fd5b506102ff6107f3366004613152565b611909565b34801561080457600080fd5b506102ff610813366004612d9c565b61197b565b34801561082457600080fd5b5061062960405180604001604052806006815260200165302e342e313160d01b81525081565b60006001600160e01b03198216637965db0b60e01b148061087b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506108c59250849150839050611997565b6108cd610a8e565b156108f35760405162461bcd60e51b81526004016108ea906135d0565b60405180910390fd5b606061091c610900611aed565b6109138861090e8989611afc565b611b28565b83846001611c55565b505050505050565b60008281526097602052604090206001015461093f81611f51565b6109498383611f62565b505050565b610956611fe9565b61095f81612062565b50565b61096a611aed565b6001600160a01b0316816001600160a01b0316146109e25760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016108ea565b6109ec828261207a565b5050565b6109f8611fe9565b610a006120ff565b565b610a0d610671611aed565b610a295760405162461bcd60e51b81526004016108ea9061359b565b60c9546040516311357d9b60e21b81526001600160a01b03909116906344d5f66c90610a59908490600401613488565b600060405180830381600087803b158015610a7357600080fd5b505af1158015610a87573d6000803e3d6000fd5b5050505050565b6000805160206138438339815191525460ff1690565b610aae8688613749565b805160021415610b2057610ac3610671611aed565b610b1b5760405162461bcd60e51b8152602060048201526024808201527f4d696e74696e674d616e616765723a2043414c4c45525f49535f4e4f545f4d49604482015263272a22a960e11b60648201526084016108ea565b610ccb565b6000610b2b826121a7565b60c9549092506001600160a01b0316905063430c2081610b49611aed565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810184905260440160206040518083038186803b158015610b8f57600080fd5b505afa158015610ba3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc79190613136565b80610c65575060c95460ce5460405163430c208160e01b81526001600160a01b0391821660048201526024810184905291169063430c20819060440160206040518083038186803b158015610c1b57600080fd5b505afa158015610c2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c539190613136565b8015610c655750610c65610671611aed565b610cc95760405162461bcd60e51b815260206004820152602f60248201527f4d696e74696e674d616e616765723a2053454e4445525f49535f4e4f545f415060448201526e282927ab22a22fa7a92fa7aba722a960891b60648201526084016108ea565b505b610cd58789613749565b600281511015610d355760405162461bcd60e51b815260206004820152602560248201527f4d696e74696e674d616e616765723a204c4142454c535f4c454e4754485f42456044820152642627abaf9960d91b60648201526084016108ea565b610da5610d7760008360018551610d4c9190613732565b81518110610d6a57634e487b7160e01b600052603260045260246000fd5b60200260200101516121e2565b82600081518110610d9857634e487b7160e01b600052603260045260246000fd5b6020026020010151611997565b610dad610a8e565b15610dca5760405162461bcd60e51b81526004016108ea906135d0565b610df28a610dd88a8c613749565b610de2898b613749565b610dec888a613749565b87611c55565b50505050505050505050565b610e06611fe9565b60005b81518110156109ec57610e42828281518110610e3557634e487b7160e01b600052603260045260246000fd5b6020026020010151612062565b80610e4c816137d8565b915050610e09565b610e5f610671611aed565b610e7b5760405162461bcd60e51b81526004016108ea9061359b565b6001600160a01b038116610ed15760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ea565b610eda81612297565b610ee26110ce565b6040516001600160a01b038216903480156108fc02916000818181858888f193505050501580156109ec573d6000803e3d6000fd5b610f1f611fe9565b610a0060006122af565b610f31611fe9565b60005b81518110156109ec57610f6d828281518110610f6057634e487b7160e01b600052603260045260246000fd5b6020026020010151612297565b80610f77816137d8565b915050610f34565b610f8a610671611aed565b610fa65760405162461bcd60e51b81526004016108ea9061359b565b6001600160a01b038116610eda5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016108ea565b611004611fe9565b610a00612301565b8282828080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506110509250849150839050611997565b611058610a8e565b156110755760405162461bcd60e51b81526004016108ea906135d0565b6060611089876109138861090e8989611afc565b50505050505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6110c5611fe9565b61095f81612297565b610a0060008051602061386383398151915261035c611aed565b6110f0611fe9565b60c954604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906111229085908590600401613559565b600060405180830381600087803b15801561113c57600080fd5b505af1158015611150573d6000803e3d6000fd5b505060cb546001600160a01b03161591506109ec90505760cb54604051632678375f60e21b81526001600160a01b03909116906399e0dd7c906111999085908590600401613559565b600060405180830381600087803b1580156111b357600080fd5b505af115801561091c573d6000803e3d6000fd5b600061087b60008051602061386383398151915283611092565b6111ec610671611aed565b6112085760405162461bcd60e51b81526004016108ea9061359b565b60c9546040516000916001600160a01b03169061122b908590859060240161351f565b60408051601f198184030181529181526020820180516001600160e01b0316635718c22560e11b17905251611260919061333b565b6000604051808303816000865af19150503d806000811461129d576040519150601f19603f3d011682016040523d82523d6000602084013e6112a2565b606091505b50509050806109495760405162461bcd60e51b81526020600482015260166024820152751d5c19dc985919505b1b081b5bd8dac819985a5b195960521b60448201526064016108ea565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd696020820152908101829052600090611340906060015b6040516020818303038152906040528051906020012090565b5460ff1692915050565b611352611fe9565b60ce80546001600160a01b0319166001600160a01b0392909216919091179055565b61137c611fe9565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e80546001600160a01b0319166001600160a01b03831617905550565b6113c1611fe9565b6109ec82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061236992505050565b600054610100900460ff16158080156114205750600054600160ff909116105b8061143a5750303b15801561143a575060005460ff166001145b61149d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016108ea565b6000805460ff1916600117905580156114c0576000805461ff0019166101001790555b60c980546001600160a01b03199081166001600160a01b038a81169190911790925560ca8054821689841617905560cb8054821688841617905560cc8054821687841617905560ce805490911691851691909117905561151e612485565b6115266124bc565b61152f826124f5565b61153761251c565b604080516102008101825260066101c082018181526563727970746f60d01b6101e0840152825282518084018452818152651dd85b1b195d60d21b602082810191909152808401919091528351808501855260018152600f60fb1b8183015283850152835180850185526003808252621b999d60ea1b82840152606085019190915284518086018652600a815269313637b1b5b1b430b4b760b11b818401526080850152845180860186526007808252663134ba31b7b4b760c91b8285015260a0860191909152855180870187528281526207070760eb1b8185015260c0860152855180870187528281526264616f60e81b8185015260e086015285518087018752918252621e9a5b60ea1b8284015261010085019190915284518086018652908152663837b63cb3b7b760c91b8183015261012084015283518085018552600b81526a756e73746f707061626c6560a81b81830152610140840152835180850185528281526535b632bb32b960d11b81830152610160840152835180850185526002815261686960f01b818301526101808401528351808501909452908352656b726573757360d01b908301526101a081019190915260005b600e811015611739576117278282600e811061171d57634e487b7160e01b600052603260045260246000fd5b6020020151612369565b80611731816137d8565b9150506116f1565b50508015611089576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050505050565b8686868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506117cd9250849150839050611997565b6117d5610a8e565b156117f25760405162461bcd60e51b81526004016108ea906135d0565b610df28a6118048b61090e8c8c611afc565b61180e888a613749565b6118188789613749565b6001611c55565b611827611fe9565b60005b818110156109495760c9546001600160a01b0316635096023984848481811061186357634e487b7160e01b600052603260045260246000fd5b90506020020160208101906118789190612d9c565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401600060405180830381600087803b1580156118b957600080fd5b505af11580156118cd573d6000803e3d6000fd5b5050505080806118dc906137d8565b91505061182a565b6000828152609760205260409020600101546118ff81611f51565b610949838361207a565b611911611fe9565b61191a8161255c565b6119365760405162461bcd60e51b81526004016108ea906135fa565b600081815260cd6020526040812061194d91612b6f565b60405181907f0aa1aff0f830e739d86baf0e6624d6763da02f7733575e0e463886cd062dea6a90600090a250565b611983611fe9565b61198c81612582565b61095f6000826125f8565b6119a08261255c565b6119bc5760405162461bcd60e51b81526004016108ea906135fa565b60006119ef8260408051808201825260008082526020918201528151808301909252825182529182019181019190915290565b9050600a81600001511115611a9857611a1a611a0e826000600a612602565b80516020909101512090565b7fb551e0305c8163b812374b8e78b577c77f226f6f10c5ad03e52699578fbc34b81415611a985760405162461bcd60e51b815260206004820152602660248201527f4d696e74696e674d616e616765723a20544f4b454e5f4c4142454c5f50524f4860448201526512509255115160d21b60648201526084016108ea565b611aa182612641565b6109495760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a204c4142454c5f494e56414c494400000060448201526064016108ea565b6000611af76127a6565b905090565b60608282604051602001611b11929190613357565b604051602081830303815290604052905092915050565b604080516002808252606082810190935260009190816020015b6060815260200190600190039081611b425790505090508281600081518110611b7b57634e487b7160e01b600052603260045260246000fd5b602002602001018190525060cd60008581526020019081526020016000208054611ba49061379d565b80601f0160208091040260200160405190810160405280929190818152602001828054611bd09061379d565b8015611c1d5780601f10611bf257610100808354040283529160200191611c1d565b820191906000526020600020905b815481529060010190602001808311611c0057829003601f168201915b505050505081600181518110611c4357634e487b7160e01b600052603260045260246000fd5b60209081029190910101529392505050565b6000611c60856121a7565b5060c954604051634f558e7960e01b8152600481018390529192506001600160a01b031690634f558e799060240160206040518083038186803b158015611ca657600080fd5b505afa158015611cba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cde9190613136565b8015611d6c575060c9546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e9060240160206040518083038186803b158015611d2957600080fd5b505afa158015611d3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d619190612db8565b6001600160a01b0316145b15611de05760c954604051630fb8df0360e11b81526001600160a01b0390911690631f71be0690611da990899089908990899089906004016133f4565b600060405180830381600087803b158015611dc357600080fd5b505af1158015611dd7573d6000803e3d6000fd5b5050505061091c565b611de9816127ed565b611df28561284c565b8015611dff575084516002145b15611eeb5760ca5485516001600160a01b039091169063c36c21259088908890600090611e3c57634e487b7160e01b600052603260045260246000fd5b602090810291909101015160cc546040516001600160e01b031960e086901b168152611e769392916001600160a01b031690600401613453565b600060405180830381600087803b158015611e9057600080fd5b505af1158015611ea4573d6000803e3d6000fd5b50505050600084511115611ee65760cc54604051633a0deb9d60e21b81526001600160a01b039091169063e837ae7490611da9908790879086906004016134e9565b61091c565b60c95460405163ba5d40b760e01b81526001600160a01b039091169063ba5d40b790611f2390899089908990899089906004016133f4565b600060405180830381600087803b158015611f3d57600080fd5b505af1158015610df2573d6000803e3d6000fd5b61095f81611f5d611aed565b6128a6565b611f6c8282611092565b6109ec5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611fa5611aed565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b611ff1611aed565b6001600160a01b031661200c6033546001600160a01b031690565b6001600160a01b031614610a005760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016108ea565b61095f600080516020613863833981519152826118e4565b6120848282611092565b156109ec5760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191690556120bb611aed565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b612107610a8e565b61214a5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881393d517d4105554d15160621b60448201526064016108ea565b600080516020613843833981519152805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61218a611aed565b6040516001600160a01b03909116815260200160405180910390a1565b805160009081905b80156121dc578291506121c88285610d4c600185613732565b9250806121d481613786565b9150506121af565b50915091565b60008151600014156122365760405162461bcd60e51b815260206004820152601b60248201527f4d696e74696e674d616e616765723a204c4142454c5f454d505459000000000060448201526064016108ea565b8282604051602001612248919061333b565b60405160208183030381529060405280519060200120604051602001612278929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b61095f600080516020613863833981519152826125f8565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b612309610a8e565b156123265760405162461bcd60e51b81526004016108ea906135d0565b600080516020613843833981519152805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861218a611aed565b60006123766000836121e2565b600081815260cd60209081526040909120845192935061239a929091850190612ba9565b50807f4fce6f6e172b04eaa80325d8e3b0180a34945000f3e214605039e8420fdf8980836040516123cb9190613588565b60405180910390a260c954604051634f558e7960e01b8152600481018390526001600160a01b0390911690634f558e799060240160206040518083038186803b15801561241757600080fd5b505afa15801561242b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061244f9190613136565b6109ec5760c9546040516307befae360e51b81526001600160a01b039091169063f7df5c60906111999084908690600401613687565b600054610100900460ff166124ac5760405162461bcd60e51b81526004016108ea9061363c565b610a006124b7611aed565b6122af565b600054610100900460ff166124e35760405162461bcd60e51b81526004016108ea9061363c565b610a0060006124f0611aed565b6125f8565b600054610100900460ff1661137c5760405162461bcd60e51b81526004016108ea9061363c565b600054610100900460ff166125435760405162461bcd60e51b81526004016108ea9061363c565b600080516020613843833981519152805460ff19169055565b600081815260cd6020526040812080548291906125789061379d565b9050119050919050565b61258a611fe9565b6001600160a01b0381166125ef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016108ea565b61095f816122af565b6109ec8282611f62565b6040805180820190915260008082526020820152604051806040016040528083815260200184866020015161263791906136fb565b9052949350505050565b600081516000141561265557506000919050565b60208201805160f81c60308110801590612673575060398160ff1611155b158015612695575060618160ff16101580156126935750607a8160ff1611155b155b156126a4575060009392505050565b83516001811115612712576126c6836126be600184613732565b015160f81c90565b915060308260ff16101580156126e0575060398260ff1611155b158015612702575060618260ff16101580156127005750607a8260ff1611155b155b1561271257506000949350505050565b60015b612720600183613732565b81101561279a578381015160f81c9250602d8314801590612756575060308360ff1610158015612754575060398360ff1611155b155b8015612777575060618360ff16101580156127755750607a8360ff1611155b155b156127885750600095945050505050565b80612792816137d8565b915050612715565b50600195945050505050565b7f893ef2ea16c023f61d4f55d3e6ee3fc3f2fbfd478461323dbc2fbf919047086e546000906001600160a01b03163314156127e8575060331936013560601c90565b503390565b6127f6816112ec565b156128435760405162461bcd60e51b815260206004820152601d60248201527f4d696e74696e674d616e616765723a20544f4b454e5f424c4f434b454400000060448201526064016108ea565b61095f8161290a565b60008061286360008460018651610d4c9190613732565b60ca549091506001600160a01b03161580159061289f5750807f0f4a10a4f46c288cea365fcf45cccf0e9d901b945b9829ccdb54c10dc3cb7a6f145b9392505050565b6128b08282611092565b6109ec576128c8816001600160a01b0316601461298e565b6128d383602061298e565b6040516020016128e492919061337f565b60408051601f198184030181529082905262461bcd60e51b82526108ea91600401613588565b604080517f1ec047073e2c8b15660901dbfdb6e3ff6365bd699dd9f95dcc6eab5448bebd69602082015290810182905260019061294990606001611327565b805460ff19169115159190911790556040518181527f2ce5d9351b1d590d5a066db0d2dc7602d55f092506a83a7ee8c4d78ee357d75a9060200160405180910390a150565b6060600061299d836002613713565b6129a89060026136fb565b6001600160401b038111156129cd57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156129f7576020820181803683370190505b509050600360fc1b81600081518110612a2057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110612a5d57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000612a81846002613713565b612a8c9060016136fb565b90505b6001811115612b20576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110612ace57634e487b7160e01b600052603260045260246000fd5b1a60f81b828281518110612af257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c93612b1981613786565b9050612a8f565b50831561289f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016108ea565b508054612b7b9061379d565b6000825580601f10612b8b575050565b601f01602090049060005260206000209081019061095f9190612c2d565b828054612bb59061379d565b90600052602060002090601f016020900481019282612bd75760008555612c1d565b82601f10612bf057805160ff1916838001178555612c1d565b82800160010185558215612c1d579182015b82811115612c1d578251825591602001919060010190612c02565b50612c29929150612c2d565b5090565b5b80821115612c295760008155600101612c2e565b6000612c55612c50846136d8565b6136a8565b9050808382526020808301915083868660051b86011115612c7557600080fd5b60005b86811015612d095781356001600160401b0380821115612c9757600080fd5b8188019150601f8a81840112612cac57600080fd5b823582811115612cbe57612cbe613809565b612ccf818301601f191688016136a8565b92508083528b87828601011115612ce557600080fd5b80878501888501376000908301870152508552509282019290820190600101612c78565b505050509392505050565b60008083601f840112612d25578182fd5b5081356001600160401b03811115612d3b578182fd5b6020830191508360208260051b8501011115612d5657600080fd5b9250929050565b60008083601f840112612d6e578182fd5b5081356001600160401b03811115612d84578182fd5b602083019150836020828501011115612d5657600080fd5b600060208284031215612dad578081fd5b813561289f8161381f565b600060208284031215612dc9578081fd5b815161289f8161381f565b60008060008060008060008060a0898b031215612def578384fd5b8835612dfa8161381f565b975060208901356001600160401b0380821115612e15578586fd5b612e218c838d01612d14565b909950975060408b0135915080821115612e39578586fd5b612e458c838d01612d14565b909750955060608b0135915080821115612e5d578485fd5b50612e6a8b828c01612d14565b9094509250506080890135612e7e81613834565b809150509295985092959890939650565b60008060008060608587031215612ea4578182fd5b8435612eaf8161381f565b93506020850135925060408501356001600160401b03811115612ed0578283fd5b612edc87828801612d5d565b95989497509550505050565b60008060008060008060008060a0898b031215612f03578182fd5b8835612f0e8161381f565b97506020890135965060408901356001600160401b0380821115612f30578384fd5b612f3c8c838d01612d5d565b909850965060608b0135915080821115612f54578384fd5b612f608c838d01612d14565b909650945060808b0135915080821115612f78578384fd5b50612f858b828c01612d14565b999c989b5096995094979396929594505050565b60008060208385031215612fab578182fd5b82356001600160401b03811115612fc0578283fd5b612fcc85828601612d14565b90969095509350505050565b60006020808385031215612fea578182fd5b82356001600160401b03811115612fff578283fd5b8301601f8101851361300f578283fd5b803561301d612c50826136d8565b80828252848201915084840188868560051b870101111561303c578687fd5b8694505b838510156130675780356130538161381f565b835260019490940193918501918501613040565b50979650505050505050565b60006020808385031215613085578182fd5b82356001600160401b038082111561309b578384fd5b818501915085601f8301126130ae578384fd5b81356130bc612c50826136d8565b80828252858201915085850189878560051b88010111156130db578788fd5b875b84811015613127578135868111156130f357898afd5b8701603f81018c1361310357898afd5b6131148c8a83013560408401612c42565b85525092870192908701906001016130dd565b50909998505050505050505050565b600060208284031215613147578081fd5b815161289f81613834565b600060208284031215613163578081fd5b5035919050565b6000806040838503121561317c578182fd5b82359150602083013561318e8161381f565b809150509250929050565b6000602082840312156131aa578081fd5b81356001600160e01b03198116811461289f578182fd5b60008060008060008060c087890312156131d9578384fd5b86356131e48161381f565b955060208701356131f48161381f565b945060408701356132048161381f565b935060608701356132148161381f565b925060808701356132248161381f565b915060a08701356132348161381f565b809150509295509295509295565b60008060208385031215613254578182fd5b82356001600160401b03811115613269578283fd5b612fcc85828601612d5d565b600080600060408486031215613289578081fd5b8335925060208401356001600160401b038111156132a5578182fd5b6132b186828701612d5d565b9497909650939450505050565b6000815180845260208085019450848260051b8601828601855b858110156133025783830389526132f083835161330f565b988501989250908401906001016132d8565b5090979650505050505050565b60008151808452613327816020860160208601613756565b601f01601f19169290920160200192915050565b6000825161334d818460208701613756565b9190910192915050565b6b756e732d646576746573742d60a01b81528183600c83013760009101600c01908152919050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516133b7816017850160208801613756565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516133e8816028840160208801613756565b01602801949350505050565b6001600160a01b038616815260a060208201819052600090613418908301876132be565b828103604084015261342a81876132be565b9050828103606084015261343e81866132be565b91505082151560808301529695505050505050565b600060018060a01b03808616835260606020840152613475606084018661330f565b9150808416604084015250949350505050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b828110156134dc57603f198886030184526134ca8583516132be565b945092850192908501906001016134ae565b5092979650505050505050565b6060815260006134fc60608301866132be565b828103602084015261350e81866132be565b915050826040830152949350505050565b6020808252810182905260006001600160fb1b0383111561353e578081fd5b8260051b808560408501379190910160400190815292915050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60208152600061289f602083018461330f565b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b60208082526010908201526f14185d5cd8589b194e8814105554d15160821b604082015260600190565b60208082526022908201527f4d696e74696e674d616e616765723a20544c445f4e4f545f5245474953544552604082015261115160f21b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8281526040602082015260006136a0604083018461330f565b949350505050565b604051601f8201601f191681016001600160401b03811182821017156136d0576136d0613809565b604052919050565b60006001600160401b038211156136f1576136f1613809565b5060051b60200190565b6000821982111561370e5761370e6137f3565b500190565b600081600019048311821515161561372d5761372d6137f3565b500290565b600082821015613744576137446137f3565b500390565b600061289f368484612c42565b60005b83811015613771578181015183820152602001613759565b83811115613780576000848401525b50505050565b600081613795576137956137f3565b506000190190565b600181811c908216806137b157607f821691505b602082108114156137d257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156137ec576137ec6137f3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461095f57600080fd5b801515811461095f57600080fdfe5496787fc1ebdfeba375028c1865f13fbb1d63c0caa356ccc1b29a80f3ebd6229f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000804000a";
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
exports.MintingManagerMock__factory = MintingManagerMock__factory;
MintingManagerMock__factory.bytecode = _bytecode;
MintingManagerMock__factory.abi = _abi;
