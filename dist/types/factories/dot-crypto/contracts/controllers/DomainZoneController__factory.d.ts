import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { DomainZoneController, DomainZoneControllerInterface } from "../../../../dot-crypto/contracts/controllers/DomainZoneController";
declare type DomainZoneControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DomainZoneController__factory extends ContractFactory {
    constructor(...args: DomainZoneControllerConstructorParams);
    getDeployTransaction(registry: AddressLike, accounts: AddressLike[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(registry: AddressLike, accounts: AddressLike[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DomainZoneController & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DomainZoneController__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620016ec380380620016ec8339810160408190526200003491620002d4565b62000048336001600160e01b03620000a716565b600280546001600160a01b0319166001600160a01b03841617905560005b81518110156200009e57620000958282815181106200008157fe5b6020026020010151620000f960201b60201c565b60010162000066565b50505062000487565b620000c28160006200014b60201b6200099e1790919060201c565b6040516001600160a01b038216907f22380c05984257a1cb900161c713dd71d39e74820f1aea43bd3f1bdd2096129990600090a250565b620001148160016200014b60201b6200099e1790919060201c565b6040516001600160a01b038216907fee1504a83b6d4a361f4c1dc78ab59bfa30d6a3b6612c403e86bb01ef2984295f90600090a250565b6200016082826001600160e01b03620001c816565b15620001a3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019a90620003c7565b60405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200020d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200019a90620003d9565b506001600160a01b03811660009081526020839052604090205460ff165b92915050565b80516200022b8162000462565b600082601f8301126200025057600080fd5b815162000267620002618262000412565b620003eb565b915081818352602084019350602081019050838560208402820111156200028d57600080fd5b60005b83811015620002bd5781620002a6888262000231565b845250602092830192919091019060010162000290565b5050505092915050565b80516200022b816200047c565b60008060408385031215620002e857600080fd5b6000620002f68585620002c7565b92505060208301516001600160401b038111156200031357600080fd5b62000321858286016200023e565b9150509250929050565b60006200033a601f8362000433565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500815260200192915050565b60006200037560228362000433565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726581527f7373000000000000000000000000000000000000000000000000000000000000602082015260400192915050565b602080825281016200022b816200032b565b602080825281016200022b8162000366565b6040518181016001600160401b03811182821017156200040a57600080fd5b604052919050565b60006001600160401b038211156200042957600080fd5b5060209081020190565b90815260200190565b60006200022b8262000456565b60006200022b826200043c565b6001600160a01b031690565b6200046d816200043c565b81146200047957600080fd5b50565b6200046d8162000449565b61125580620004976000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063841cb28e11610071578063841cb28e14610138578063bb5f747b1461014b578063ce92b33e1461015e578063d6cd947314610171578063f6e491aa14610179578063f8a6c3d61461018c576100b4565b806310154bad146100b95780632392c189146100ce578063291d9549146100e15780633af32abf146100f45780634c5a628c1461011d5780637362d9c814610125575b600080fd5b6100cc6100c7366004610b89565b61019f565b005b6100cc6100dc366004610bcd565b6101d9565b6100cc6100ef366004610b89565b610266565b610107610102366004610b89565b610294565b6040516101149190611070565b60405180910390f35b6100cc6102ad565b6100cc610133366004610b89565b6102b8565b6100cc610146366004610c07565b6102e6565b610107610159366004610b89565b61065c565b6100cc61016c366004610cf9565b61066e565b6100cc61077f565b6100cc610187366004610cc4565b610788565b6100cc61019a366004610cc4565b6107e1565b6101a83361065c565b6101cd5760405162461bcd60e51b81526004016101c4906110bf565b60405180910390fd5b6101d681610836565b50565b6101e233610294565b6101fe5760405162461bcd60e51b81526004016101c4906110cf565b600254604051632392c18960e01b81526001600160a01b0390911690632392c189906102309085908590600401610feb565b600060405180830381600087803b15801561024a57600080fd5b505af115801561025e573d6000803e3d6000fd5b505050505050565b61026f3361065c565b61028b5760405162461bcd60e51b81526004016101c4906110bf565b6101d68161087e565b60006102a760018363ffffffff6108c616565b92915050565b6102b63361090e565b565b6102c13361065c565b6102dd5760405162461bcd60e51b81526004016101c4906110bf565b6101d681610956565b6102ef33610294565b61030b5760405162461bcd60e51b81526004016101c4906110cf565b60025460405163b3f9e4cb60e01b81526000916001600160a01b03169063b3f9e4cb9061033c9088906004016110df565b60206040518083038186803b15801561035457600080fd5b505afa158015610368573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061038c9190810190610baf565b60025460405163345b169960e11b81529192506000916001600160a01b03909116906368b62d32906103c490899089906004016110ed565b60206040518083038186803b1580156103dc57600080fd5b505afa1580156103f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506104149190810190610d75565b8451909150156105b357600254604051636c69e63760e11b81526001600160a01b039091169063d8d3cc6e906104529030908a908a90600401611006565b600060405180830381600087803b15801561046c57600080fd5b505af1158015610480573d6000803e3d6000fd5b5050600254604051632392c18960e01b81526001600160a01b039091169250632392c18991506104b69085908590600401610feb565b600060405180830381600087803b1580156104d057600080fd5b505af11580156104e4573d6000803e3d6000fd5b50506040516376094f7560e11b81526001600160a01b038516925063ec129eea91506105189087908790869060040161103c565b600060405180830381600087803b15801561053257600080fd5b505af1158015610546573d6000803e3d6000fd5b505060025460405163559dc3ff60e11b81526001600160a01b03909116925063ab3b87fe915061057c908a908590600401610feb565b600060405180830381600087803b15801561059657600080fd5b505af11580156105aa573d6000803e3d6000fd5b5050505061061a565b600254604051636c69e63760e11b81526001600160a01b039091169063d8d3cc6e906105e7908a908a908a90600401611006565b600060405180830381600087803b15801561060157600080fd5b505af1158015610615573d6000803e3d6000fd5b505050505b85817f5653f60014b57c7e76e4b4be42e724badf242bc2918de8c398c2c3ab542dea388760405161064b919061107e565b60405180910390a350505050505050565b60006102a7818363ffffffff6108c616565b61067733610294565b6106935760405162461bcd60e51b81526004016101c4906110cf565b60025460405163b3f9e4cb60e01b81526000916001600160a01b03169063b3f9e4cb906106c49085906004016110df565b60206040518083038186803b1580156106dc57600080fd5b505afa1580156106f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506107149190810190610baf565b604051636749599f60e11b81529091506001600160a01b0382169063ce92b33e906107479087908790879060040161103c565b600060405180830381600087803b15801561076157600080fd5b505af1158015610775573d6000803e3d6000fd5b5050505050505050565b6102b63361087e565b6107913361065c565b6107ad5760405162461bcd60e51b81526004016101c4906110bf565b60005b81518110156107dd576107d58282815181106107c857fe5b6020026020010151610836565b6001016107b0565b5050565b6107ea3361065c565b6108065760405162461bcd60e51b81526004016101c4906110bf565b60005b81518110156107dd5761082e82828151811061082157fe5b602002602001015161087e565b600101610809565b61084760018263ffffffff61099e16565b6040516001600160a01b038216907fee1504a83b6d4a361f4c1dc78ab59bfa30d6a3b6612c403e86bb01ef2984295f90600090a250565b61088f60018263ffffffff6109ea16565b6040516001600160a01b038216907f270d9b30cf5b0793bbfd54c9d5b94aeb49462b8148399000265144a8722da6b690600090a250565b60006001600160a01b0382166108ee5760405162461bcd60e51b81526004016101c4906110af565b506001600160a01b03166000908152602091909152604090205460ff1690565b61091f60008263ffffffff6109ea16565b6040516001600160a01b038216907f0a8eb35e5ca14b3d6f28e4abf2f128dbab231a58b56e89beb5d636115001e16590600090a250565b61096760008263ffffffff61099e16565b6040516001600160a01b038216907f22380c05984257a1cb900161c713dd71d39e74820f1aea43bd3f1bdd2096129990600090a250565b6109a882826108c6565b156109c55760405162461bcd60e51b81526004016101c49061108f565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6109f482826108c6565b610a105760405162461bcd60e51b81526004016101c49061109f565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b80356102a7816111f5565b80516102a7816111f5565b600082601f830112610a5957600080fd5b8135610a6c610a6782611134565b61110d565b91508181835260208401935060208101905083856020840282011115610a9157600080fd5b60005b83811015610abd5781610aa78882610a32565b8452506020928301929190910190600101610a94565b5050505092915050565b600082601f830112610ad857600080fd5b8135610ae6610a6782611134565b81815260209384019390925082018360005b83811015610abd5781358601610b0e8882610b24565b8452506020928301929190910190600101610af8565b600082601f830112610b3557600080fd5b8135610b43610a6782611155565b91508082526020830160208301858383011115610b5f57600080fd5b610b6a8382846111af565b50505092915050565b80356102a781611209565b80516102a781611209565b600060208284031215610b9b57600080fd5b6000610ba78484610a32565b949350505050565b600060208284031215610bc157600080fd5b6000610ba78484610a3d565b60008060408385031215610be057600080fd5b6000610bec8585610a32565b9250506020610bfd85828601610b73565b9150509250929050565b600080600080600060a08688031215610c1f57600080fd5b6000610c2b8888610a32565b9550506020610c3c88828901610b73565b945050604086013567ffffffffffffffff811115610c5957600080fd5b610c6588828901610b24565b935050606086013567ffffffffffffffff811115610c8257600080fd5b610c8e88828901610ac7565b925050608086013567ffffffffffffffff811115610cab57600080fd5b610cb788828901610ac7565b9150509295509295909350565b600060208284031215610cd657600080fd5b813567ffffffffffffffff811115610ced57600080fd5b610ba784828501610a48565b600080600060608486031215610d0e57600080fd5b833567ffffffffffffffff811115610d2557600080fd5b610d3186828701610ac7565b935050602084013567ffffffffffffffff811115610d4e57600080fd5b610d5a86828701610ac7565b9250506040610d6b86828701610b73565b9150509250925092565b600060208284031215610d8757600080fd5b6000610ba78484610b7e565b6000610d9f8383610e2c565b9392505050565b610daf81611190565b82525050565b6000610dc082611183565b610dca8185611187565b935083602082028501610ddc8561117d565b8060005b85811015610e165784840389528151610df98582610d93565b9450610e048361117d565b60209a909a0199925050600101610de0565b5091979650505050505050565b610daf8161119b565b6000610e3782611183565b610e418185611187565b9350610e518185602086016111bb565b610e5a816111eb565b9093019392505050565b6000610e71601f83611187565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500815260200192915050565b6000610eaa602183611187565b7f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c8152606560f81b602082015260400192915050565b6000610eed602283611187565b7f526f6c65733a206163636f756e7420697320746865207a65726f206164647265815261737360f01b602082015260400192915050565b6000610f31604083611187565b7f57686974656c69737441646d696e526f6c653a2063616c6c657220646f65732081527f6e6f742068617665207468652057686974656c69737441646d696e20726f6c65602082015260400192915050565b6000610f90603a83611187565b7f57686974656c6973746564526f6c653a2063616c6c657220646f6573206e6f7481527f2068617665207468652057686974656c697374656420726f6c65000000000000602082015260400192915050565b610daf816111ac565b60408101610ff98285610da6565b610d9f6020830184610fe2565b606081016110148286610da6565b6110216020830185610fe2565b81810360408301526110338184610e2c565b95945050505050565b6060808252810161104d8186610db5565b905081810360208301526110618185610db5565b9050610ba76040830184610fe2565b602081016102a78284610e23565b60208082528101610d9f8184610e2c565b602080825281016102a781610e64565b602080825281016102a781610e9d565b602080825281016102a781610ee0565b602080825281016102a781610f24565b602080825281016102a781610f83565b602081016102a78284610fe2565b604081016110fb8285610fe2565b8181036020830152610ba78184610e2c565b60405181810167ffffffffffffffff8111828210171561112c57600080fd5b604052919050565b600067ffffffffffffffff82111561114b57600080fd5b5060209081020190565b600067ffffffffffffffff82111561116c57600080fd5b506020601f91909101601f19160190565b60200190565b5190565b90815260200190565b60006102a7826111a0565b151590565b6001600160a01b031690565b90565b82818337506000910152565b60005b838110156111d65781810151838201526020016111be565b838111156111e5576000848401525b50505050565b601f01601f191690565b6111fe81611190565b81146101d657600080fd5b6111fe816111ac56fea365627a7a723158201133b4cf3b641c36dd1661fa1ca1c9f7a2bf9049abd1a6f0c66110188587e4996c6578706572696d656e74616cf564736f6c634300050c0040";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ICNSRegistry";
            readonly name: "registry";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "parentTokenId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "label";
            readonly type: "string";
        }];
        readonly name: "MintChild";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "WhitelistAdminAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "WhitelistAdminRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "WhitelistedAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "WhitelistedRemoved";
        readonly type: "event";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addWhitelistAdmin";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addWhitelisted";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly name: "bulkAddWhitelisted";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "accounts";
            readonly type: "address[]";
        }];
        readonly name: "bulkRemoveWhitelisted";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isWhitelistAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: true;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isWhitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly payable: false;
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }, {
            readonly internalType: "string";
            readonly name: "label";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }];
        readonly name: "mintChild";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "removeWhitelisted";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "renounceWhitelistAdmin";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [];
        readonly name: "renounceWhitelisted";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "resolveTo";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly constant: false;
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "values";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "setMany";
        readonly outputs: readonly [];
        readonly payable: false;
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): DomainZoneControllerInterface;
    static connect(address: string, runner?: ContractRunner | null): DomainZoneController;
}
export {};
//# sourceMappingURL=DomainZoneController__factory.d.ts.map