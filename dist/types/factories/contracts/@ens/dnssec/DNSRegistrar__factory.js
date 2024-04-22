"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSRegistrar__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract DNSSEC",
                name: "_dnssec",
                type: "address",
            },
            {
                internalType: "contract PublicSuffixList",
                name: "_suffixes",
                type: "address",
            },
            {
                internalType: "contract ENS",
                name: "_ens",
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
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "dnsname",
                type: "bytes",
            },
        ],
        name: "Claim",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "oracle",
                type: "address",
            },
        ],
        name: "NewOracle",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "suffixes",
                type: "address",
            },
        ],
        name: "NewPublicSuffixList",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [],
        name: "oracle",
        outputs: [
            {
                internalType: "contract DNSSEC",
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
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature[]",
                name: "input",
                type: "tuple[]",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
        ],
        name: "proveAndClaim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "name",
                type: "bytes",
            },
            {
                components: [
                    {
                        internalType: "bytes",
                        name: "rrset",
                        type: "bytes",
                    },
                    {
                        internalType: "bytes",
                        name: "sig",
                        type: "bytes",
                    },
                ],
                internalType: "struct DNSSEC.RRSetWithSignature[]",
                name: "input",
                type: "tuple[]",
            },
            {
                internalType: "bytes",
                name: "proof",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "resolver",
                type: "address",
            },
            {
                internalType: "address",
                name: "addr",
                type: "address",
            },
        ],
        name: "proveAndClaimWithResolver",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract DNSSEC",
                name: "_dnssec",
                type: "address",
            },
        ],
        name: "setOracle",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "contract PublicSuffixList",
                name: "_suffixes",
                type: "address",
            },
        ],
        name: "setPublicSuffixList",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "suffixes",
        outputs: [
            {
                internalType: "contract PublicSuffixList",
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
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b5060405162001f1438038062001f14833981016040819052620000349162000118565b600080546001600160a01b0319166001600160a01b0385169081179091556040519081527fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e9060200160405180910390a1600280546001600160a01b0319166001600160a01b0384169081179091556040519081527f9176b7f47e4504df5e5516c99d90d82ac7cbd49cc77e7f22ba2ac2f2e3a3eba89060200160405180910390a1600180546001600160a01b0319166001600160a01b0392909216919091179055506200016c9050565b6001600160a01b03811681146200011557600080fd5b50565b6000806000606084860312156200012e57600080fd5b83516200013b81620000ff565b60208501519093506200014e81620000ff565b60408501519092506200016181620000ff565b809150509250925092565b611d98806200017c6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80633f15457f116100665780633f15457f146101135780637adbf973146101265780637dc0d1d0146101395780638bbedf751461014c578063be27b22c1461015f57600080fd5b806301ffc9a7146100985780631ecfc411146100c0578063224199c2146100d557806330349ebe146100e8575b600080fd5b6100ab6100a6366004611649565b610172565b60405190151581526020015b60405180910390f35b6100d36100ce36600461168b565b6101a9565b005b6100d36100e3366004611890565b6102eb565b6002546100fb906001600160a01b031681565b6040516001600160a01b0390911681526020016100b7565b6001546100fb906001600160a01b031681565b6100d361013436600461168b565b610668565b6000546100fb906001600160a01b031681565b6100d361015a366004611940565b6107a1565b6100d361016d3660046119c8565b61082b565b60006001600160e01b031982166301ffc9a760e01b14806101a357506001600160e01b031982166317d8f49b60e01b145b92915050565b6001546040516302571be360e01b8152600060048201819052916001600160a01b0316906302571be390602401602060405180830381865afa1580156101f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102179190611a2c565b90506000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610259573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027d9190611a2c565b9050336001600160a01b0382161461029457600080fd5b600280546001600160a01b0319166001600160a01b0385169081179091556040519081527f9176b7f47e4504df5e5516c99d90d82ac7cbd49cc77e7f22ba2ac2f2e3a3eba8906020015b60405180910390a1505050565b6000546040516321ae60b160e11b81526001600160a01b039091169063435cc1629061031d9087908790600401611a99565b6000604051808303816000875af115801561033c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103649190810190611b32565b9250600080600061037588876108ca565b91945092509050336001600160a01b038216146103ef5760405162461bcd60e51b815260206004820152602d60248201527f4f6e6c79206f776e65722063616e2063616c6c2070726f7665416e64436c616960448201526c36abb4ba342932b9b7b63b32b960991b60648201526084015b60405180910390fd5b6001600160a01b038416156105e1576001600160a01b0385166104635760405162461bcd60e51b815260206004820152602660248201527f43616e6e6f74207365742061646472206966207265736f6c766572206973206e6044820152651bdd081cd95d60d21b60648201526084016103e6565b6001546040516305ef2c7f60e41b815260048101859052602481018490523060448201526001600160a01b0387811660648301526000608483015290911690635ef2c7f09060a401600060405180830381600087803b1580156104c557600080fd5b505af11580156104d9573d6000803e3d6000fd5b50505050600083836040516020016104fb929190918252602082015260400190565b60408051808303601f1901815290829052805160209091012062d5fa2b60e81b8252600482018190526001600160a01b03878116602484015290925087169063d5fa2b0090604401600060405180830381600087803b15801561055d57600080fd5b505af1158015610571573d6000803e3d6000fd5b5050600154604051635b0fc9c360e01b8152600481018590526001600160a01b0386811660248301529091169250635b0fc9c39150604401600060405180830381600087803b1580156105c357600080fd5b505af11580156105d7573d6000803e3d6000fd5b505050505061065e565b6001546040516305ef2c7f60e41b815260048101859052602481018490526001600160a01b03838116604483015287811660648301526000608483015290911690635ef2c7f09060a401600060405180830381600087803b15801561064557600080fd5b505af1158015610659573d6000803e3d6000fd5b505050505b5050505050505050565b6001546040516302571be360e01b8152600060048201819052916001600160a01b0316906302571be390602401602060405180830381865afa1580156106b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d69190611a2c565b90506000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610718573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073c9190611a2c565b9050336001600160a01b0382161461075357600080fd5b600080546001600160a01b0319166001600160a01b0385169081179091556040519081527fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e906020016102de565b6000546040516321ae60b160e11b81526001600160a01b039091169063435cc162906107d39085908590600401611a99565b6000604051808303816000875af11580156107f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261081a9190810190611b32565b9050610826838261082b565b505050565b600080600061083a85856108ca565b6001546040516306ab592360e01b815260048101859052602481018490526001600160a01b03808416604483015294975092955090935091909116906306ab5923906064016020604051808303816000875af115801561089e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c29190611ba9565b505050505050565b60008080806108d98682610a85565b60ff1690506108ea86600183610aa9565b9250600061091d6108fc836001611bd8565b6001848a5161090b9190611beb565b6109159190611beb565b899190610acd565b6002546040516327c482cf60e11b81529192506001600160a01b031690634f89059e9061094e908490600401611bfe565b602060405180830381865afa15801561096b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098f9190611c11565b6109e75760405162461bcd60e51b815260206004820152602360248201527f506172656e74206e616d65206d7573742062652061207075626c6963207375666044820152620ccd2f60eb1b60648201526084016103e6565b6109f2816000610b4f565b600054909550610a0c906001600160a01b03168888610e40565b5060408051602081018890529081018690529093506001600160a01b03841690606001604051602081830303815290604052805190602001207fa2e66ce20e6fb2c4f61339c364ad79f15160cf5307230c8bc4d628adbca2ba3989604051610a749190611bfe565b60405180910390a350509250925092565b6000828281518110610a9957610a99611c33565b016020015160f81c905092915050565b8251600090610ab88385611bd8565b1115610ac357600080fd5b5091016020012090565b8251606090610adc8385611bd8565b1115610ae757600080fd5b60008267ffffffffffffffff811115610b0257610b026116a8565b6040519080825280601f01601f191660200182016040528015610b2c576020820181803683370190505b50905060208082019086860101610b44828287611072565b509095945050505050565b600080610b5c8484610a85565b60ff16905080600003610b735750600090506101a3565b6000610b9385610b838487611bd8565b610b8e906001611bd8565b610b4f565b90506000610bad610ba5866001611bd8565b879085610aa9565b604080516020810185905290810182905290915060600160408051808303601f190181529082905280516020909101206001546302571be360e01b8352600483018290529095506000916001600160a01b03909116906302571be390602401602060405180830381865afa158015610c29573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c4d9190611a2c565b90506001600160a01b0381161580610c6d57506001600160a01b03811630145b610ccc5760405162461bcd60e51b815260206004820152602a60248201527f43616e6e6f7420656e61626c652061206e616d65206f776e656420627920736f6044820152696d656f6e6520656c736560b01b60648201526084016103e6565b6001600160a01b0381163014610e365782610db8576001546040516302571be360e01b8152600060048201819052916001600160a01b0316906302571be390602401602060405180830381865afa158015610d2b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4f9190611a2c565b60405163232e3b3b60e21b8152600481018590523060248201529091506001600160a01b03821690638cb8ecec90604401600060405180830381600087803b158015610d9a57600080fd5b505af1158015610dae573d6000803e3d6000fd5b5050505050610e36565b6001546040516306ab592360e01b815260048101859052602481018490523060448201526001600160a01b03909116906306ab5923906064016020604051808303816000875af1158015610e10573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e349190611ba9565b505b5050505092915050565b600080610e60604051806040016040528060608152602001600081525090565b610e7885516005610e719190611bd8565b82906110c8565b50604080518082019091526005815264045f656e7360d81b6020820152610ea090829061112d565b50610eab818661112d565b50805160405163021e646f60e21b815260009182916001600160a01b038a169163087991bc91610ee091601091600401611c49565b606060405180830381865afa158015610efd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f219190611c7f565b93509150506bffffffffffffffffffffffff198216158015610f4257508551155b15610f56576000809450945050505061106a565b855160208701206bffffffffffffffffffffffff19838116911614610f7a57600080fd5b6000610f86878261115b565b90505b8051516020820151101561105e57610fb0816080015183610faa9190611cd8565b426111bc565b6110225760405162461bcd60e51b815260206004820152603c60248201527f444e53207265636f7264206973207374616c653b2072656672657368206f722060448201527f64656c657465206974206265666f72652070726f63656564696e672e0000000060648201526084016103e6565b600080611033898460a001516111d5565b92509050811561104e5796506001955061106a945050505050565b505061105981611248565b610f89565b50600080945094505050505b935093915050565b602081106110aa5781518352611089602084611bd8565b9250611096602083611bd8565b91506110a3602082611beb565b9050611072565b905182516020929092036101000a6000190180199091169116179052565b6040805180820190915260608152600060208201526110e8602083611cfc565b15611110576110f8602083611cfc565b611103906020611beb565b61110d9083611bd8565b91505b506020828101829052604080518085526000815290920101905290565b60408051808201909152606081526000602082015261115483846000015151848551611330565b9392505050565b6111a96040518060e001604052806060815260200160008152602001600061ffff168152602001600061ffff168152602001600063ffffffff16815260200160008152602001600081525090565b82815260c081018290526101a381611248565b6000806111c98385611d1e565b60030b12159392505050565b6000805b835183101561123a5760006111ee8585610a85565b60ff1690506111fe600185611bd8565b935060008061120e87878561141a565b92509050811561122657935060019250611241915050565b6112308387611bd8565b95505050506111d9565b5060009050805b9250929050565b60c0810151602082018190528151511161125f5750565b600061127382600001518360200151611476565b82602001516112829190611bd8565b825190915061129190826114d8565b61ffff1660408301526112a5600282611bd8565b82519091506112b490826114d8565b61ffff1660608301526112c8600282611bd8565b82519091506112d79082611500565b63ffffffff1660808301526112ed600482611bd8565b82519091506000906112ff90836114d8565b61ffff169050611310600283611bd8565b60a0840181905291506113238183611bd8565b60c0909301929092525050565b604080518082019091526060815260006020820152825182111561135357600080fd5b60208501516113628386611bd8565b11156113955761139585611385876020015187866113809190611bd8565b61152a565b611390906002611d45565b611541565b6000808651805187602083010193508088870111156113b45787860182525b505050602084015b602084106113f457805182526113d3602083611bd8565b91506113e0602082611bd8565b90506113ed602085611beb565b93506113bc565b51815160001960208690036101000a019081169019919091161790525083949350505050565b6000806114278585611500565b63ffffffff1663613d3078146114425750600090508061106a565b602c8310156114565750600090508061106a565b61146a85611465866004611bd8565b61155e565b91509150935093915050565b6000815b8351811061148a5761148a611d5c565b60006114968583610a85565b60ff1690506114a6816001611bd8565b6114b09083611bd8565b9150806000036114c057506114c6565b5061147a565b6114d08382611beb565b949350505050565b81516000906114e8836002611bd8565b11156114f357600080fd5b50016002015161ffff1690565b8151600090611510836004611bd8565b111561151b57600080fd5b50016004015163ffffffff1690565b60008183111561153b5750816101a3565b50919050565b815161154d83836110c8565b50611558838261112d565b50505050565b60008060288385516115709190611beb565b101561158157506000905080611241565b6000835b611590856028611bd8565b81101561163d5760049190911b9060006115aa8783610a85565b60ff169050603081101580156115c05750603a81105b156115d9576115d0603082611beb565b8317925061162a565b604181101580156115ea5750604781105b156115fa576115d0603782611beb565b6061811015801561160b5750606781105b1561161b576115d0605782611beb565b60008094509450505050611241565b508061163581611d72565b915050611585565b50946001945092505050565b60006020828403121561165b57600080fd5b81356001600160e01b03198116811461115457600080fd5b6001600160a01b038116811461168857600080fd5b50565b60006020828403121561169d57600080fd5b813561115481611673565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156116e1576116e16116a8565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611710576117106116a8565b604052919050565b600067ffffffffffffffff821115611732576117326116a8565b50601f01601f191660200190565b600082601f83011261175157600080fd5b813561176461175f82611718565b6116e7565b81815284602083860101111561177957600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f8301126117a757600080fd5b8135602067ffffffffffffffff808311156117c4576117c46116a8565b8260051b6117d38382016116e7565b93845285810183019383810190888611156117ed57600080fd5b84880192505b858310156118845782358481111561180b5760008081fd5b88016040818b03601f19018113156118235760008081fd5b61182b6116be565b878301358781111561183d5760008081fd5b61184b8d8a83870101611740565b8252509082013590868211156118615760008081fd5b61186f8c8984860101611740565b818901528452505091840191908401906117f3565b98975050505050505050565b600080600080600060a086880312156118a857600080fd5b853567ffffffffffffffff808211156118c057600080fd5b6118cc89838a01611740565b965060208801359150808211156118e257600080fd5b6118ee89838a01611796565b9550604088013591508082111561190457600080fd5b5061191188828901611740565b935050606086013561192281611673565b9150608086013561193281611673565b809150509295509295909350565b60008060006060848603121561195557600080fd5b833567ffffffffffffffff8082111561196d57600080fd5b61197987838801611740565b9450602086013591508082111561198f57600080fd5b61199b87838801611796565b935060408601359150808211156119b157600080fd5b506119be86828701611740565b9150509250925092565b600080604083850312156119db57600080fd5b823567ffffffffffffffff808211156119f357600080fd5b6119ff86838701611740565b93506020850135915080821115611a1557600080fd5b50611a2285828601611740565b9150509250929050565b600060208284031215611a3e57600080fd5b815161115481611673565b60005b83811015611a64578181015183820152602001611a4c565b50506000910152565b60008151808452611a85816020860160208601611a49565b601f01601f19169290920160200192915050565b6000604080830181845280865180835260608601915060608160051b8701019250602080890160005b83811015611b1257888603605f1901855281518051888852611ae689890182611a6d565b9185015188830389870152919050611afe8183611a6d565b975050509382019390820190600101611ac2565b505086840381880152505050611b288186611a6d565b9695505050505050565b600060208284031215611b4457600080fd5b815167ffffffffffffffff811115611b5b57600080fd5b8201601f81018413611b6c57600080fd5b8051611b7a61175f82611718565b818152856020838501011115611b8f57600080fd5b611ba0826020830160208601611a49565b95945050505050565b600060208284031215611bbb57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156101a3576101a3611bc2565b818103818111156101a3576101a3611bc2565b6020815260006111546020830184611a6d565b600060208284031215611c2357600080fd5b8151801515811461115457600080fd5b634e487b7160e01b600052603260045260246000fd5b61ffff831681526040602082015260006114d06040830184611a6d565b805163ffffffff81168114611c7a57600080fd5b919050565b600080600060608486031215611c9457600080fd5b611c9d84611c66565b9250611cab60208501611c66565b915060408401516bffffffffffffffffffffffff1981168114611ccd57600080fd5b809150509250925092565b63ffffffff818116838216019080821115611cf557611cf5611bc2565b5092915050565b600082611d1957634e487b7160e01b600052601260045260246000fd5b500690565b600382810b9082900b03637fffffff198112637fffffff821317156101a3576101a3611bc2565b80820281158282048414176101a3576101a3611bc2565b634e487b7160e01b600052600160045260246000fd5b600060018201611d8457611d84611bc2565b506001019056fea164736f6c6343000811000a";
const isSuperArgs = (xs) => xs.length > 1;
class DNSRegistrar__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(_dnssec, _suffixes, _ens, overrides) {
        return super.getDeployTransaction(_dnssec, _suffixes, _ens, overrides || {});
    }
    deploy(_dnssec, _suffixes, _ens, overrides) {
        return super.deploy(_dnssec, _suffixes, _ens, overrides || {});
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
exports.DNSRegistrar__factory = DNSRegistrar__factory;
DNSRegistrar__factory.bytecode = _bytecode;
DNSRegistrar__factory.abi = _abi;
