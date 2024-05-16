"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Recoverable__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
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
const _bytecode = "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6103068061007e6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635d3590d514610051578063715018a6146100665780638da5cb5b1461006e578063f2fde38b1461008d575b600080fd5b61006461005f366004610279565b6100a0565b005b610064610121565b600054604080516001600160a01b039092168252519081900360200190f35b61006461009b3660046102b5565b610135565b6100a86101b3565b60405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af11580156100f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011b91906102d7565b50505050565b6101296101b3565b610133600061020d565b565b61013d6101b3565b6001600160a01b0381166101a75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6101b08161020d565b50565b6000546001600160a01b031633146101335760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161019e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461027457600080fd5b919050565b60008060006060848603121561028e57600080fd5b6102978461025d565b92506102a56020850161025d565b9150604084013590509250925092565b6000602082840312156102c757600080fd5b6102d08261025d565b9392505050565b6000602082840312156102e957600080fd5b815180151581146102d057600080fdfea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Recoverable__factory extends ethers_1.ContractFactory {
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
exports.ERC20Recoverable__factory = ERC20Recoverable__factory;
ERC20Recoverable__factory.bytecode = _bytecode;
ERC20Recoverable__factory.abi = _abi;
