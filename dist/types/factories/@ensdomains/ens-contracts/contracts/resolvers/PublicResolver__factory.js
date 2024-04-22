"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicResolver__factory = void 0;
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
                internalType: "contract INameWrapper",
                name: "wrapperAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_trustedETHController",
                type: "address",
            },
            {
                internalType: "address",
                name: "_trustedReverseRegistrar",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "contentType",
                type: "uint256",
            },
        ],
        name: "ABIChanged",
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
                name: "a",
                type: "address",
            },
        ],
        name: "AddrChanged",
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
                internalType: "uint256",
                name: "coinType",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "newAddress",
                type: "bytes",
            },
        ],
        name: "AddressChanged",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                indexed: true,
                internalType: "address",
                name: "delegate",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "Approved",
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
                internalType: "bytes",
                name: "hash",
                type: "bytes",
            },
        ],
        name: "ContenthashChanged",
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
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "record",
                type: "bytes",
            },
        ],
        name: "DNSRecordChanged",
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
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint16",
                name: "resource",
                type: "uint16",
            },
        ],
        name: "DNSRecordDeleted",
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
                internalType: "bytes",
                name: "lastzonehash",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "zonehash",
                type: "bytes",
            },
        ],
        name: "DNSZonehashChanged",
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
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4",
            },
            {
                indexed: false,
                internalType: "address",
                name: "implementer",
                type: "address",
            },
        ],
        name: "InterfaceChanged",
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
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "NameChanged",
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
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "y",
                type: "bytes32",
            },
        ],
        name: "PubkeyChanged",
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
                internalType: "string",
                name: "indexedKey",
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
        name: "TextChanged",
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
                name: "newVersion",
                type: "uint64",
            },
        ],
        name: "VersionChanged",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "contentTypes",
                type: "uint256",
            },
        ],
        name: "ABI",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
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
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "addr",
        outputs: [
            {
                internalType: "address payable",
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
            {
                internalType: "uint256",
                name: "coinType",
                type: "uint256",
            },
        ],
        name: "addr",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "delegate",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "clearRecords",
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
        name: "contenthash",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
            {
                internalType: "uint16",
                name: "resource",
                type: "uint16",
            },
        ],
        name: "dnsRecord",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "name",
                type: "bytes32",
            },
        ],
        name: "hasDNSRecords",
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
            {
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4",
            },
        ],
        name: "interfaceImplementer",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "delegate",
                type: "address",
            },
        ],
        name: "isApprovedFor",
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
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicall",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "nodehash",
                type: "bytes32",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "multicallWithNodeCheck",
        outputs: [
            {
                internalType: "bytes[]",
                name: "results",
                type: "bytes[]",
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
        ],
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "pubkey",
        outputs: [
            {
                internalType: "bytes32",
                name: "x",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "y",
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
                name: "",
                type: "bytes32",
            },
        ],
        name: "recordVersions",
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
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "contentType",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "setABI",
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
                internalType: "uint256",
                name: "coinType",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "a",
                type: "bytes",
            },
        ],
        name: "setAddr",
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
                name: "a",
                type: "address",
            },
        ],
        name: "setAddr",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "bytes",
                name: "hash",
                type: "bytes",
            },
        ],
        name: "setContenthash",
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
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "setDNSRecords",
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
                internalType: "bytes4",
                name: "interfaceID",
                type: "bytes4",
            },
            {
                internalType: "address",
                name: "implementer",
                type: "address",
            },
        ],
        name: "setInterface",
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
                internalType: "string",
                name: "newName",
                type: "string",
            },
        ],
        name: "setName",
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
                name: "x",
                type: "bytes32",
            },
            {
                internalType: "bytes32",
                name: "y",
                type: "bytes32",
            },
        ],
        name: "setPubkey",
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
        name: "setText",
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
                internalType: "bytes",
                name: "hash",
                type: "bytes",
            },
        ],
        name: "setZonehash",
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
        inputs: [
            {
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
            {
                internalType: "string",
                name: "key",
                type: "string",
            },
        ],
        name: "text",
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
                internalType: "bytes32",
                name: "node",
                type: "bytes32",
            },
        ],
        name: "zonehash",
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
];
const _bytecode = "0x6101006040523480156200001257600080fd5b50604051620030403803806200304083398101604081905262000035916200017a565b6040516302571be360e01b81527f91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e26004820152849033906000906001600160a01b038416906302571be390602401602060405180830381865afa158015620000a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c79190620001e2565b604051630f41a04d60e11b81526001600160a01b03848116600483015291925090821690631e83409a906024016020604051808303816000875af115801562000114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200013a919062000209565b5050506001600160a01b039485166080525091831660a052821660c0521660e05262000223565b6001600160a01b03811681146200017757600080fd5b50565b600080600080608085870312156200019157600080fd5b84516200019e8162000161565b6020860151909450620001b18162000161565b6040860151909350620001c48162000161565b6060860151909250620001d78162000161565b939692955090935050565b600060208284031215620001f557600080fd5b8151620002028162000161565b9392505050565b6000602082840312156200021c57600080fd5b5051919050565b60805160a05160c05160e051612ddc620002646000396000611720015260006116ee0152600081816117df015261182c015260006117680152612ddc6000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80638b95dd7111610104578063c8690233116100a2578063e32954eb11610071578063e32954eb14610500578063e59d895d14610513578063e985e9c514610526578063f1cb7e061461056257600080fd5b8063c869023314610441578063ce3decdc14610499578063d5fa2b00146104ac578063d700ff33146104bf57600080fd5b8063a8fa5682116100de578063a8fa5682146103b7578063a9784b3e146103ca578063ac9650d81461040e578063bc1c58d11461042e57600080fd5b80638b95dd711461037e578063a22cb46514610391578063a4b91a01146103a457600080fd5b80633603d7581161017c5780635c98042b1161014b5780635c98042b14610332578063623195b014610345578063691f343114610358578063773722131461036b57600080fd5b80633603d758146102a15780633b3b57de146102b45780634cbf6ba4146102c757806359d1d43c1461031257600080fd5b8063124a319c116101b8578063124a319c1461022f5780632203ab561461025a57806329cd62ea1461027b578063304e6ade1461028e57600080fd5b806301ffc9a7146101df5780630af179d71461020757806310f13a8c1461021c575b600080fd5b6101f26101ed36600461230a565b610575565b60405190151581526020015b60405180910390f35b61021a610215366004612366565b610586565b005b61021a61022a3660046123b1565b61078f565b61024261023d36600461242a565b61085b565b6040516001600160a01b0390911681526020016101fe565b61026d610268366004612456565b610aac565b6040516101fe9291906124c8565b61021a6102893660046124e1565b610be2565b61021a61029c366004612366565b610c7c565b61021a6102af36600461250d565b610cf7565b6102426102c236600461250d565b610d98565b6101f26102d5366004612456565b600082815260208181526040808320546001600160401b031683526006825280832094835293815283822092825291909152205461ffff16151590565b610325610320366004612366565b610dca565b6040516101fe9190612526565b61032561034036600461250d565b610ea9565b61021a610353366004612539565b610f67565b61032561036636600461250d565b611003565b61021a610379366004612366565b61103c565b61021a61038c3660046125a1565b6110b7565b61021a61039f366004612689565b611196565b61021a6103b23660046126b5565b611271565b6103256103c53660046126f3565b61133e565b6101f26103d8366004612733565b6001600160a01b039283166000908152600c60209081526040808320948352938152838220929094168152925290205460ff1690565b61042161041c3660046127ae565b61138b565b6040516101fe91906127ef565b61032561043c36600461250d565b611399565b61048461044f36600461250d565b600081815260208181526040808320546001600160401b03168352600982528083209383529290522080546001909101549091565b604080519283526020830191909152016101fe565b61021a6104a7366004612366565b6113d2565b61021a6104ba366004612851565b611513565b6104e86104cd36600461250d565b6000602081905290815260409020546001600160401b031681565b6040516001600160401b0390911681526020016101fe565b61042161050e366004612881565b61153a565b61021a6105213660046128bf565b61154f565b6101f26105343660046128f4565b6001600160a01b039182166000908152600b6020908152604080832093909416825291909152205460ff1690565b610325610570366004612456565b6115f5565b6000610580826116bc565b92915050565b82610590816116e1565b61059957600080fd5b600084815260208181526040808320548151601f87018490048402810184019092528582528392606092839285926001600160401b039091169183916105fe9183918d908d908190840183828082843760009201919091525092939250506119169050565b90505b80515160208201511015610728578661ffff16600003610666578060400151965061062b81611977565b94508460405160200161063e9190612922565b60405160208183030381529060405280519060200120925061065f81611998565b935061071a565b600061067182611977565b9050816040015161ffff168861ffff16141580610695575061069386826119b4565b155b15610718576106f18c878a8e8e8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505060208801518d91506106e8908290612954565b8b51158a6119d2565b81604001519750816020015196508095508580519060200120935061071582611998565b94505b505b61072381611c39565b610601565b50835115610783576107838a85888c8c8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c925061077a91508290508f612954565b895115886119d2565b50505050505050505050565b84610799816116e1565b6107a257600080fd5b600086815260208181526040808320546001600160401b03168352600a8252808320898452909152908190209051849184916107e19089908990612967565b908152602001604051809103902091826107fc9291906129ff565b50848460405161080d929190612967565b6040518091039020867f448bc014f1536726cf8d54ff3d6481ed3cbc683c2591ca204274009afa09b1a18787878760405161084b9493929190612ae7565b60405180910390a3505050505050565b600082815260208181526040808320546001600160401b031683526007825280832085845282528083206001600160e01b0319851684529091528120546001600160a01b031680156108ae579050610580565b60006108b985610d98565b90506001600160a01b0381166108d457600092505050610580565b6040516301ffc9a760e01b602482015260009081906001600160a01b0384169060440160408051601f198184030181529181526020820180516001600160e01b03166301ffc9a760e01b1790525161092c9190612922565b600060405180830381855afa9150503d8060008114610967576040519150601f19603f3d011682016040523d82523d6000602084013e61096c565b606091505b509150915081158061097f575060208151105b806109a9575080601f8151811061099857610998612b19565b01602001516001600160f81b031916155b156109bb576000945050505050610580565b6040516001600160e01b0319871660248201526001600160a01b0384169060440160408051601f198184030181529181526020820180516001600160e01b03166301ffc9a760e01b17905251610a119190612922565b600060405180830381855afa9150503d8060008114610a4c576040519150601f19603f3d011682016040523d82523d6000602084013e610a51565b606091505b509092509050811580610a65575060208151105b80610a8f575080601f81518110610a7e57610a7e612b19565b01602001516001600160f81b031916155b15610aa1576000945050505050610580565b509095945050505050565b600082815260208181526040808320546001600160401b03168352600180835281842086855290925282206060915b848111610bc25780851615801590610b0b575060008181526020839052604081208054610b0790612977565b9050115b15610bba5780826000838152602001908152602001600020808054610b2f90612977565b80601f0160208091040260200160405190810160405280929190818152602001828054610b5b90612977565b8015610ba85780601f10610b7d57610100808354040283529160200191610ba8565b820191906000526020600020905b815481529060010190602001808311610b8b57829003601f168201915b50505050509050935093505050610bdb565b60011b610adb565b5060006040518060200160405280600081525092509250505b9250929050565b82610bec816116e1565b610bf557600080fd5b60408051808201825284815260208082018581526000888152808352848120546001600160401b031681526009835284812089825283528490209251835551600190920191909155815185815290810184905285917f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e4691015b60405180910390a250505050565b82610c86816116e1565b610c8f57600080fd5b600084815260208181526040808320546001600160401b03168352600382528083208784529091529020610cc48385836129ff565b50837fe379c1624ed7e714cc0937528a32359d69d5281337765313dba4e081b72d75788484604051610c6e929190612b2f565b80610d01816116e1565b610d0a57600080fd5b600082815260208190526040812080546001600160401b031691610d2d83612b43565b82546101009290920a6001600160401b03818102199093169183160217909155600084815260208181526040918290205491519190921681528492507fc6621ccb8f3f5a04bb6502154b2caf6adf5983fe76dfef1cfc9c42e3579db444910160405180910390a25050565b600080610da683603c6115f5565b90508051600003610dba5750600092915050565b610dc381611d21565b9392505050565b600083815260208181526040808320546001600160401b03168352600a825280832086845290915290819020905160609190610e099085908590612967565b90815260200160405180910390208054610e2290612977565b80601f0160208091040260200160405190810160405280929190818152602001828054610e4e90612977565b8015610e9b5780601f10610e7057610100808354040283529160200191610e9b565b820191906000526020600020905b815481529060010190602001808311610e7e57829003601f168201915b505050505090509392505050565b600081815260208181526040808320546001600160401b03168352600482528083208484529091529020805460609190610ee290612977565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0e90612977565b8015610f5b5780601f10610f3057610100808354040283529160200191610f5b565b820191906000526020600020905b815481529060010190602001808311610f3e57829003601f168201915b50505050509050919050565b83610f71816116e1565b610f7a57600080fd5b83610f86600182612954565b1615610f9157600080fd5b600085815260208181526040808320546001600160401b031683526001825280832088845282528083208784529091529020610fce8385836129ff565b50604051849086907faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe390600090a35050505050565b600081815260208181526040808320546001600160401b03168352600882528083208484529091529020805460609190610ee290612977565b82611046816116e1565b61104f57600080fd5b600084815260208181526040808320546001600160401b031683526008825280832087845290915290206110848385836129ff565b50837fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f78484604051610c6e929190612b2f565b826110c1816116e1565b6110ca57600080fd5b837f65412581168e88a1e60c6459d7f44ae83ad0832e670826c05a4e2476b57af75284846040516110fc9291906124c8565b60405180910390a2603c830361115357837f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd261113784611d21565b6040516001600160a01b03909116815260200160405180910390a25b600084815260208181526040808320546001600160401b03168352600282528083208784528252808320868452909152902061118f8382612b69565b5050505050565b6001600160a01b03821633036112055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084015b60405180910390fd5b336000818152600b602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b03821633036112c95760405162461bcd60e51b815260206004820181905260248201527f53657474696e672064656c65676174652073746174757320666f722073656c6660448201526064016111fc565b336000818152600c6020908152604080832087845282528083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519384529286917ff0ddb3b04746704017f9aa8bd728fcc2c1d11675041205350018915f5e4750a0910160405180910390a4505050565b600083815260208181526040808320546001600160401b03168352600582528083208684528252808320858452825280832061ffff851684529091529020805460609190610e2290612977565b6060610dc360008484611d40565b600081815260208181526040808320546001600160401b03168352600382528083208484529091529020805460609190610ee290612977565b826113dc816116e1565b6113e557600080fd5b600084815260208181526040808320546001600160401b0316808452600483528184208885529092528220805491929161141e90612977565b80601f016020809104026020016040519081016040528092919081815260200182805461144a90612977565b80156114975780601f1061146c57610100808354040283529160200191611497565b820191906000526020600020905b81548152906001019060200180831161147a57829003601f168201915b505050506001600160401b03841660009081526004602090815260408083208b845290915290209192506114ce90508587836129ff565b50857f8f15ed4b723ef428f250961da8315675b507046737e19319fc1a4d81bfe87f8582878760405161150393929190612c28565b60405180910390a2505050505050565b8161151d816116e1565b61152657600080fd5b61153583603c61038c85611f0f565b505050565b6060611547848484611d40565b949350505050565b82611559816116e1565b61156257600080fd5b600084815260208181526040808320546001600160401b031683526007825280832087845282528083206001600160e01b031987168085529083529281902080546001600160a01b0319166001600160a01b038716908117909155905190815286917f7c69f06bea0bdef565b709e93a147836b0063ba2dd89f02d0b7e8d931e6a6daa910160405180910390a350505050565b600082815260208181526040808320546001600160401b03168352600282528083208584528252808320848452909152902080546060919061163690612977565b80601f016020809104026020016040519081016040528092919081815260200182805461166290612977565b80156116af5780601f10611684576101008083540402835291602001916116af565b820191906000526020600020905b81548152906001019060200180831161169257829003601f168201915b5050505050905092915050565b60006001600160e01b03198216631674750f60e21b1480610580575061058082611f3f565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806117425750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b1561174f57506001919050565b6040516302571be360e01b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be390602401602060405180830381865afa1580156117b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117db9190612c58565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036118a2576040516331a9108f60e11b8152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa15801561187b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189f9190612c58565b90505b6001600160a01b0381163314806118dc57506001600160a01b0381166000908152600b6020908152604080832033845290915290205460ff165b80610dc357506001600160a01b0381166000908152600c60209081526040808320868452825280832033845290915290205460ff16610dc3565b6119646040518060e001604052806060815260200160008152602001600061ffff168152602001600061ffff168152602001600063ffffffff16815260200160008152602001600081525090565b82815260c0810182905261058081611c39565b602081015181516060916105809161198f9082611f64565b84519190611fbe565b60a081015160c08201516060916105809161198f908290612954565b600081518351148015610dc35750610dc38360008460008751612034565b8651602088012060006119e6878787611fbe565b90508315611b0d576001600160401b03831660009081526005602090815260408083208d84528252808320858452825280832061ffff8c16845290915290208054611a3090612977565b159050611a8e576001600160401b03831660009081526006602090815260408083208d845282528083208584529091528120805461ffff1691611a7283612c75565b91906101000a81548161ffff021916908361ffff160217905550505b6001600160401b03831660009081526005602090815260408083208d84528252808320858452825280832061ffff8c1684529091528120611ace91612297565b897f03528ed0c2a3ebc993b12ce3c16bb382f9c7d88ef7d8a1bf290eaf35955a12078a8a604051611b00929190612c93565b60405180910390a2610783565b6001600160401b03831660009081526005602090815260408083208d84528252808320858452825280832061ffff8c16845290915290208054611b4f90612977565b9050600003611baf576001600160401b03831660009081526006602090815260408083208d845282528083208584529091528120805461ffff1691611b9383612cb9565b91906101000a81548161ffff021916908361ffff160217905550505b6001600160401b03831660009081526005602090815260408083208d84528252808320858452825280832061ffff8c1684529091529020611bf08282612b69565b50897f52a608b3303a48862d07a73d82fa221318c0027fbbcfb1b2329bface3f19ff2b8a8a84604051611c2593929190612cd0565b60405180910390a250505050505050505050565b60c08101516020820181905281515111611c505750565b6000611c6482600001518360200151611f64565b8260200151611c739190612cff565b8251909150611c829082612057565b61ffff166040830152611c96600282612cff565b8251909150611ca59082612057565b61ffff166060830152611cb9600282612cff565b8251909150611cc8908261207f565b63ffffffff166080830152611cde600482612cff565b8251909150600090611cf09083612057565b61ffff169050611d01600283612cff565b60a084018190529150611d148183612cff565b60c0909301929092525050565b60008151601414611d3157600080fd5b5060200151600160601b900490565b6060816001600160401b03811115611d5a57611d5a61258b565b604051908082528060200260200182016040528015611d8d57816020015b6060815260200190600190039081611d785790505b50905060005b82811015611f07578415611e4f576000848483818110611db557611db5612b19565b9050602002810190611dc79190612d12565b611dd691602491600491612d58565b611ddf91612d82565b9050858114611e4d5760405162461bcd60e51b815260206004820152603460248201527f6d756c746963616c6c3a20416c6c207265636f726473206d7573742068617665604482015273040c240dac2e8c6d0d2dcce40dcc2dacad0c2e6d60631b60648201526084016111fc565b505b60008030868685818110611e6557611e65612b19565b9050602002810190611e779190612d12565b604051611e85929190612967565b600060405180830381855af49150503d8060008114611ec0576040519150601f19603f3d011682016040523d82523d6000602084013e611ec5565b606091505b509150915081611ed457600080fd5b80848481518110611ee757611ee7612b19565b602002602001018190525050508080611eff90612da0565b915050611d93565b509392505050565b604080516014808252818301909252606091602082018180368337505050600160601b9290920260208301525090565b60006001600160e01b0319821663c869023360e01b14806105805750610580826120a9565b6000815b83518110611f7857611f78612db9565b6000611f8485836120ce565b60ff169050611f94816001612cff565b611f9e9083612cff565b915080600003611fae5750611fb4565b50611f68565b6115478382612954565b8251606090611fcd8385612cff565b1115611fd857600080fd5b6000826001600160401b03811115611ff257611ff261258b565b6040519080825280601f01601f19166020018201604052801561201c576020820181803683370190505b50905060208082019086860101610aa18282876120f2565b6000612041848484612148565b61204c878785612148565b149695505050505050565b8151600090612067836002612cff565b111561207257600080fd5b50016002015161ffff1690565b815160009061208f836004612cff565b111561209a57600080fd5b50016004015163ffffffff1690565b60006001600160e01b0319821663691f343160e01b148061058057506105808261216c565b60008282815181106120e2576120e2612b19565b016020015160f81c905092915050565b6020811061212a5781518352612109602084612cff565b9250612116602083612cff565b9150612123602082612954565b90506120f2565b905182516020929092036101000a6000190180199091169116179052565b82516000906121578385612cff565b111561216257600080fd5b5091016020012090565b60006001600160e01b031982166304928c6760e21b148061058057506105808260006001600160e01b0319821663547d2b4160e11b14806121bd57506001600160e01b03198216635c98042b60e01b145b8061058057506105808260006001600160e01b0319821663bc1c58d160e01b148061058057506105808260006001600160e01b03198216631d9dabef60e11b148061221857506001600160e01b031982166378e5bf0360e11b145b8061058057506105808260006001600160e01b03198216631101d5ab60e11b148061058057506105808260006001600160e01b0319821663d700ff3360e01b148061058057506105808260006001600160e01b03198216634fbf043360e01b148061058057506301ffc9a760e01b6001600160e01b0319831614610580565b5080546122a390612977565b6000825580601f106122b3575050565b601f0160209004906000526020600020908101906122d191906122d4565b50565b5b808211156122e957600081556001016122d5565b5090565b80356001600160e01b03198116811461230557600080fd5b919050565b60006020828403121561231c57600080fd5b610dc3826122ed565b60008083601f84011261233757600080fd5b5081356001600160401b0381111561234e57600080fd5b602083019150836020828501011115610bdb57600080fd5b60008060006040848603121561237b57600080fd5b8335925060208401356001600160401b0381111561239857600080fd5b6123a486828701612325565b9497909650939450505050565b6000806000806000606086880312156123c957600080fd5b8535945060208601356001600160401b03808211156123e757600080fd5b6123f389838a01612325565b9096509450604088013591508082111561240c57600080fd5b5061241988828901612325565b969995985093965092949392505050565b6000806040838503121561243d57600080fd5b8235915061244d602084016122ed565b90509250929050565b6000806040838503121561246957600080fd5b50508035926020909101359150565b60005b8381101561249357818101518382015260200161247b565b50506000910152565b600081518084526124b4816020860160208601612478565b601f01601f19169290920160200192915050565b828152604060208201526000611547604083018461249c565b6000806000606084860312156124f657600080fd5b505081359360208301359350604090920135919050565b60006020828403121561251f57600080fd5b5035919050565b602081526000610dc3602083018461249c565b6000806000806060858703121561254f57600080fd5b843593506020850135925060408501356001600160401b0381111561257357600080fd5b61257f87828801612325565b95989497509550505050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156125b657600080fd5b833592506020840135915060408401356001600160401b03808211156125db57600080fd5b818601915086601f8301126125ef57600080fd5b8135818111156126015761260161258b565b604051601f8201601f19908116603f011681019083821181831017156126295761262961258b565b8160405282815289602084870101111561264257600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b6001600160a01b03811681146122d157600080fd5b8035801515811461230557600080fd5b6000806040838503121561269c57600080fd5b82356126a781612664565b915061244d60208401612679565b6000806000606084860312156126ca57600080fd5b8335925060208401356126dc81612664565b91506126ea60408501612679565b90509250925092565b60008060006060848603121561270857600080fd5b8335925060208401359150604084013561ffff8116811461272857600080fd5b809150509250925092565b60008060006060848603121561274857600080fd5b833561275381612664565b925060208401359150604084013561272881612664565b60008083601f84011261277c57600080fd5b5081356001600160401b0381111561279357600080fd5b6020830191508360208260051b8501011115610bdb57600080fd5b600080602083850312156127c157600080fd5b82356001600160401b038111156127d757600080fd5b6127e38582860161276a565b90969095509350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561284457603f1988860301845261283285835161249c565b94509285019290850190600101612816565b5092979650505050505050565b6000806040838503121561286457600080fd5b82359150602083013561287681612664565b809150509250929050565b60008060006040848603121561289657600080fd5b8335925060208401356001600160401b038111156128b357600080fd5b6123a48682870161276a565b6000806000606084860312156128d457600080fd5b833592506128e4602085016122ed565b9150604084013561272881612664565b6000806040838503121561290757600080fd5b823561291281612664565b9150602083013561287681612664565b60008251612934818460208701612478565b9190910192915050565b634e487b7160e01b600052601160045260246000fd5b818103818111156105805761058061293e565b8183823760009101908152919050565b600181811c9082168061298b57607f821691505b6020821081036129ab57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561153557600081815260208120601f850160051c810160208610156129d85750805b601f850160051c820191505b818110156129f7578281556001016129e4565b505050505050565b6001600160401b03831115612a1657612a1661258b565b612a2a83612a248354612977565b836129b1565b6000601f841160018114612a5e5760008515612a465750838201355b600019600387901b1c1916600186901b17835561118f565b600083815260209020601f19861690835b82811015612a8f5786850135825560209485019460019092019101612a6f565b5086821015612aac5760001960f88860031b161c19848701351681555b505060018560011b0183555050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b604081526000612afb604083018688612abe565b8281036020840152612b0e818587612abe565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b602081526000611547602083018486612abe565b60006001600160401b03808316818103612b5f57612b5f61293e565b6001019392505050565b81516001600160401b03811115612b8257612b8261258b565b612b9681612b908454612977565b846129b1565b602080601f831160018114612bcb5760008415612bb35750858301515b600019600386901b1c1916600185901b1785556129f7565b600085815260208120601f198616915b82811015612bfa57888601518255948401946001909101908401612bdb565b5085821015612c185787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b604081526000612c3b604083018661249c565b8281036020840152612c4e818587612abe565b9695505050505050565b600060208284031215612c6a57600080fd5b8151610dc381612664565b600061ffff821680612c8957612c8961293e565b6000190192915050565b604081526000612ca6604083018561249c565b905061ffff831660208301529392505050565b600061ffff808316818103612b5f57612b5f61293e565b606081526000612ce3606083018661249c565b61ffff851660208401528281036040840152612c4e818561249c565b808201808211156105805761058061293e565b6000808335601e19843603018112612d2957600080fd5b8301803591506001600160401b03821115612d4357600080fd5b602001915036819003821315610bdb57600080fd5b60008085851115612d6857600080fd5b83861115612d7557600080fd5b5050820193919092039150565b8035602083101561058057600019602084900360031b1b1692915050565b600060018201612db257612db261293e565b5060010190565b634e487b7160e01b600052600160045260246000fdfea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class PublicResolver__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_ens, wrapperAddress, _trustedETHController, _trustedReverseRegistrar, overrides) {
        return super.getDeployTransaction(_ens, wrapperAddress, _trustedETHController, _trustedReverseRegistrar, overrides || {});
    }
    deploy(_ens, wrapperAddress, _trustedETHController, _trustedReverseRegistrar, overrides) {
        return super.deploy(_ens, wrapperAddress, _trustedETHController, _trustedReverseRegistrar, overrides || {});
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
exports.PublicResolver__factory = PublicResolver__factory;
PublicResolver__factory.bytecode = _bytecode;
PublicResolver__factory.abi = _abi;
