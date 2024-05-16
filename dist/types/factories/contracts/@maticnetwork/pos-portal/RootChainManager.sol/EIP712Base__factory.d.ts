import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { EIP712Base, EIP712BaseInterface } from "../../../../../contracts/@maticnetwork/pos-portal/RootChainManager.sol/EIP712Base";
declare type EIP712BaseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EIP712Base__factory extends ContractFactory {
    constructor(...args: EIP712BaseConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<EIP712Base & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): EIP712Base__factory;
    static readonly bytecode = "0x60806040526000805460ff1916905534801561001a57600080fd5b5061010b8061002a6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80630f7e597014604157806320379ee51460b95780633408e4701460d1575b600080fd5b604760d7565b6040805160208082528351818301528351919283929083019185019080838360005b83811015607f5781810151838201526020016069565b50505050905090810190601f16801560ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60bf60f4565b60408051918252519081900360200190f35b60bf60fa565b604051806040016040528060018152602001603160f81b81525081565b60015490565b469056fea164736f6c6343000606000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ERC712_VERSION";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getChainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDomainSeperator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): EIP712BaseInterface;
    static connect(address: string, runner?: ContractRunner | null): EIP712Base;
}
export {};
//# sourceMappingURL=EIP712Base__factory.d.ts.map