import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { ProxyReaderV04, ProxyReaderV04Interface } from "../../../contracts/history/ProxyReaderV04";
declare type ProxyReaderV04ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProxyReaderV04__factory extends ContractFactory {
    constructor(...args: ProxyReaderV04ConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ProxyReaderV04 & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ProxyReaderV04__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612c48806100206000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c8063869b8884116100de578063b3f9e4cb11610097578063c15ae7cf11610071578063c15ae7cf14610410578063c87b56dd14610430578063e985e9c514610443578063ffa1ad741461045657600080fd5b8063b3f9e4cb146103c9578063b85afd28146103dc578063bebec6b4146103fd57600080fd5b8063869b8884146102ff57806391015f6b14610322578063933c051d14610344578063a3f4df7e14610366578063a81ce6f914610396578063ac9650d8146103a957600080fd5b8063430c20811161014b5780636352211e116101255780636352211e146102a5578063672b9f81146102b857806370a08231146102d95780637e37479e146102ec57600080fd5b8063430c20811461026a578063485cc9551461027d5780634f558e791461029257600080fd5b806301ffc9a71461019357806303280755146101bb578063081812fc146101de5780631bd8cc1a146102095780631be5e7ed14610229578063276fabb114610249575b600080fd5b6101a66101a1366004612046565b61047a565b60405190151581526020015b60405180910390f35b6101ce6101c93660046120b4565b6104e7565b6040516101b294939291906121a7565b6101f16101ec3660046121f0565b61050a565b6040516001600160a01b0390911681526020016101b2565b61021c6102173660046120b4565b61060f565b6040516101b29190612209565b61023c61023736600461221c565b61062e565b6040516101b29190612293565b61025c6102573660046122a6565b610759565b6040519081526020016101b2565b6101a66102783660046122ff565b6107cd565b61029061028b36600461232b565b6108e0565b005b6101a66102a03660046121f0565b610a30565b6101f16102b33660046121f0565b610a3b565b6102cb6102c6366004612364565b610a46565b6040516101b2929190612386565b61025c6102e73660046123ab565b610b76565b61025c6102fa3660046123ab565b610c74565b61031261030d3660046123c8565b610ce3565b6040516101b2949392919061250f565b6103356103303660046120b4565b610ed9565b6040516101b29392919061255c565b6103576103523660046123c8565b610ef9565b6040516101b293929190612588565b61023c604051806040016040528060118152602001702aa7299d10283937bc3c902932b0b232b960791b81525081565b6101f16103a43660046121f0565b611082565b6103bc6103b73660046122a6565b611150565b6040516101b291906125cb565b6101f16103d73660046121f0565b611244565b6103ef6103ea3660046120b4565b6112ca565b6040516101b292919061262d565b61023c61040b3660046123ab565b6114a6565b61042361041e3660046122a6565b61151a565b6040516101b29190612652565b61023c61043e3660046121f0565b6115c8565b6101a661045136600461232b565b61169a565b61023c60405180604001604052806005815260200164302e342e3160d81b81525081565b60006001600160e01b031982166362526e6360e01b14806104ab57506001600160e01b03198216636fa624af60e11b145b806104c657506001600160e01b031982166308da864d60e31b145b806104e157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000806060806104f88787876116e5565b93509350935093505b93509350935093565b600061051582611947565b61052157506000919050565b61052a826119df565b6105a15760665460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b602060405180830381865afa158015610578573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061059c9190612665565b6104e1565b60655460405163020604bf60e21b8152600481018490526001600160a01b039091169063081812fc906024015b602060405180830381865afa1580156105eb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e19190612665565b606061062461061e8486612712565b83611a26565b90505b9392505050565b6060610639826119df565b156106be57606554604051631be5e7ed60e01b81526001600160a01b0390911690631be5e7ed90610672908790879087906004016127ef565b600060405180830381865afa15801561068f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106b79190810190612858565b9050610627565b60006106c983611ba9565b90506001600160a01b0381163b1561075157604051631be5e7ed60e01b81526001600160a01b03821690631be5e7ed9061070b908890889088906004016127ef565b600060405180830381865afa92505050801561074957506040513d6000823e601f3d908101601f191682016040526107469190810190612858565b60015b156107515791505b509392505050565b60655460405163276fabb160e01b81526000916001600160a01b03169063276fabb19061078c908690869060040161291d565b602060405180830381865afa1580156107a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106279190612931565b60006107d882611947565b6107e4575060006104e1565b6107ed826119df565b61086b5760665460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c208190604401602060405180830381865afa158015610842573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610866919061294a565b610627565b60655460405163430c208160e01b81526001600160a01b038581166004830152602482018590529091169063430c208190604401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610627919061294a565b600054610100900460ff16158080156109005750600054600160ff909116105b8061091a5750303b15801561091a575060005460ff166001145b6109825760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156109a5576000805461ff0019166101001790555b606580546001600160a01b038086166001600160a01b03199283161790925560668054928516929091169190911790556109dd611c1c565b6109e5611c1c565b8015610a2b576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60006104e182611947565b60006104e182611c89565b606080610a52836119df565b15610ad85760655460405163672b9f8160e01b815260048101869052602481018590526001600160a01b039091169063672b9f8190604401600060405180830381865afa158015610aa7573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610acf919081019061296c565b91509150610b6f565b6000610ae384611ba9565b90506001600160a01b0381163b15610b6d5760405163672b9f8160e01b815260048101869052602481018590526001600160a01b0382169063672b9f8190604401600060405180830381865afa925050508015610b6257506040513d6000823e601f3d908101601f19168201604052610b5f919081019061296c565b60015b15610b6d5790935091505b505b9250929050565b6065546040516370a0823160e01b81526001600160a01b03838116600483015260009283929116906370a0823190602401602060405180830381865afa158015610bc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be89190612931565b6066549091506001600160a01b0316156104e1576066546040516370a0823160e01b81526001600160a01b038581166004830152909116906370a0823190602401602060405180830381865afa158015610c46573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6a9190612931565b61062790826129e5565b606554604051633f1ba3cf60e11b81526001600160a01b0383811660048301526000921690637e37479e90602401602060405180830381865afa158015610cbf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e19190612931565b6060808080846001600160401b03811115610d0057610d00612682565b604051908082528060200260200182016040528015610d29578160200160208202803683370190505b509350846001600160401b03811115610d4457610d44612682565b604051908082528060200260200182016040528015610d6d578160200160208202803683370190505b509250846001600160401b03811115610d8857610d88612682565b604051908082528060200260200182016040528015610dbb57816020015b6060815260200190600190039081610da65790505b509150846001600160401b03811115610dd657610dd6612682565b604051908082528060200260200182016040528015610e0957816020015b6060815260200190600190039081610df45790505b50905060005b85811015610ecd57610e3a8989898985818110610e2e57610e2e6129f8565b905060200201356116e5565b888581518110610e4c57610e4c6129f8565b60200260200101888681518110610e6557610e656129f8565b60200260200101888781518110610e7e57610e7e6129f8565b60200260200101888881518110610e9757610e976129f8565b6020908102919091010193909352929091526001600160a01b039283169091529116905280610ec581612a0e565b915050610e0f565b50945094509450949050565b6000806060610ee9868686611caa565b9250925092505b93509350939050565b60608080836001600160401b03811115610f1557610f15612682565b604051908082528060200260200182016040528015610f3e578160200160208202803683370190505b509250836001600160401b03811115610f5957610f59612682565b604051908082528060200260200182016040528015610f82578160200160208202803683370190505b509150836001600160401b03811115610f9d57610f9d612682565b604051908082528060200260200182016040528015610fd057816020015b6060815260200190600190039081610fbb5790505b50905060005b84811015611077576110018888888885818110610ff557610ff56129f8565b90506020020135611caa565b868481518110611013576110136129f8565b6020026020010186858151811061102c5761102c6129f8565b60200260200101868681518110611045576110456129f8565b60209081029190910101929092526001600160a01b03928316909152911690528061106f81612a0e565b915050610fd6565b509450945094915050565b606554604051634f558e7960e01b8152600481018390526000916001600160a01b031690634f558e7990602401602060405180830381865afa1580156110cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f0919061294a565b156111065750506065546001600160a01b031690565b6066546001600160a01b0316158015906111325750600061112683611eb5565b6001600160a01b031614155b156111485750506066546001600160a01b031690565b506000919050565b6060816001600160401b0381111561116a5761116a612682565b60405190808252806020026020018201604052801561119d57816020015b60608152602001906001900390816111885790505b50905060005b8281101561123d5761120d308585848181106111c1576111c16129f8565b90506020028101906111d39190612a27565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611ee792505050565b82828151811061121f5761121f6129f8565b6020026020010181905250808061123590612a0e565b9150506111a3565b5092915050565b600061124f82611947565b61125b57506000919050565b611264826119df565b6112995760665460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb9060240161055b565b60655460405163b3f9e4cb60e01b8152600481018490526001600160a01b039091169063b3f9e4cb906024016105ce565b606080836001600160401b038111156112e5576112e5612682565b60405190808252806020026020018201604052801561131857816020015b60608152602001906001900390816113035790505b509150836001600160401b0381111561133357611333612682565b60405190808252806020026020018201604052801561136657816020015b60608152602001906001900390816113515790505b509050611372836119df565b156113f95760655460405163170b5fa560e31b81526001600160a01b039091169063b85afd28906113ab90889088908890600401612a6d565b600060405180830381865afa1580156113c8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113f09190810190612b35565b9150915061149e565b600061140484611ba9565b90506001600160a01b0381163b1515801561141e57508415155b1561149c5760405163170b5fa560e31b81526001600160a01b0382169063b85afd289061145390899089908990600401612a6d565b600060405180830381865afa92505050801561149157506040513d6000823e601f3d908101601f1916820160405261148e9190810190612b35565b60015b1561149c5790935091505b505b935093915050565b606554604051632fafb1ad60e21b81526001600160a01b038381166004830152606092169063bebec6b4906024015b600060405180830381865afa1580156114f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104e19190810190612858565b6060816001600160401b0381111561153457611534612682565b60405190808252806020026020018201604052801561155d578160200160208202803683370190505b50905060005b8281101561123d5761158c848483818110611580576115806129f8565b90506020020135611c89565b82828151811061159e5761159e6129f8565b6001600160a01b0390921660209283029190910190910152806115c081612a0e565b915050611563565b60606115d382611947565b6115eb57505060408051602081019091526000815290565b6115f4826119df565b6116695760665460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd90602401600060405180830381865afa158015611641573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261059c9190810190612858565b60655460405163c87b56dd60e01b8152600481018490526001600160a01b039091169063c87b56dd906024016114d5565b60405162461bcd60e51b815260206004820152601f60248201527f50726f78795265616465723a20554e535550504f525445445f4d4554484f44006044820152600090606401610979565b600080606080856001600160401b0381111561170357611703612682565b60405190808252806020026020018201604052801561173657816020015b60608152602001906001900390816117215790505b509150856001600160401b0381111561175157611751612682565b60405190808252806020026020018201604052801561178457816020015b606081526020019060019003908161176f5790505b509050611790856119df565b156118915760655460405163b3f9e4cb60e01b8152600481018790526001600160a01b039091169063b3f9e4cb90602401602060405180830381865afa1580156117de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118029190612665565b935061180d85611fdb565b60655460405163170b5fa560e31b81529194506001600160a01b03169063b85afd2890611842908a908a908a90600401612a6d565b600060405180830381865afa15801561185f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118879190810190612b35565b9092509050610501565b61189a85611ba9565b93506118a585611eb5565b92506001600160a01b0384163b151580156118c1575060008251115b156105015760405163170b5fa560e31b81526001600160a01b0385169063b85afd28906118f6908a908a908a90600401612a6d565b600060405180830381865afa92505050801561193457506040513d6000823e601f3d908101601f191682016040526119319190810190612b35565b60015b1561050157909250905093509350935093565b6000611952826119df565b61197157600061196183611eb5565b6001600160a01b031614156104e1565b606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e79906024015b602060405180830381865afa1580156119bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104e1919061294a565b6066546000906001600160a01b031615806104e15750606554604051634f558e7960e01b8152600481018490526001600160a01b0390911690634f558e799060240161199e565b606082516001600160401b03811115611a4157611a41612682565b604051908082528060200260200182016040528015611a7457816020015b6060815260200190600190039081611a5f5790505b509050611a80826119df565b15611b0357606554604051630dec660d60e11b81526001600160a01b0390911690631bd8cc1a90611ab79086908690600401612b8e565b600060405180830381865afa158015611ad4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611afc9190810190612bb0565b90506104e1565b6000611b0e83611ba9565b90506001600160a01b0381163b15158015611b2a575060008451115b1561123d57604051630dec660d60e11b81526001600160a01b03821690631bd8cc1a90611b5d9087908790600401612b8e565b600060405180830381865afa925050508015611b9b57506040513d6000823e601f3d908101601f19168201604052611b989190810190612bb0565b60015b1561123d575b949350505050565b60665460405163b3f9e4cb60e01b8152600481018390526000916001600160a01b03169063b3f9e4cb906024015b602060405180830381865afa925050508015611c10575060408051601f3d908101601f19168201909252611c0d91810190612665565b60015b6104e157506000919050565b600054610100900460ff16611c875760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610979565b565b6000611c94826119df565b611ca15761059c82611eb5565b6104e182611fdb565b6000806060846001600160401b03811115611cc757611cc7612682565b604051908082528060200260200182016040528015611cfa57816020015b6060815260200190600190039081611ce55790505b509050611d06846119df565b15611e045760655460405163b3f9e4cb60e01b8152600481018690526001600160a01b039091169063b3f9e4cb90602401602060405180830381865afa158015611d54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d789190612665565b9250611d8384611fdb565b606554604051630dec660d60e11b81529193506001600160a01b031690631bd8cc1a90611db890899089908990600401612be4565b600060405180830381865afa158015611dd5573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611dfd9190810190612bb0565b9050610ef0565b611e0d84611ba9565b9250611e1884611eb5565b91506001600160a01b0383163b15158015611e3257508415155b15610ef057604051630dec660d60e11b81526001600160a01b03841690631bd8cc1a90611e6790899089908990600401612be4565b600060405180830381865afa925050508015611ea557506040513d6000823e601f3d908101601f19168201604052611ea29190810190612bb0565b60015b15610ef057905093509350939050565b6066546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401611bd7565b60606001600160a01b0383163b611f4f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610979565b600080846001600160a01b031684604051611f6a9190612bf8565b600060405180830381855af49150503d8060008114611fa5576040519150601f19603f3d011682016040523d82523d6000602084013e611faa565b606091505b5091509150611fd28282604051806060016040528060278152602001612c156027913961200d565b95945050505050565b6065546040516331a9108f60e11b8152600481018390526000916001600160a01b031690636352211e90602401611bd7565b6060831561201c575081610627565b82511561202c5782518084602001fd5b8160405162461bcd60e51b81526004016109799190612293565b60006020828403121561205857600080fd5b81356001600160e01b03198116811461062757600080fd5b60008083601f84011261208257600080fd5b5081356001600160401b0381111561209957600080fd5b6020830191508360208260051b8501011115610b6f57600080fd5b6000806000604084860312156120c957600080fd5b83356001600160401b038111156120df57600080fd5b6120eb86828701612070565b909790965060209590950135949350505050565b60005b8381101561211a578181015183820152602001612102565b50506000910152565b6000815180845261213b8160208601602086016120ff565b601f01601f19169290920160200192915050565b600082825180855260208086019550808260051b84010181860160005b8481101561219a57601f19868403018952612188838351612123565b9884019892509083019060010161216c565b5090979650505050505050565b6001600160a01b038581168252841660208201526080604082018190526000906121d39083018561214f565b82810360608401526121e5818561214f565b979650505050505050565b60006020828403121561220257600080fd5b5035919050565b602081526000610627602083018461214f565b60008060006040848603121561223157600080fd5b83356001600160401b038082111561224857600080fd5b818601915086601f83011261225c57600080fd5b81358181111561226b57600080fd5b87602082850101111561227d57600080fd5b6020928301989097509590910135949350505050565b6020815260006106276020830184612123565b600080602083850312156122b957600080fd5b82356001600160401b038111156122cf57600080fd5b6122db85828601612070565b90969095509350505050565b6001600160a01b03811681146122fc57600080fd5b50565b6000806040838503121561231257600080fd5b823561231d816122e7565b946020939093013593505050565b6000806040838503121561233e57600080fd5b8235612349816122e7565b91506020830135612359816122e7565b809150509250929050565b6000806040838503121561237757600080fd5b50508035926020909101359150565b6040815260006123996040830185612123565b8281036020840152611fd28185612123565b6000602082840312156123bd57600080fd5b8135610627816122e7565b600080600080604085870312156123de57600080fd5b84356001600160401b03808211156123f557600080fd5b61240188838901612070565b9096509450602087013591508082111561241a57600080fd5b5061242787828801612070565b95989497509550505050565b600081518084526020808501945080840160005b8381101561246c5781516001600160a01b031687529582019590820190600101612447565b509495945050505050565b600081518084526020808501808196506005915083821b81018387016000805b87811015612500578484038b5282518051808652908801908886019080891b87018a01855b828110156124ea57601f198983030184526124d8828651612123565b948c0194938c019391506001016124bc565b509d8a019d965050509287019250600101612497565b50919998505050505050505050565b6080815260006125226080830187612433565b82810360208401526125348187612433565b905082810360408401526125488186612477565b905082810360608401526121e58185612477565b6001600160a01b03848116825283166020820152606060408201819052600090611fd29083018461214f565b60608152600061259b6060830186612433565b82810360208401526125ad8186612433565b905082810360408401526125c18185612477565b9695505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561262057603f1988860301845261260e858351612123565b945092850192908501906001016125f2565b5092979650505050505050565b604081526000612640604083018561214f565b8281036020840152611fd2818561214f565b6020815260006106276020830184612433565b60006020828403121561267757600080fd5b8151610627816122e7565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156126c0576126c0612682565b604052919050565b60006001600160401b038211156126e1576126e1612682565b5060051b60200190565b60006001600160401b0382111561270457612704612682565b50601f01601f191660200190565b6000612725612720846126c8565b612698565b80848252602080830192508560051b85013681111561274357600080fd5b855b818110156127ba5780356001600160401b038111156127645760008081fd5b870136601f8201126127765760008081fd5b8035612784612720826126eb565b81815236868385010111156127995760008081fd5b81868401878301376000918101860191909152865250938201938201612745565b50919695505050505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6040815260006128036040830185876127c6565b9050826020830152949350505050565b600082601f83011261282457600080fd5b8151612832612720826126eb565b81815284602083860101111561284757600080fd5b611ba18260208301602087016120ff565b60006020828403121561286a57600080fd5b81516001600160401b0381111561288057600080fd5b611ba184828501612813565b81835260006020808501808196508560051b810191508460005b878110156129105782840389528135601e198836030181126128c757600080fd5b870185810190356001600160401b038111156128e257600080fd5b8036038213156128f157600080fd5b6128fc8682846127c6565b9a87019a95505050908401906001016128a6565b5091979650505050505050565b60208152600061062460208301848661288c565b60006020828403121561294357600080fd5b5051919050565b60006020828403121561295c57600080fd5b8151801515811461062757600080fd5b6000806040838503121561297f57600080fd5b82516001600160401b038082111561299657600080fd5b6129a286838701612813565b935060208501519150808211156129b857600080fd5b506129c585828601612813565b9150509250929050565b634e487b7160e01b600052601160045260246000fd5b808201808211156104e1576104e16129cf565b634e487b7160e01b600052603260045260246000fd5b600060018201612a2057612a206129cf565b5060010190565b6000808335601e19843603018112612a3e57600080fd5b8301803591506001600160401b03821115612a5857600080fd5b602001915036819003821315610b6f57600080fd5b6040808252810183905260006001600160fb1b03841115612a8d57600080fd5b8360051b808660608501376020830193909352500160600192915050565b600082601f830112612abc57600080fd5b81516020612acc612720836126c8565b82815260059290921b84018101918181019086841115612aeb57600080fd5b8286015b84811015612b2a5780516001600160401b03811115612b0e5760008081fd5b612b1c8986838b0101612813565b845250918301918301612aef565b509695505050505050565b60008060408385031215612b4857600080fd5b82516001600160401b0380821115612b5f57600080fd5b612b6b86838701612aab565b93506020850151915080821115612b8157600080fd5b506129c585828601612aab565b604081526000612ba1604083018561214f565b90508260208301529392505050565b600060208284031215612bc257600080fd5b81516001600160401b03811115612bd857600080fd5b611ba184828501612aab565b60408152600061280360408301858761288c565b60008251612c0a8184602087016120ff565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a164736f6c6343000811000a";
    static readonly abi: readonly [{
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
        readonly inputs: readonly [];
        readonly name: "NAME";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
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
        }];
        readonly name: "exists";
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
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "get";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getApproved";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "keyHash";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getByHash";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getData";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "resolver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "keyHashes";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getDataByHash";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "resolver";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "keyHashes";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getDataByHashForMany";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "resolvers";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly internalType: "string[][]";
            readonly name: "keys";
            readonly type: "string[][]";
        }, {
            readonly internalType: "string[][]";
            readonly name: "values";
            readonly type: "string[][]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "getDataForMany";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "resolvers";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }, {
            readonly internalType: "string[][]";
            readonly name: "values";
            readonly type: "string[][]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getMany";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "keyHashes";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "getManyByHash";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IUNSRegistry";
            readonly name: "unsRegistry";
            readonly type: "address";
        }, {
            readonly internalType: "contract ICNSRegistry";
            readonly name: "cnsRegistry";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        }];
        readonly name: "isApprovedForAll";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "isApprovedOrOwner";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "labels";
            readonly type: "string[]";
        }];
        readonly name: "namehash";
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
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "ownerOfForMany";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "owners";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "registryOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
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
        readonly name: "resolverOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "reverseNameOf";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "reverseOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "tokenURI";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ProxyReaderV04Interface;
    static connect(address: string, runner?: ContractRunner | null): ProxyReaderV04;
}
export {};
//# sourceMappingURL=ProxyReaderV04__factory.d.ts.map