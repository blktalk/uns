"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaportProxyBuyer__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "InvalidForwardedToken",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSignature",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidZone",
        type: "error",
    },
    {
        inputs: [],
        name: "OrderIsNotFulfiled",
        type: "error",
    },
    {
        inputs: [],
        name: "RecipientIsZeroAddress",
        type: "error",
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
                internalType: "address",
                name: "token",
                type: "address",
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
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "offerer",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "zone",
                                type: "address",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                ],
                                internalType: "struct OfferItem[]",
                                name: "offer",
                                type: "tuple[]",
                            },
                            {
                                components: [
                                    {
                                        internalType: "enum ItemType",
                                        name: "itemType",
                                        type: "uint8",
                                    },
                                    {
                                        internalType: "address",
                                        name: "token",
                                        type: "address",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "identifierOrCriteria",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "startAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "uint256",
                                        name: "endAmount",
                                        type: "uint256",
                                    },
                                    {
                                        internalType: "address payable",
                                        name: "recipient",
                                        type: "address",
                                    },
                                ],
                                internalType: "struct ConsiderationItem[]",
                                name: "consideration",
                                type: "tuple[]",
                            },
                            {
                                internalType: "enum OrderType",
                                name: "orderType",
                                type: "uint8",
                            },
                            {
                                internalType: "uint256",
                                name: "startTime",
                                type: "uint256",
                            },
                            {
                                internalType: "uint256",
                                name: "endTime",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "zoneHash",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "salt",
                                type: "uint256",
                            },
                            {
                                internalType: "bytes32",
                                name: "conduitKey",
                                type: "bytes32",
                            },
                            {
                                internalType: "uint256",
                                name: "totalOriginalConsiderationItems",
                                type: "uint256",
                            },
                        ],
                        internalType: "struct OrderParameters",
                        name: "parameters",
                        type: "tuple",
                    },
                    {
                        internalType: "uint120",
                        name: "numerator",
                        type: "uint120",
                    },
                    {
                        internalType: "uint120",
                        name: "denominator",
                        type: "uint120",
                    },
                    {
                        internalType: "bytes",
                        name: "signature",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "extraData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AdvancedOrder",
                name: "advancedOrder",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "orderIndex",
                        type: "uint256",
                    },
                    {
                        internalType: "enum Side",
                        name: "side",
                        type: "uint8",
                    },
                    {
                        internalType: "uint256",
                        name: "index",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "identifier",
                        type: "uint256",
                    },
                    {
                        internalType: "bytes32[]",
                        name: "criteriaProof",
                        type: "bytes32[]",
                    },
                ],
                internalType: "struct CriteriaResolver[]",
                name: "criteriaResolvers",
                type: "tuple[]",
            },
            {
                internalType: "bytes32",
                name: "fulfillerConduitKey",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
        ],
        name: "fulfillAdvancedOrder",
        outputs: [
            {
                internalType: "bool",
                name: "fulfilled",
                type: "bool",
            },
        ],
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
                internalType: "contract ConsiderationInterface",
                name: "seaport",
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
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801562000010575f80fd5b506200001b62000021565b620000e0565b5f54610100900460ff16156200008d5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b5f5460ff9081161015620000de575f805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b612e5b80620000ee5f395ff3fe6080604052600436106101db575f3560e01c80638da5cb5b116100fd578063c4d66de811610092578063daea85c511610062578063daea85c51461055e578063e7acab241461057d578063f2fde38b1461059c578063ffa1ad74146105bb575f80fd5b8063c4d66de8146104e1578063d539139314610500578063d547741f14610520578063d9caed121461053f575f80fd5b8063a217fddf116100cd578063a217fddf14610452578063a3f4df7e14610465578063a4247400146104a3578063aa271e1a146104c2575f80fd5b80638da5cb5b146103d957806391d1485414610400578063983b2d561461041f578063986502751461043e575f80fd5b80635c975abb11610173578063715018a611610143578063715018a61461037f57806371e2a6571461039357806381c81d35146103b25780638456cb59146103c5575f80fd5b80635c975abb146103165780635fc1964f1461032e578063634486da1461034d5780636ccbae5f14610360575f80fd5b80633092afd5116101ae5780633092afd51461029c57806336568abe146102bb5780633f4ba83a146102da578063572b6c05146102ee575f80fd5b806301ffc9a7146101df5780631bf7e13e14610213578063248a9ca31461023f5780632f2ff15d1461027b575b5f80fd5b3480156101ea575f80fd5b506101fe6101f9366004611e68565b6105eb565b60405190151581526020015b60405180910390f35b34801561021e575f80fd5b5061023261022d366004611e8f565b610621565b60405161020a9190611f71565b34801561024a575f80fd5b5061026d610259366004611f83565b5f90815260fb602052604090206001015490565b60405190815260200161020a565b348015610286575f80fd5b5061029a610295366004611fbe565b6106ea565b005b3480156102a7575f80fd5b5061029a6102b6366004611fec565b610713565b3480156102c6575f80fd5b5061029a6102d5366004611fbe565b610727565b3480156102e5575f80fd5b5061029a6107ba565b3480156102f9575f80fd5b506101fe610308366004611fec565b6001600160a01b0316301490565b348015610321575f80fd5b5061012d5460ff166101fe565b348015610339575f80fd5b5061029a610348366004612073565b6107d4565b61029a61035b366004611fec565b610811565b34801561036b575f80fd5b5061026d61037a366004611f83565b6108d1565b34801561038a575f80fd5b5061029a61092a565b34801561039e575f80fd5b5061029a6103ad366004612073565b61093b565b61029a6103c0366004611fec565b610978565b3480156103d0575f80fd5b5061029a6109f5565b3480156103e4575f80fd5b506097546040516001600160a01b03909116815260200161020a565b34801561040b575f80fd5b506101fe61041a366004611fbe565b610a0d565b34801561042a575f80fd5b5061029a610439366004611fec565b610a37565b348015610449575f80fd5b5061029a610a48565b34801561045d575f80fd5b5061026d5f81565b348015610470575f80fd5b506102326040518060400160405280601381526020017229b2b0b837b93a10283937bc3c90213abcb2b960691b81525081565b3480156104ae575f80fd5b506101fe6104bd366004611e8f565b610a61565b3480156104cd575f80fd5b506101fe6104dc366004611fec565b610ab2565b3480156104ec575f80fd5b5061029a6104fb366004611fec565b610aca565b34801561050b575f80fd5b5061026d5f80516020612e2f83398151915281565b34801561052b575f80fd5b5061029a61053a366004611fbe565b610c21565b34801561054a575f80fd5b5061029a610559366004612113565b610c45565b348015610569575f80fd5b5061029a610578366004611fec565b610cef565b348015610588575f80fd5b506101fe610597366004612151565b610d9c565b3480156105a7575f80fd5b5061029a6105b6366004611fec565b6111dc565b3480156105c6575f80fd5b50610232604051806040016040528060058152602001640302e312e360dc1b81525081565b5f6001600160e01b03198216637965db0b60e01b148061061b57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60605f5a9050610632858585610a61565b61064f57604051638baa579f60e01b815260040160405180910390fd5b6106df61065f6020870187611fec565b3060408801358461067360608b018b612203565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b90819084018382808284375f920191909152506111f792505050565b9150505b9392505050565b5f82815260fb6020526040902060010154610704816112d5565b61070e83836112e6565b505050565b61071b61136c565b610724816113e5565b50565b61072f6113fc565b6001600160a01b0316816001600160a01b0316146107ac5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6107b6828261140a565b5050565b6107c261136c565b6107ca61148e565b6107d26114d8565b565b6107dc61136c565b5f5b81518110156107b6576108098282815181106107fc576107fc612245565b60200260200101516113e5565b6001016107de565b61081c6104dc6113fc565b6108385760405162461bcd60e51b81526004016107a390612259565b6001600160a01b03811661088e5760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016107a3565b61089781611531565b61089f610a48565b6040516001600160a01b038216903480156108fc02915f818181858888f193505050501580156107b6573d5f803e3d5ffd5b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f90610923906060016040516020818303038152906040528051906020012090565b5492915050565b61093261136c565b6107d25f611548565b61094361136c565b5f5b81518110156107b65761097082828151811061096357610963612245565b6020026020010151611531565b600101610945565b6109836104dc6113fc565b61099f5760405162461bcd60e51b81526004016107a390612259565b6001600160a01b0381166108975760405162461bcd60e51b815260206004820152601d60248201527f4d696e746572526f6c653a2052454345495645525f49535f454d50545900000060448201526064016107a3565b6109fd61136c565b610a05611599565b6107d26115e0565b5f91825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b610a3f61136c565b61072481611531565b6107d25f80516020612e2f8339815191526102d56113fc565b5f610aaa610a6e8561228e565b3085858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061161f92505050565b949350505050565b5f61061b5f80516020612e2f83398151915283610a0d565b5f54610100900460ff1615808015610ae857505f54600160ff909116105b80610b015750303b158015610b0157505f5460ff166001145b610b645760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016107a3565b5f805460ff191660011790558015610b85575f805461ff0019166101001790555b61015f80546001600160a01b0319166001600160a01b038416179055610ba961175a565b610bb1611787565b610bb9611787565b610bc1611787565b610bc96117ad565b610bd16117e3565b610bd961181a565b80156107b6575f805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b5f82815260fb6020526040902060010154610c3b816112d5565b61070e838361140a565b610c4d61136c565b600260335403610c6f5760405162461bcd60e51b81526004016107a39061234a565b600260335560405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610cc0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ce49190612381565b505060016033555050565b610cf761136c565b600260335403610d195760405162461bcd60e51b81526004016107a39061234a565b600260335561015f5460405163095ea7b360e01b81526001600160a01b0391821660048201525f1960248201529082169063095ea7b3906044016020604051808303815f875af1158015610d6f573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d939190612381565b50506001603355565b5f610da86104dc6113fc565b610dc45760405162461bcd60e51b81526004016107a390612259565b600260335403610de65760405162461bcd60e51b81526004016107a39061234a565b6002603355610df3611599565b6001600160a01b038216610e1a576040516311d000e160e31b815260040160405180910390fd5b30610e2587806123a0565b610e36906040810190602001611fec565b6001600160a01b031614610e5d57604051639d3c586b60e01b815260040160405180910390fd5b61015f54604080516101608101909152611135916001600160a01b0316906379df72bd9080610e8c8b806123a0565b610e9a906020810190611fec565b6001600160a01b03168152602001610eb28b806123a0565b610ec3906040810190602001611fec565b6001600160a01b03168152602001610edb8b806123a0565b610ee99060408101906123bf565b808060200260200160405190810160405280939291908181526020015f905b82821015610f3457610f2560a08302860136819003810190612411565b81526020019060010190610f08565b5050509183525050602001610f498b806123a0565b610f5790606081019061248e565b808060200260200160405190810160405280939291908181526020015f905b82821015610fa257610f9360c083028601368190038101906124d2565b81526020019060010190610f76565b5050509183525050602001610fb78b806123a0565b610fc89060a081019060800161256d565b6004811115610fd957610fd9612586565b8152602001610fe88b806123a0565b60a001358152602001610ffb8b806123a0565b60c00135815260200161100e8b806123a0565b60e0013581526020016110218b806123a0565b610100013581526020016110358b806123a0565b6101200135815261015f546020909101906001600160a01b031663f07ec37361105e8d806123a0565b61106c906020810190611fec565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156110ae573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110d2919061259a565b8152506040518263ffffffff1660e01b81526004016110f191906126bf565b602060405180830381865afa15801561110c573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611130919061259a565b61184d565b61015f546040516339eb2ac960e21b81526001600160a01b039091169063e7acab249061116e9089908990899089908990600401612aac565b6020604051808303815f875af115801561118a573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111ae9190612381565b9050806111ce57604051636725093760e01b815260040160405180910390fd5b600160335595945050505050565b6111e461136c565b6111ed81611866565b6107245f826118dc565b6060611202856118e6565b5f80876001600160a01b03168661121b8b8a898961194b565b6040516112289190612c82565b5f604051808303815f8787f1925050503d805f8114611262576040519150601f19603f3d011682016040523d82523d5f602084013e611267565b606091505b509092509050611278603f87612ca7565b5a1161128657611286612cc6565b6112c682826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061197b565b925050505b9695505050505050565b610724816112e16113fc565b6119b4565b6112f08282610a0d565b6107b6575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff191660011790556113286113fc565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6113746113fc565b6001600160a01b031661138f6097546001600160a01b031690565b6001600160a01b0316146107d25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107a3565b6107245f80516020612e2f83398151915282610c21565b5f611405611a18565b905090565b6114148282610a0d565b156107b6575f82815260fb602090815260408083206001600160a01b03851684529091529020805460ff1916905561144a6113fc565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b61012d5460ff166107d25760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016107a3565b6114e061148e565b61012d805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6115146113fc565b6040516001600160a01b03909116815260200160405180910390a1565b6107245f80516020612e2f833981519152826118dc565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b61012d5460ff16156107d25760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016107a3565b6115e8611599565b61012d805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586115146113fc565b6040838101519051636ccbae5f60e01b815260048101919091525f9081903090636ccbae5f90602401602060405180830381865afa158015611663573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611687919061259a565b90505f6117348660600151805190602001208688602001516040516020016116d49392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156112cb575085516112cb906001600160a01b03168286611a35565b5f54610100900460ff166117805760405162461bcd60e51b81526004016107a390612cda565b6001603355565b5f54610100900460ff166107d25760405162461bcd60e51b81526004016107a390612cda565b5f54610100900460ff166117d35760405162461bcd60e51b81526004016107a390612cda565b6107d26117de6113fc565b611548565b5f54610100900460ff166118095760405162461bcd60e51b81526004016107a390612cda565b6107d25f6118156113fc565b6118dc565b5f54610100900460ff166118405760405162461bcd60e51b81526004016107a390612cda565b61012d805460ff19169055565b30330361185d5761072481611b70565b610724816118e6565b61186e61136c565b6001600160a01b0381166118d35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016107a3565b61072481611548565b6107b682826112e6565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a8381560208201529081018290525f9060600160405160208183030381529060405280519060200120905061193a8190565b54611946906001612d25565b905550565b606082858560405160200161196293929190612d38565b6040516020818303038152906040529050949350505050565b6060831561198a5750816106e3565b82511561199a5782518084602001fd5b8160405162461bcd60e51b81526004016107a39190611f71565b6119be8282610a0d565b6107b6576119d6816001600160a01b03166014611b9a565b6119e1836020611b9a565b6040516020016119f2929190612d76565b60408051601f198184030181529082905262461bcd60e51b82526107a391600401611f71565b5f303303611a2d575060331936013560601c90565b503390565b90565b5f805f611a428585611d2f565b90925090505f816004811115611a5a57611a5a612586565b148015611a785750856001600160a01b0316826001600160a01b0316145b15611a88576001925050506106e3565b5f80876001600160a01b0316631626ba7e60e01b8888604051602401611aaf929190612dea565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611aed9190612c82565b5f60405180830381855afa9150503d805f8114611b25576040519150601f19603f3d011682016040523d82523d5f602084013e611b2a565b606091505b5091509150818015611b3d575080516020145b8015611b6457508051630b135d3f60e11b90611b62908301602090810190840161259a565b145b98975050505050505050565b611b78611d71565b811461072457604051635637b6af60e11b8152600481018290526024016107a3565b60605f611ba8836002612e02565b611bb3906002612d25565b6001600160401b03811115611bca57611bca612007565b6040519080825280601f01601f191660200182016040528015611bf4576020820181803683370190505b509050600360fc1b815f81518110611c0e57611c0e612245565b60200101906001600160f81b03191690815f1a905350600f60fb1b81600181518110611c3c57611c3c612245565b60200101906001600160f81b03191690815f1a9053505f611c5e846002612e02565b611c69906001612d25565b90505b6001811115611ce0576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611c9d57611c9d612245565b1a60f81b828281518110611cb357611cb3612245565b60200101906001600160f81b03191690815f1a90535060049490941c93611cd981612e19565b9050611c6c565b5083156106e35760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107a3565b5f808251604103611d63576020830151604084015160608501515f1a611d5787828585611d83565b94509450505050611d6a565b505f905060025b9250929050565b5f303303611a325750601f1936013590565b5f807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611db857505f90506003611e5f565b8460ff16601b14158015611dd057508460ff16601c14155b15611de057505f90506004611e5f565b604080515f8082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e31573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b038116611e59575f60019250925050611e5f565b91505f90505b94509492505050565b5f60208284031215611e78575f80fd5b81356001600160e01b0319811681146106e3575f80fd5b5f805f60408486031215611ea1575f80fd5b83356001600160401b0380821115611eb7575f80fd5b9085019060808288031215611eca575f80fd5b90935060208501359080821115611edf575f80fd5b818601915086601f830112611ef2575f80fd5b813581811115611f00575f80fd5b876020828501011115611f11575f80fd5b6020830194508093505050509250925092565b5f5b83811015611f3e578181015183820152602001611f26565b50505f910152565b5f8151808452611f5d816020860160208601611f24565b601f01601f19169290920160200192915050565b602081525f6106e36020830184611f46565b5f60208284031215611f93575f80fd5b5035919050565b6001600160a01b0381168114610724575f80fd5b8035611fb981611f9a565b919050565b5f8060408385031215611fcf575f80fd5b823591506020830135611fe181611f9a565b809150509250929050565b5f60208284031215611ffc575f80fd5b81356106e381611f9a565b634e487b7160e01b5f52604160045260245ffd5b604051608081016001600160401b038111828210171561203d5761203d612007565b60405290565b604051601f8201601f191681016001600160401b038111828210171561206b5761206b612007565b604052919050565b5f6020808385031215612084575f80fd5b82356001600160401b038082111561209a575f80fd5b818501915085601f8301126120ad575f80fd5b8135818111156120bf576120bf612007565b8060051b91506120d0848301612043565b81815291830184019184810190888411156120e9575f80fd5b938501935b83851015611b64578435925061210383611f9a565b82825293850193908501906120ee565b5f805f60608486031215612125575f80fd5b833561213081611f9a565b9250602084013561214081611f9a565b929592945050506040919091013590565b5f805f805f60808688031215612165575f80fd5b85356001600160401b038082111561217b575f80fd5b9087019060a0828a03121561218e575f80fd5b909550602087013590808211156121a3575f80fd5b818801915088601f8301126121b6575f80fd5b8135818111156121c4575f80fd5b8960208260051b85010111156121d8575f80fd5b602083019650809550505050604086013591506121f760608701611fae565b90509295509295909350565b5f808335601e19843603018112612218575f80fd5b8301803591506001600160401b03821115612231575f80fd5b602001915036819003821315611d6a575f80fd5b634e487b7160e01b5f52603260045260245ffd5b6020808252818101527f4d696e746572526f6c653a2043414c4c45525f49535f4e4f545f4d494e544552604082015260600190565b5f6080823603121561229e575f80fd5b6122a661201b565b82356122b181611f9a565b8152602083810135818301526040808501359083015260608401356001600160401b03808211156122e0575f80fd5b9085019036601f8301126122f2575f80fd5b81358181111561230457612304612007565b612316601f8201601f19168501612043565b9150808252368482850101111561232b575f80fd5b80848401858401375f9082019093019290925250606082015292915050565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b5f60208284031215612391575f80fd5b815180151581146106e3575f80fd5b5f823561015e198336030181126123b5575f80fd5b9190910192915050565b5f808335601e198436030181126123d4575f80fd5b8301803591506001600160401b038211156123ed575f80fd5b602001915060a081023603821315611d6a575f80fd5b803560068110611fb9575f80fd5b5f60a08284031215612421575f80fd5b60405160a081018181106001600160401b038211171561244357612443612007565b60405261244f83612403565b8152602083013561245f81611f9a565b806020830152506040830135604082015260608301356060820152608083013560808201528091505092915050565b5f808335601e198436030181126124a3575f80fd5b8301803591506001600160401b038211156124bc575f80fd5b602001915060c081023603821315611d6a575f80fd5b5f60c082840312156124e2575f80fd5b60405160c081018181106001600160401b038211171561250457612504612007565b60405261251083612403565b8152602083013561252081611f9a565b8060208301525060408301356040820152606083013560608201526080830135608082015260a083013561255381611f9a565b60a08201529392505050565b803560058110611fb9575f80fd5b5f6020828403121561257d575f80fd5b6106e38261255f565b634e487b7160e01b5f52602160045260245ffd5b5f602082840312156125aa575f80fd5b5051919050565b600681106125c1576125c1612586565b9052565b5f815180845260208085019450602084015f5b8381101561262e5781516125ed8882516125b1565b838101516001600160a01b03168885015260408082015190890152606080820151908901526080908101519088015260a090960195908201906001016125d8565b509495945050505050565b5f815180845260208085019450602084015f5b8381101561262e5781516126618882516125b1565b808401516001600160a01b0390811689860152604080830151908a0152606080830151908a0152608080830151908a015260a091820151169088015260c0909601959082019060010161264c565b600581106125c1576125c1612586565b602081526126d96020820183516001600160a01b03169052565b5f60208301516126f460408401826001600160a01b03169052565b5060408301516101608060608501526127116101808501836125c5565b91506060850151601f1985840301608086015261272e8382612639565b925050608085015161274360a08601826126af565b5060a085015160c085015260c085015160e085015260e0850151610100818187015280870151915050610120818187015280870151915050610140818187015280870151838701525050508091505092915050565b5f808335601e198436030181126127ad575f80fd5b83016020810192503590506001600160401b038111156127cb575f80fd5b60a081023603821315611d6a575f80fd5b8183525f60208085019450825f5b8581101561262e57612804876127ff84612403565b6125b1565b8282013561281181611f9a565b6001600160a01b03168388015260408281013590880152606080830135908801526080808301359088015260a096870196909101906001016127ea565b5f808335601e19843603018112612863575f80fd5b83016020810192503590506001600160401b03811115612881575f80fd5b60c081023603821315611d6a575f80fd5b8183525f60208085019450825f5b8581101561262e576128b5876127ff84612403565b828201356128c281611f9a565b6001600160a01b039081168885015260408381013590890152606080840135908901526080808401359089015260a090838201356128ff81611f9a565b169088015260c09687019691909101906001016128a0565b80356001600160781b0381168114611fb9575f80fd5b5f808335601e19843603018112612942575f80fd5b83016020810192503590506001600160401b03811115612960575f80fd5b803603821315611d6a575f80fd5b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b8183525f6001600160fb1b038311156129ad575f80fd5b8260051b80836020870137939093016020019392505050565b8183526020808401935f91600585811b8301820185855b88811015612a9e57858303601f19018a52813536899003609e19018112612a02575f80fd5b88018035845260a08682013560028110612a1a575f80fd5b85880152604082810135908601526060808301359086015260808083013536849003601e19018112612a4a575f80fd5b9092018781019290356001600160401b03811115612a66575f80fd5b80881b3603841315612a76575f80fd5b8282880152612a888388018286612996565b9d89019d965050509286019250506001016129dd565b509098975050505050505050565b608081525f610120873561015e19893603018112612ac8575f80fd5b60a060808501528801612aed828501612ae083611fae565b6001600160a01b03169052565b612af960208201611fae565b610140612b10818701836001600160a01b03169052565b612b1d6040840184612798565b610160888101529250612b35610280880184836127dc565b925050612b45606084018461284e565b87840361011f1901610180890152612b5e848284612892565b93505050612b6e6080840161255f565b612b7c6101a08801826126af565b5060a08301356101c087015260c08301356101e087015260e0830135610200870152610100808401356102208801528484013561024088015281840135610260880152612bcb60208d01612917565b6001600160781b03811660a08901529450612be860408d01612917565b6001600160781b03811660c08901529450612c0660608d018d61292d565b95509350607f199150818784030160e0880152612c2483868661296e565b9450612c3360808d018d61292d565b945092508187860301818801525050612c4d83838361296e565b925050508281036020840152612c648187896129c6565b9150508360408301526112cb60608301846001600160a01b03169052565b5f82516123b5818460208701611f24565b634e487b7160e01b5f52601160045260245ffd5b5f82612cc157634e487b7160e01b5f52601260045260245ffd5b500490565b634e487b7160e01b5f52600160045260245ffd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8082018082111561061b5761061b612c93565b5f8451612d49818460208901611f24565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081525f8351612dad816017850160208801611f24565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351612dde816028840160208801611f24565b01602801949350505050565b828152604060208201525f610aaa6040830184611f46565b808202811582820484141761061b5761061b612c93565b5f81612e2757612e27612c93565b505f19019056fe9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a164736f6c6343000818000a";
const isSuperArgs = (xs) => xs.length > 1;
class SeaportProxyBuyer__factory extends ethers_1.ContractFactory {
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
exports.SeaportProxyBuyer__factory = SeaportProxyBuyer__factory;
SeaportProxyBuyer__factory.bytecode = _bytecode;
SeaportProxyBuyer__factory.abi = _abi;
