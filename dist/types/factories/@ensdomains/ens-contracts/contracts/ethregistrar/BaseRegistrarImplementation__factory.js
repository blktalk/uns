"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRegistrarImplementation__factory = void 0;
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
                internalType: "bytes32",
                name: "_baseNode",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
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
                indexed: true,
                internalType: "address",
                name: "controller",
                type: "address",
            },
        ],
        name: "ControllerAdded",
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
        ],
        name: "ControllerRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
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
                name: "expires",
                type: "uint256",
            },
        ],
        name: "NameMigrated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
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
                name: "expires",
                type: "uint256",
            },
        ],
        name: "NameRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "expires",
                type: "uint256",
            },
        ],
        name: "NameRenewed",
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
        inputs: [],
        name: "GRACE_PERIOD",
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
                name: "controller",
                type: "address",
            },
        ],
        name: "addController",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "available",
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
        inputs: [],
        name: "baseNode",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "nameExpires",
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
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "reclaim",
        outputs: [],
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
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "register",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
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
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "registerOnly",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
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
        ],
        name: "removeController",
        outputs: [],
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
                name: "",
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
                internalType: "bytes4",
                name: "interfaceID",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b506040516200201738038062002017833981016040819052620000349162000109565b60408051602080820183526000808352835191820190935282815290916200005d8382620001ea565b5060016200006c8282620001ea565b5050506200008962000083620000b360201b60201c565b620000b7565b600880546001600160a01b0319166001600160a01b039390931692909217909155600955620002b6565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080604083850312156200011d57600080fd5b82516001600160a01b03811681146200013557600080fd5b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200017057607f821691505b6020821081036200019157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001e557600081815260208120601f850160051c81016020861015620001c05750805b601f850160051c820191505b81811015620001e157828155600101620001cc565b5050505b505050565b81516001600160401b0381111562000206576200020662000145565b6200021e816200021784546200015b565b8462000197565b602080601f8311600181146200025657600084156200023d5750858301515b600019600386901b1c1916600185901b178555620001e1565b600085815260208120601f198616915b82811015620002875788860151825594840194600190910190840162000266565b5085821015620002a65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611d5180620002c66000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806395d89b4111610104578063c87b56dd116100a2578063e985e9c511610071578063e985e9c5146103e0578063f2fde38b1461041c578063f6a74ed71461042f578063fca247ac1461044257600080fd5b8063c87b56dd14610381578063d6e4fa8614610394578063da8c229e146103b4578063ddf7fcb0146103d757600080fd5b8063a7fc7a07116100de578063a7fc7a071461033e578063b88d4fde14610351578063c1a287e214610364578063c475abff1461036e57600080fd5b806395d89b411461031057806396e494e814610318578063a22cb4651461032b57600080fd5b80633f15457f116101715780636352211e1161014b5780636352211e146102d157806370a08231146102e4578063715018a6146102f75780638da5cb5b146102ff57600080fd5b80633f15457f1461029857806342842e0e146102ab5780634e543b26146102be57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c5780630e297b451461025157806323b872dd1461027257806328ed4f6c1461028557600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e236600461183e565b610455565b60405190151581526020015b60405180910390f35b6102046104a7565b6040516101f391906118ab565b61022461021f3660046118be565b610539565b6040516001600160a01b0390911681526020016101f3565b61024f61024a3660046118ec565b610560565b005b61026461025f366004611918565b61067a565b6040519081526020016101f3565b61024f610280366004611950565b610691565b61024f610293366004611980565b6106c2565b600854610224906001600160a01b031681565b61024f6102b9366004611950565b6107db565b61024f6102cc3660046119b0565b6107f6565b6102246102df3660046118be565b61086b565b6102646102f23660046119b0565b61088e565b61024f610914565b6006546001600160a01b0316610224565b610204610928565b6101e76103263660046118be565b610937565b61024f6103393660046119cd565b61095d565b61024f61034c3660046119b0565b61096c565b61024f61035f366004611a16565b6109c0565b6102646276a70081565b61026461037c366004611af6565b6109f8565b61020461038f3660046118be565b610b89565b6102646103a23660046118be565b60009081526007602052604090205490565b6101e76103c23660046119b0565b600a6020526000908152604090205460ff1681565b61026460095481565b6101e76103ee366004611b18565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61024f61042a3660046119b0565b610bfd565b61024f61043d3660046119b0565b610c76565b610264610450366004611918565b610cc7565b60006001600160e01b031982166301ffc9a760e01b148061048657506001600160e01b031982166380ac58cd60e01b145b806104a157506001600160e01b03198216630a3b53db60e21b145b92915050565b6060600080546104b690611b46565b80601f01602080910402602001604051908101604052809291908181526020018280546104e290611b46565b801561052f5780601f106105045761010080835404028352916020019161052f565b820191906000526020600020905b81548152906001019060200180831161051257829003601f168201915b5050505050905090565b600061054482610cd6565b506000908152600460205260409020546001600160a01b031690565b600061056b82610d35565b9050806001600160a01b0316836001600160a01b0316036105dd5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105f957506105f981336103ee565b61066b5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016105d4565b6106758383610d95565b505050565b60006106898484846000610e03565b949350505050565b61069b3382611013565b6106b75760405162461bcd60e51b81526004016105d490611b80565b61067583838361108e565b6008546009546040516302571be360e01b8152600481019190915230916001600160a01b0316906302571be390602401602060405180830381865afa15801561070f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107339190611bcd565b6001600160a01b03161461074657600080fd5b6107503383611013565b61075957600080fd5b6008546009546040516306ab592360e01b81526004810191909152602481018490526001600160a01b038381166044830152909116906306ab5923906064016020604051808303816000875af11580156107b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106759190611bea565b610675838383604051806020016040528060008152506109c0565b6107fe6111f2565b600854600954604051630c4b7b8560e11b815260048101919091526001600160a01b03838116602483015290911690631896f70a90604401600060405180830381600087803b15801561085057600080fd5b505af1158015610864573d6000803e3d6000fd5b5050505050565b600081815260076020526040812054421061088557600080fd5b6104a182610d35565b60006001600160a01b0382166108f85760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016105d4565b506001600160a01b031660009081526003602052604090205490565b61091c6111f2565b610926600061124c565b565b6060600180546104b690611b46565b6000818152600760205260408120544290610956906276a70090611c03565b1092915050565b61096833838361129e565b5050565b6109746111f2565b6001600160a01b0381166000818152600a6020526040808220805460ff19166001179055517f0a8bb31534c0ed46f380cb867bd5c803a189ced9a764e30b3a4991a9901d74749190a250565b6109ca3383611013565b6109e65760405162461bcd60e51b81526004016105d490611b80565b6109f28484848461136c565b50505050565b6008546009546040516302571be360e01b8152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa158015610a4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6e9190611bcd565b6001600160a01b031614610a8157600080fd5b336000908152600a602052604090205460ff16610a9d57600080fd5b6000838152600760205260409020544290610abc906276a70090611c03565b1015610ac757600080fd5b610ad46276a70083611c03565b6000848152600760205260409020546276a70090610af3908590611c03565b610afd9190611c03565b11610b0757600080fd5b60008381526007602052604081208054849290610b25908490611c03565b90915550506000838152600760205260409081902054905184917f9b87a00e30f1ac65d898f070f8a3488fe60517182d0a2098e1b4b93a54aa9bd691610b6d91815260200190565b60405180910390a2505060009081526007602052604090205490565b6060610b9482610cd6565b6000610bab60408051602081019091526000815290565b90506000815111610bcb5760405180602001604052806000815250610bf6565b80610bd58461139f565b604051602001610be6929190611c24565b6040516020818303038152906040525b9392505050565b610c056111f2565b6001600160a01b038116610c6a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105d4565b610c738161124c565b50565b610c7e6111f2565b6001600160a01b0381166000818152600a6020526040808220805460ff19169055517f33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e811139190a250565b60006106898484846001610e03565b6000818152600260205260409020546001600160a01b0316610c735760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105d4565b6000818152600260205260408120546001600160a01b0316806104a15760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016105d4565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610dca82610d35565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6008546009546040516302571be360e01b8152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa158015610e55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e799190611bcd565b6001600160a01b031614610e8c57600080fd5b336000908152600a602052604090205460ff16610ea857600080fd5b610eb185610937565b610eba57600080fd5b610ec76276a70042611c03565b6276a700610ed58542611c03565b610edf9190611c03565b11610ee957600080fd5b610ef38342611c03565b6000868152600760209081526040808320939093556002905220546001600160a01b031615610f2557610f2585611432565b610f2f84866114c7565b8115610fb9576008546009546040516306ab592360e01b81526004810191909152602481018790526001600160a01b038681166044830152909116906306ab5923906064016020604051808303816000875af1158015610f93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb79190611bea565b505b6001600160a01b038416857fb3d987963d01b2f68493b4bdb130988f157ea43070d4ad840fee0466ed9370d9610fef8642611c03565b60405190815260200160405180910390a361100a8342611c03565b95945050505050565b60008061101f8361086b565b9050806001600160a01b0316846001600160a01b0316148061105a5750836001600160a01b031661104f84610539565b6001600160a01b0316145b8061068957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff16610689565b826001600160a01b03166110a182610d35565b6001600160a01b0316146110c75760405162461bcd60e51b81526004016105d490611c53565b6001600160a01b0382166111295760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105d4565b826001600160a01b031661113c82610d35565b6001600160a01b0316146111625760405162461bcd60e51b81526004016105d490611c53565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b031633146109265760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105d4565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036112ff5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105d4565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61137784848461108e565b61138384848484611652565b6109f25760405162461bcd60e51b81526004016105d490611c98565b606060006113ac83611750565b600101905060008167ffffffffffffffff8111156113cc576113cc611a00565b6040519080825280601f01601f1916602001820160405280156113f6576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a850494508461140057509392505050565b600061143d82610d35565b905061144882610d35565b600083815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0385168085526003845282852080546000190190558785526002909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b03821661151d5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105d4565b6000818152600260205260409020546001600160a01b0316156115825760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105d4565b6000818152600260205260409020546001600160a01b0316156115e75760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105d4565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b1561174857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611696903390899088908890600401611cea565b6020604051808303816000875af19250505080156116d1575060408051601f3d908101601f191682019092526116ce91810190611d27565b60015b61172e573d8080156116ff576040519150601f19603f3d011682016040523d82523d6000602084013e611704565b606091505b5080516000036117265760405162461bcd60e51b81526004016105d490611c98565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610689565b506001610689565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b831061178f5772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef810000000083106117bb576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106117d957662386f26fc10000830492506010015b6305f5e10083106117f1576305f5e100830492506008015b612710831061180557612710830492506004015b60648310611817576064830492506002015b600a83106104a15760010192915050565b6001600160e01b031981168114610c7357600080fd5b60006020828403121561185057600080fd5b8135610bf681611828565b60005b8381101561187657818101518382015260200161185e565b50506000910152565b6000815180845261189781602086016020860161185b565b601f01601f19169290920160200192915050565b602081526000610bf6602083018461187f565b6000602082840312156118d057600080fd5b5035919050565b6001600160a01b0381168114610c7357600080fd5b600080604083850312156118ff57600080fd5b823561190a816118d7565b946020939093013593505050565b60008060006060848603121561192d57600080fd5b83359250602084013561193f816118d7565b929592945050506040919091013590565b60008060006060848603121561196557600080fd5b8335611970816118d7565b9250602084013561193f816118d7565b6000806040838503121561199357600080fd5b8235915060208301356119a5816118d7565b809150509250929050565b6000602082840312156119c257600080fd5b8135610bf6816118d7565b600080604083850312156119e057600080fd5b82356119eb816118d7565b9150602083013580151581146119a557600080fd5b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611a2c57600080fd5b8435611a37816118d7565b93506020850135611a47816118d7565b925060408501359150606085013567ffffffffffffffff80821115611a6b57600080fd5b818701915087601f830112611a7f57600080fd5b813581811115611a9157611a91611a00565b604051601f8201601f19908116603f01168101908382118183101715611ab957611ab9611a00565b816040528281528a6020848701011115611ad257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611b0957600080fd5b50508035926020909101359150565b60008060408385031215611b2b57600080fd5b8235611b36816118d7565b915060208301356119a5816118d7565b600181811c90821680611b5a57607f821691505b602082108103611b7a57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b600060208284031215611bdf57600080fd5b8151610bf6816118d7565b600060208284031215611bfc57600080fd5b5051919050565b808201808211156104a157634e487b7160e01b600052601160045260246000fd5b60008351611c3681846020880161185b565b835190830190611c4a81836020880161185b565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611d1d9083018461187f565b9695505050505050565b600060208284031215611d3957600080fd5b8151610bf68161182856fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class BaseRegistrarImplementation__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_ens, _baseNode, overrides) {
        return super.getDeployTransaction(_ens, _baseNode, overrides || {});
    }
    deploy(_ens, _baseNode, overrides) {
        return super.deploy(_ens, _baseNode, overrides || {});
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
exports.BaseRegistrarImplementation__factory = BaseRegistrarImplementation__factory;
BaseRegistrarImplementation__factory.bytecode = _bytecode;
BaseRegistrarImplementation__factory.abi = _abi;
