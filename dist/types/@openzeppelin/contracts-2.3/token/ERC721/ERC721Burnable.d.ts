import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../../../common";
export interface ERC721BurnableInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "getApproved" | "isApprovedForAll" | "ownerOf" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "supportsInterface" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export declare type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export declare type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
export declare type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export declare type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export declare type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export declare type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ERC721Burnable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC721BurnableInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter;
    };
    estimateGas: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, _data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(to: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC721Burnable.d.ts.map