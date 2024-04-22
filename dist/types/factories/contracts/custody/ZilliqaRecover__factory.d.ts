import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { ZilliqaRecover, ZilliqaRecoverInterface } from "../../../contracts/custody/ZilliqaRecover";
declare type ZilliqaRecoverConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ZilliqaRecover__factory extends ContractFactory {
    constructor(...args: ZilliqaRecoverConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ZilliqaRecover & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ZilliqaRecover__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b611c80806100ed6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806371017a54116100a25780639e32d364116100715780639e32d36414610260578063a424740014610287578063dd6b9e221461029a578063e1c4b65a146102ad578063e35a14e5146102c057600080fd5b806371017a54146102145780637b103999146102275780638f0dbd251461023a5780639810b6951461024d57600080fd5b8063485cc955116100de578063485cc95514610197578063572b6c05146101aa57806358884432146101d65780636ccbae5f1461020157600080fd5b8063150b7a02146101105780631694116d146101415780631bf7e13e146101565780631c351a9d14610176575b600080fd5b61012361011e3660046114ae565b6102e9565b6040516001600160e01b031990911681526020015b60405180910390f35b61015461014f366004611566565b61037b565b005b6101696101643660046115d1565b610422565b6040516101389190611692565b6101896101843660046116a5565b6104ee565b604051908152602001610138565b6101546101a53660046116fc565b6105df565b6101c66101b8366004611735565b6001600160a01b0316301490565b6040519015158152602001610138565b6067546101e9906001600160a01b031681565b6040516001600160a01b039091168152602001610138565b61018961020f366004611752565b61071a565b6101e961022236600461176b565b610774565b6066546101e9906001600160a01b031681565b61015461024836600461178d565b6107b5565b6101e961025b36600461176b565b61082a565b6101897fd81bbfcee722494b885e891546eeac23d0eedcd44038d7a2f6ef9ec2f9e0d23981565b6101c66102953660046115d1565b610886565b6101c66102a83660046117ce565b6108d1565b6101546102bb366004611816565b610953565b6101e96102ce366004611752565b6000908152606560205260409020546001600160a01b031690565b6066546000906001600160a01b0316610300610a86565b6001600160a01b031614158061032b57506000848152606560205260409020546001600160a01b0316155b156103695783610339610a86565b60405163634afa0d60e01b815260048101929092526001600160a01b031660248201526044015b60405180910390fd5b50630a85bd0160e11b95945050505050565b82826103878282610774565b6001600160a01b0316610398610a86565b6001600160a01b0316146103c957604051632cd9b44d60e11b81526004810183905260248101829052604401610360565b60006103d5868661082a565b905060005b87811015610417576104058989838181106103f7576103f7611858565b905060200201358387610a95565b8061040f81611884565b9150506103da565b505050505050505050565b606060005a9050610434858585610886565b61045157604051638baa579f60e01b815260040160405180910390fd5b6104e36104616020870187611735565b3060408801358461047560608b018b61189d565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8e018190048102820181019092528c815292508c91508b9081908401838280828437600092019190915250610bd092505050565b9150505b9392505050565b6067546000906001600160a01b031663aa271e1a61050a610a86565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561054e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057291906118e4565b158061058d575030610582610a86565b6001600160a01b0316145b156105bf5761059a610a86565b60405163e2c8c9d560e01b81526001600160a01b039091166004820152602401610360565b60006105cc858585610cb1565b90506105d781610ece565b949350505050565b600054610100900460ff16158080156105ff5750600054600160ff909116105b806106195750303b158015610619575060005460ff166001145b61067c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610360565b6000805460ff19166001179055801561069f576000805461ff0019166101001790555b606680546001600160a01b038086166001600160a01b03199283161790925560678054928516929091169190911790558015610715576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a83815602082015290810182905260009061076d906060016040516020818303038152906040528051906020012090565b5492915050565b6000808383604051602001610793929190918252602082015260400190565b60408051601f1981840301815291905280516020909101209150505b92915050565b82826107c18282610774565b6001600160a01b03166107d2610a86565b6001600160a01b03161461080357604051632cd9b44d60e11b81526004810183905260248101829052604401610360565b8561080d81610ece565b6108218761081b888961082a565b86610a95565b50505050505050565b60008060026108398585610eea565b6040516108469190611906565b602060405180830381855afa158015610863573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906105d79190611922565b60006105d7610894856119ab565b3085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610f7092505050565b6000805b8281101561094857846001600160a01b031661091e8585848181106108fc576108fc611858565b905060200201356000908152606560205260409020546001600160a01b031690565b6001600160a01b0316146109365760009150506104e7565b8061094081611884565b9150506108d5565b506001949350505050565b6067546001600160a01b031663aa271e1a61096c610a86565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156109b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d491906118e4565b15806109ef5750306109e4610a86565b6001600160a01b0316145b156109fc5761059a610a86565b60005b8181101561071557610a73838383818110610a1c57610a1c611858565b9050602002810190610a2e9190611a6e565b610a3c90602081019061189d565b858585818110610a4e57610a4e611858565b9050602002810190610a609190611a6e565b610a6e906020810190611735565b610cb1565b5080610a7e81611884565b9150506109ff565b6000610a906110b9565b905090565b6000838152606560205260409020546001600160a01b03838116911614610afa57600083815260656020526040908190205490516326995d8360e11b8152600481018590526001600160a01b0391821660248201529083166044820152606401610360565b6000838152606560205260409081902080546001600160a01b03191690556066549051632142170760e11b81523060048201526001600160a01b03838116602483015260448201869052909116906342842e0e90606401600060405180830381600087803b158015610b6b57600080fd5b505af1158015610b7f573d6000803e3d6000fd5b50505050806001600160a01b0316610b95610a86565b6001600160a01b0316847f9a471856befea1cabcd7fc8a1c4d70ea07b8ed2ee205cc361f932433542ef3fe60405160405180910390a4505050565b6060610bdb856110d7565b600080876001600160a01b031686610bf58b8a898961113d565b604051610c029190611906565b60006040518083038160008787f1925050503d8060008114610c40576040519150601f19603f3d011682016040523d82523d6000602084013e610c45565b606091505b509092509050610c56603f87611a9a565b5a11610c6457610c64611aae565b610ca482826040518060400160405280601a81526020017f42617365466f727761726465723a2043414c4c5f4641494c454400000000000081525061116d565b9998505050505050505050565b6000606060007fd81bbfcee722494b885e891546eeac23d0eedcd44038d7a2f6ef9ec2f9e0d2398686604051602001610ceb929190611ac4565b60405160208183030381529060405280519060200120604051602001610d1b929190918252602082015260400190565b60408051808303601f190181528282528051602090910120600280845260608401909252925060009190816020015b6060815260200190600190039081610d4a57905050905086868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250855186945090925015159050610dab57610dab611858565b6020026020010181905250604051806040016040528060038152602001621e9a5b60ea1b81525081600181518110610de557610de5611858565b60209081029190910181019190915260008381526065909152604080822080546001600160a01b0319166001600160a01b03898116919091179091556067549151635cd7e3b360e01b8152911691635cd7e3b391610e4e91309186918991829190600401611b29565b600060405180830381600087803b158015610e6857600080fd5b505af1158015610e7c573d6000803e3d6000fd5b50505050846001600160a01b0316827f08717469d38a4b02325ea6637978c7952f94d3d8fc7848994f618ddbf4d637f18989604051610ebc929190611b88565b60405180910390a35095945050505050565b303303610ee157610ede816111a6565b50565b610ede816110d7565b6060600082610efb60016020611bb7565b60ff1660208110610f0e57610f0e611858565b1a9050610f1c600282611bd0565b60ff1615610f2b576003610f2e565b60025b84604051602001610f5892919060f89290921b6001600160f81b0319168252600182015260210190565b60405160208183030381529060405291505092915050565b6040838101519051636ccbae5f60e01b8152600481019190915260009081903090636ccbae5f90602401602060405180830381865afa158015610fb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdb9190611922565b905060006110898660600151805190602001208688602001516040516020016110299392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b60408051601f1981840301815282825280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000084830152603c8085019190915282518085039091018152605c909301909152815191012090565b90508186602001511480156110af575085516110af906001600160a01b031682866111d0565b9695505050505050565b60003033036110cf575060331936013560601c90565b503390565b90565b604080517f1ee5d87a048b728f67073f282321992c260e5be4fa651d08665c5b4ee7a83815602082015290810182905260009060600160405160208183030381529060405280519060200120905061112c8190565b54611138906001611bf2565b905550565b606082858560405160200161115493929190611c05565b6040516020818303038152906040529050949350505050565b6060831561117c5750816104e7565b82511561118c5782518084602001fd5b8160405162461bcd60e51b81526004016103609190611692565b6111ae611312565b8114610ede57604051635637b6af60e11b815260048101829052602401610360565b60008060006111df8585611325565b909250905060008160048111156111f8576111f8611c44565b1480156112165750856001600160a01b0316826001600160a01b0316145b15611226576001925050506104e7565b600080876001600160a01b0316631626ba7e60e01b888860405160240161124e929190611c5a565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161128c9190611906565b600060405180830381855afa9150503d80600081146112c7576040519150601f19603f3d011682016040523d82523d6000602084013e6112cc565b606091505b50915091508180156112df575080516020145b801561130657508051630b135d3f60e11b906113049083016020908101908401611922565b145b98975050505050505050565b60003033036110d45750601f1936013590565b600080825160410361135b5760208301516040840151606085015160001a61134f8782858561136a565b94509450505050611363565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156113a1575060009050600361144e565b8460ff16601b141580156113b957508460ff16601c14155b156113ca575060009050600461144e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561141e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114475760006001925092505061144e565b9150600090505b94509492505050565b6001600160a01b0381168114610ede57600080fd5b60008083601f84011261147e57600080fd5b50813567ffffffffffffffff81111561149657600080fd5b60208301915083602082850101111561136357600080fd5b6000806000806000608086880312156114c657600080fd5b85356114d181611457565b945060208601356114e181611457565b935060408601359250606086013567ffffffffffffffff81111561150457600080fd5b6115108882890161146c565b969995985093965092949392505050565b60008083601f84011261153357600080fd5b50813567ffffffffffffffff81111561154b57600080fd5b6020830191508360208260051b850101111561136357600080fd5b60008060008060006080868803121561157e57600080fd5b853567ffffffffffffffff81111561159557600080fd5b6115a188828901611521565b909650945050602086013592506040860135915060608601356115c381611457565b809150509295509295909350565b6000806000604084860312156115e657600080fd5b833567ffffffffffffffff808211156115fe57600080fd5b908501906080828803121561161257600080fd5b9093506020850135908082111561162857600080fd5b506116358682870161146c565b9497909650939450505050565b60005b8381101561165d578181015183820152602001611645565b50506000910152565b6000815180845261167e816020860160208601611642565b601f01601f19169290920160200192915050565b6020815260006104e76020830184611666565b6000806000604084860312156116ba57600080fd5b833567ffffffffffffffff8111156116d157600080fd5b6116dd8682870161146c565b90945092505060208401356116f181611457565b809150509250925092565b6000806040838503121561170f57600080fd5b823561171a81611457565b9150602083013561172a81611457565b809150509250929050565b60006020828403121561174757600080fd5b81356104e781611457565b60006020828403121561176457600080fd5b5035919050565b6000806040838503121561177e57600080fd5b50508035926020909101359150565b600080600080608085870312156117a357600080fd5b84359350602085013592506040850135915060608501356117c381611457565b939692955090935050565b6000806000604084860312156117e357600080fd5b83356117ee81611457565b9250602084013567ffffffffffffffff81111561180a57600080fd5b61163586828701611521565b6000806020838503121561182957600080fd5b823567ffffffffffffffff81111561184057600080fd5b61184c85828601611521565b90969095509350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600182016118965761189661186e565b5060010190565b6000808335601e198436030181126118b457600080fd5b83018035915067ffffffffffffffff8211156118cf57600080fd5b60200191503681900382131561136357600080fd5b6000602082840312156118f657600080fd5b815180151581146104e757600080fd5b60008251611918818460208701611642565b9190910192915050565b60006020828403121561193457600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156119745761197461193b565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156119a3576119a361193b565b604052919050565b6000608082360312156119bd57600080fd5b6119c5611951565b82356119d081611457565b81526020838101358183015260408085013590830152606084013567ffffffffffffffff80821115611a0157600080fd5b9085019036601f830112611a1457600080fd5b813581811115611a2657611a2661193b565b611a38601f8201601f1916850161197a565b91508082523684828501011115611a4e57600080fd5b808484018584013760009082019093019290925250606082015292915050565b60008235603e1983360301811261191857600080fd5b634e487b7160e01b600052601260045260246000fd5b600082611aa957611aa9611a84565b500490565b634e487b7160e01b600052600160045260246000fd5b8183823760009101908152919050565b600081518084526020808501808196508360051b8101915082860160005b85811015611b1c578284038952611b0a848351611666565b98850198935090840190600101611af2565b5091979650505050505050565b6001600160a01b038616815260a060208201819052600090611b4d90830187611ad4565b8281036040840152611b5f8187611ad4565b90508281036060840152611b738186611ad4565b91505082151560808301529695505050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b60ff82811682821603908111156107af576107af61186e565b600060ff831680611be357611be3611a84565b8060ff84160691505092915050565b808201808211156107af576107af61186e565b60008451611c17818460208901611642565b60609490941b6bffffffffffffffffffffffff191691909301908152601481019190915260340192915050565b634e487b7160e01b600052602160045260246000fd5b8281526040602082015260006105d7604083018461166656fea164736f6c6343000811000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "InvalidForwardedToken";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "publicKeyX";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyY";
            readonly type: "bytes32";
        }];
        readonly name: "PublicKeyUnmatchSenderAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "SenderNotMinter";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "znsOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "receivedOwner";
            readonly type: "address";
        }];
        readonly name: "TokenOwnedByOtherZilAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "contractAddress";
            readonly type: "address";
        }];
        readonly name: "UnknownTokenReceived";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "oldAddress";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAddress";
            readonly type: "address";
        }];
        readonly name: "ZnsTokenClaimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "zilAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "label";
            readonly type: "string";
        }];
        readonly name: "ZnsTokenMinted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZIL_NODE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyX";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyY";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "newOwnerAddress";
            readonly type: "address";
        }];
        readonly name: "claim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyX";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyY";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "newOwnerAddress";
            readonly type: "address";
        }];
        readonly name: "claimAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "publicKeyX";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyY";
            readonly type: "bytes32";
        }];
        readonly name: "ethAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IForwarder.ForwardRequest";
            readonly name: "req";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "execute";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IUNSRegistry";
            readonly name: "registry_";
            readonly type: "address";
        }, {
            readonly internalType: "contract IMintingManager";
            readonly name: "mintingManager_";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_zilAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "isOwnedBy";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "forwarder";
            readonly type: "address";
        }];
        readonly name: "isTrustedForwarder";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "label";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "zilOwner";
            readonly type: "address";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "zilOwner";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "label";
                readonly type: "string";
            }];
            readonly internalType: "struct ZilliqaRecover.MintingToken[]";
            readonly name: "tokens";
            readonly type: "tuple[]";
        }];
        readonly name: "mintAll";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "mintingManager";
        readonly outputs: readonly [{
            readonly internalType: "contract IMintingManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "nonceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "registry";
        readonly outputs: readonly [{
            readonly internalType: "contract IUNSRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IForwarder.ForwardRequest";
            readonly name: "req";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "verify";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "publicKeyX";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "publicKeyY";
            readonly type: "bytes32";
        }];
        readonly name: "zilAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "znsOwnerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ZilliqaRecoverInterface;
    static connect(address: string, runner?: ContractRunner | null): ZilliqaRecover;
}
export {};
//# sourceMappingURL=ZilliqaRecover__factory.d.ts.map