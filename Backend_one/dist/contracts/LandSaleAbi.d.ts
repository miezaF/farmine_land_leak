import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common";
export declare namespace Structs {
    type TimeStruct = {
        ogLimit: BigNumberish;
        whitelistLimit: BigNumberish;
    };
    type TimeStructOutput = [ogLimit: bigint, whitelistLimit: bigint] & {
        ogLimit: bigint;
        whitelistLimit: bigint;
    };
    type SupplyStruct = {
        small: BigNumberish;
        med: BigNumberish;
        large: BigNumberish;
    };
    type SupplyStructOutput = [
        small: bigint,
        med: bigint,
        large: bigint
    ] & {
        small: bigint;
        med: bigint;
        large: bigint;
    };
    type PriceStruct = {
        small: BigNumberish;
        med: BigNumberish;
        large: BigNumberish;
    };
    type PriceStructOutput = [
        small: bigint,
        med: bigint,
        large: bigint
    ] & {
        small: bigint;
        med: bigint;
        large: bigint;
    };
    type SaleStruct = {
        id: BigNumberish;
        nftId: BigNumberish;
        buyer: AddressLike;
        landtype: BigNumberish;
        price: BigNumberish;
    };
    type SaleStructOutput = [
        id: bigint,
        nftId: bigint,
        buyer: string,
        landtype: bigint,
        price: bigint
    ] & {
        id: bigint;
        nftId: bigint;
        buyer: string;
        landtype: bigint;
        price: bigint;
    };
}
export interface LandSaleAbiInterface extends Interface {
    getFunction(nameOrSignature: "addOg" | "addWhitelist" | "buy" | "getMaxSupply" | "getNormalPrice" | "getOgPrice" | "getSale" | "getSaleTime" | "getTime" | "getTotalSupply" | "isOg" | "isWhitelist" | "owner" | "pause" | "paused" | "removeOg" | "removeWhitelist" | "renounceOwnership" | "startSale" | "startedSale" | "transferOwnership" | "unpause"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred" | "Paused" | "Unpaused" | "saleMade" | "saleStarted"): EventFragment;
    encodeFunctionData(functionFragment: "addOg", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "addWhitelist", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "buy", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getMaxSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNormalPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOgPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSale", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSaleTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "isOg", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isWhitelist", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeOg", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "removeWhitelist", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "startSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "startedSale", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addOg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMaxSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNormalPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOgPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSaleTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeOg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startedSale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}
export declare namespace OwnershipTransferredEvent {
    type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
    type OutputTuple = [previousOwner: string, newOwner: string];
    interface OutputObject {
        previousOwner: string;
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace saleMadeEvent {
    type InputTuple = [
        saleId: BigNumberish,
        nftId: BigNumberish,
        buyer: AddressLike,
        landtype: BigNumberish,
        price: BigNumberish
    ];
    type OutputTuple = [
        saleId: bigint,
        nftId: bigint,
        buyer: string,
        landtype: bigint,
        price: bigint
    ];
    interface OutputObject {
        saleId: bigint;
        nftId: bigint;
        buyer: string;
        landtype: bigint;
        price: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace saleStartedEvent {
    type InputTuple = [
        started: boolean,
        ogLimit: BigNumberish,
        whitelistLimit: BigNumberish
    ];
    type OutputTuple = [
        started: boolean,
        ogLimit: bigint,
        whitelistLimit: bigint
    ];
    interface OutputObject {
        started: boolean;
        ogLimit: bigint;
        whitelistLimit: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface LandSaleAbi extends BaseContract {
    connect(runner?: ContractRunner | null): LandSaleAbi;
    waitForDeployment(): Promise<this>;
    interface: LandSaleAbiInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addOg: TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    addWhitelist: TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    buy: TypedContractMethod<[
        landtype: BigNumberish
    ], [
        Structs.SaleStructOutput
    ], "nonpayable">;
    getMaxSupply: TypedContractMethod<[], [Structs.SupplyStructOutput], "view">;
    getNormalPrice: TypedContractMethod<[], [Structs.PriceStructOutput], "view">;
    getOgPrice: TypedContractMethod<[], [Structs.PriceStructOutput], "view">;
    getSale: TypedContractMethod<[
        id: BigNumberish
    ], [
        Structs.SaleStructOutput
    ], "view">;
    getSaleTime: TypedContractMethod<[], [Structs.TimeStructOutput], "view">;
    getTime: TypedContractMethod<[], [bigint], "view">;
    getTotalSupply: TypedContractMethod<[], [Structs.SupplyStructOutput], "view">;
    isOg: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    isWhitelist: TypedContractMethod<[account: AddressLike], [boolean], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    removeOg: TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    removeWhitelist: TypedContractMethod<[
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;
    startSale: TypedContractMethod<[], [void], "nonpayable">;
    startedSale: TypedContractMethod<[], [boolean], "view">;
    transferOwnership: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addOg"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "addWhitelist"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "buy"): TypedContractMethod<[
        landtype: BigNumberish
    ], [
        Structs.SaleStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "getMaxSupply"): TypedContractMethod<[], [Structs.SupplyStructOutput], "view">;
    getFunction(nameOrSignature: "getNormalPrice"): TypedContractMethod<[], [Structs.PriceStructOutput], "view">;
    getFunction(nameOrSignature: "getOgPrice"): TypedContractMethod<[], [Structs.PriceStructOutput], "view">;
    getFunction(nameOrSignature: "getSale"): TypedContractMethod<[
        id: BigNumberish
    ], [
        Structs.SaleStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getSaleTime"): TypedContractMethod<[], [Structs.TimeStructOutput], "view">;
    getFunction(nameOrSignature: "getTime"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getTotalSupply"): TypedContractMethod<[], [Structs.SupplyStructOutput], "view">;
    getFunction(nameOrSignature: "isOg"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isWhitelist"): TypedContractMethod<[account: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "removeOg"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "removeWhitelist"): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "renounceOwnership"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "startSale"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "startedSale"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "transferOwnership"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "OwnershipTransferred"): TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    getEvent(key: "saleMade"): TypedContractEvent<saleMadeEvent.InputTuple, saleMadeEvent.OutputTuple, saleMadeEvent.OutputObject>;
    getEvent(key: "saleStarted"): TypedContractEvent<saleStartedEvent.InputTuple, saleStartedEvent.OutputTuple, saleStartedEvent.OutputObject>;
    filters: {
        "OwnershipTransferred(address,address)": TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        OwnershipTransferred: TypedContractEvent<OwnershipTransferredEvent.InputTuple, OwnershipTransferredEvent.OutputTuple, OwnershipTransferredEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        "saleMade(uint256,uint256,address,uint256,uint256)": TypedContractEvent<saleMadeEvent.InputTuple, saleMadeEvent.OutputTuple, saleMadeEvent.OutputObject>;
        saleMade: TypedContractEvent<saleMadeEvent.InputTuple, saleMadeEvent.OutputTuple, saleMadeEvent.OutputObject>;
        "saleStarted(bool,uint256,uint256)": TypedContractEvent<saleStartedEvent.InputTuple, saleStartedEvent.OutputTuple, saleStartedEvent.OutputObject>;
        saleStarted: TypedContractEvent<saleStartedEvent.InputTuple, saleStartedEvent.OutputTuple, saleStartedEvent.OutputObject>;
    };
}
