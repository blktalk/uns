"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotCoinBurner__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract IUNSRegistry",
                name: "unsRegistry",
                type: "address",
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
                internalType: "uint256",
                name: "first",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "last",
                type: "uint256",
            },
        ],
        name: "BatchCompleted",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "labelHashes",
                type: "uint256[]",
            },
        ],
        name: "burnAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60a060405234801561001057600080fd5b5060405161047d38038061047d83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516103f361008a600039600060d401526103f36000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063100cdd9114610030575b600080fd5b61004361003e3660046102e3565b610045565b005b60005b818110156101cb5760007f7674e7282552c15f203b9c4a6025aeaf28176ef7f5451b280f9bada3f8bc98e284848481811061008557610085610358565b905060200201356040516020016100a6929190918252602082015260400190565b60408051808303601f190181529082905280516020909101206331a9108f60e11b82526004820181905291507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd908290636352211e90602401602060405180830381865afa15801561012b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014f919061036e565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015261dead602482015260448101849052606401600060405180830381600087803b15801561019f57600080fd5b505af11580156101b3573d6000803e3d6000fd5b505050505080806101c3906103b4565b915050610048565b5080156102df577f7674e7282552c15f203b9c4a6025aeaf28176ef7f5451b280f9bada3f8bc98e282826102006001826103cd565b81811061020f5761020f610358565b90506020020135604051602001610230929190918252602082015260400190565b6040516020818303038152906040528051906020012060001c7f7674e7282552c15f203b9c4a6025aeaf28176ef7f5451b280f9bada3f8bc98e28383600081811061027d5761027d610358565b9050602002013560405160200161029e929190918252602082015260400190565b60408051601f19818403018152908290528051602090910120907fdf423376f9b0ab363b1b4d6f0b4cb6821921ec30f491555a97236a8a38ce095a90600090a35b5050565b600080602083850312156102f657600080fd5b823567ffffffffffffffff8082111561030e57600080fd5b818501915085601f83011261032257600080fd5b81358181111561033157600080fd5b8660208260051b850101111561034657600080fd5b60209290920196919550909350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561038057600080fd5b81516001600160a01b038116811461039757600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b6000600182016103c6576103c661039e565b5060010190565b818103818111156103e0576103e061039e565b9291505056fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class DotCoinBurner__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(unsRegistry, overrides) {
        return super.getDeployTransaction(unsRegistry, overrides || {});
    }
    deploy(unsRegistry, overrides) {
        return super.deploy(unsRegistry, overrides || {});
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
exports.DotCoinBurner__factory = DotCoinBurner__factory;
DotCoinBurner__factory.bytecode = _bytecode;
DotCoinBurner__factory.abi = _abi;
