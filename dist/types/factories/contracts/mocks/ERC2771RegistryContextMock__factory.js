"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC2771RegistryContextMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
        inputs: [
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "execute",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
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
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "msgData",
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
        inputs: [],
        name: "msgSender",
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
        name: "msgToken",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610562806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806309c5eabe14610067578063572b6c05146100915780638129fc1c146100bd578063c4c2bfdc146100c7578063d737d0c7146100dd578063f4b06cd8146100fd575b600080fd5b61007a610075366004610380565b610113565b6040516100889291906103f2565b60405180910390f35b6100ad61009f36600461044a565b6001600160a01b0316301490565b6040519015158152602001610088565b6100c561017f565b005b6100cf610295565b60405161008892919061047a565b6100e56102a8565b6040516001600160a01b039091168152602001610088565b6101056102b7565b604051908152602001610088565b60006060306001600160a01b031684846040516101319291906104a9565b6000604051808303816000865af19150503d806000811461016e576040519150601f19603f3d011682016040523d82523d6000602084013e610173565b606091505b50915091509250929050565b600054610100900460ff161580801561019f5750600054600160ff909116105b806101b95750303b1580156101b9575060005460ff166001145b6102215760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff191660011790558015610244576000805461ff0019166101001790555b61024c6102c1565b8015610292576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b3660006102a06102fa565b915091509091565b60006102b2610328565b905090565b60006102b2610346565b600054610100900460ff166102e85760405162461bcd60e51b8152600401610218906104b9565b6102f0610359565b6102f8610359565b565b3660003033036103205760008036610313603482610504565b926102a09392919061052b565b6000366102a0565b600030330361033e575060331936013560601c90565b503390565b90565b60003033036103435750601f1936013590565b600054610100900460ff166102f85760405162461bcd60e51b8152600401610218906104b9565b6000806020838503121561039357600080fd5b823567ffffffffffffffff808211156103ab57600080fd5b818501915085601f8301126103bf57600080fd5b8135818111156103ce57600080fd5b8660208285010111156103e057600080fd5b60209290920196919550909350505050565b821515815260006020604081840152835180604085015260005b818110156104285785810183015185820160600152820161040c565b506000606082860101526060601f19601f830116850101925050509392505050565b60006020828403121561045c57600080fd5b81356001600160a01b038116811461047357600080fd5b9392505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b8183823760009101908152919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b8181038181111561052557634e487b7160e01b600052601160045260246000fd5b92915050565b6000808585111561053b57600080fd5b8386111561054857600080fd5b505082019391909203915056fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ERC2771RegistryContextMock__factory extends ethers_1.ContractFactory {
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
exports.ERC2771RegistryContextMock__factory = ERC2771RegistryContextMock__factory;
ERC2771RegistryContextMock__factory.bytecode = _bytecode;
ERC2771RegistryContextMock__factory.abi = _abi;
