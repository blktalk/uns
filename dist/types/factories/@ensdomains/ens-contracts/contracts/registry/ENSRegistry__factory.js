"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSRegistry__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "label",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "NewOwner",
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
                name: "resolver",
                type: "address",
            },
        ],
        name: "NewResolver",
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
                name: "ttl",
                type: "uint64",
            },
        ],
        name: "NewTTL",
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
        name: "Transfer",
        type: "event",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "recordExists",
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
        name: "resolver",
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
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
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
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "label",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "setSubnodeOwner",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
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
                internalType: "bytes32",
                name: "label",
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
        name: "setSubnodeRecord",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "ttl",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060008080526020527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb580546001600160a01b0319163317905561098c806100596000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80635b0fc9c3116100715780635b0fc9c3146101ab5780635ef2c7f0146101be578063a22cb465146101d1578063cf408823146101e4578063e985e9c5146101f7578063f79fe5381461024357600080fd5b80630178b8bf146100b957806302571be31461010257806306ab59231461011557806314ab90381461013657806316a25cbd1461014b5780631896f70a14610198575b600080fd5b6100e56100c73660046107a4565b6000908152602081905260409020600101546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e56101103660046107a4565b61026e565b6101286101233660046107d9565b61029c565b6040519081526020016100f9565b610149610144366004610826565b61036c565b005b61017f6101593660046107a4565b600090815260208190526040902060010154600160a01b900467ffffffffffffffff1690565b60405167ffffffffffffffff90911681526020016100f9565b6101496101a6366004610852565b61043f565b6101496101b9366004610852565b610504565b6101496101cc366004610875565b6105a6565b6101496101df3660046108cc565b6105c8565b6101496101f2366004610908565b610634565b610233610205366004610955565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b60405190151581526020016100f9565b6102336102513660046107a4565b6000908152602081905260409020546001600160a01b0316151590565b6000818152602081905260408120546001600160a01b03163081036102965750600092915050565b92915050565b60008381526020819052604081205484906001600160a01b0316338114806102e757506001600160a01b038116600090815260016020908152604080832033845290915290205460ff165b6102f057600080fd5b60408051602080820189905281830188905282518083038401815260609092019092528051910120610322818661064f565b6040516001600160a01b0386168152869088907fce0457fe73731f824cc272376169235128c118b49d344817417c6d108d155e829060200160405180910390a39695505050505050565b60008281526020819052604090205482906001600160a01b0316338114806103b757506001600160a01b038116600090815260016020908152604080832033845290915290205460ff165b6103c057600080fd5b60405167ffffffffffffffff8416815284907f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa689060200160405180910390a25050600091825260208290526040909120600101805467ffffffffffffffff909216600160a01b0267ffffffffffffffff60a01b19909216919091179055565b60008281526020819052604090205482906001600160a01b03163381148061048a57506001600160a01b038116600090815260016020908152604080832033845290915290205460ff165b61049357600080fd5b6040516001600160a01b038416815284907f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a09060200160405180910390a2505060009182526020829052604090912060010180546001600160a01b0319166001600160a01b03909216919091179055565b60008281526020819052604090205482906001600160a01b03163381148061054f57506001600160a01b038116600090815260016020908152604080832033845290915290205460ff165b61055857600080fd5b610562848461064f565b6040516001600160a01b038416815284907fd4735d920b0f87494915f556dd9b54c8f309026070caea5c737245152564d2669060200160405180910390a250505050565b60006105b386868661029c565b90506105c081848461067d565b505050505050565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61063e8484610504565b61064984838361067d565b50505050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000838152602081905260409020600101546001600160a01b03838116911614610703576000838152602081815260409182902060010180546001600160a01b0319166001600160a01b038616908117909155915191825284917f335721b01866dc23fbee8b6b2c7b1e14d6f05c28cd35a2c934239f94095602a0910160405180910390a25b60008381526020819052604090206001015467ffffffffffffffff828116600160a01b909204161461079f5760008381526020818152604091829020600101805467ffffffffffffffff60a01b1916600160a01b67ffffffffffffffff861690810291909117909155915191825284917f1d4f9bbfc9cab89d66e1a1562f2233ccbf1308cb4f63de2ead5787adddb8fa68910160405180910390a25b505050565b6000602082840312156107b657600080fd5b5035919050565b80356001600160a01b03811681146107d457600080fd5b919050565b6000806000606084860312156107ee57600080fd5b8335925060208401359150610805604085016107bd565b90509250925092565b803567ffffffffffffffff811681146107d457600080fd5b6000806040838503121561083957600080fd5b823591506108496020840161080e565b90509250929050565b6000806040838503121561086557600080fd5b82359150610849602084016107bd565b600080600080600060a0868803121561088d57600080fd5b85359450602086013593506108a4604087016107bd565b92506108b2606087016107bd565b91506108c06080870161080e565b90509295509295909350565b600080604083850312156108df57600080fd5b6108e8836107bd565b9150602083013580151581146108fd57600080fd5b809150509250929050565b6000806000806080858703121561091e57600080fd5b8435935061092e602086016107bd565b925061093c604086016107bd565b915061094a6060860161080e565b905092959194509250565b6000806040838503121561096857600080fd5b610971836107bd565b9150610849602084016107bd56fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class ENSRegistry__factory extends ethers_1.ContractFactory {
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
exports.ENSRegistry__factory = ENSRegistry__factory;
ENSRegistry__factory.bytecode = _bytecode;
ENSRegistry__factory.abi = _abi;
