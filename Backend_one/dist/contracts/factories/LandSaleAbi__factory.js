"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandSaleAbi__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "initialOwner",
                type: "address",
            },
            {
                internalType: "address",
                name: "landContract_",
                type: "address",
            },
            {
                internalType: "address",
                name: "usdt_",
                type: "address",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "ogLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "whitelistLimit",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.time",
                name: "time_",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.supply",
                name: "maxSupply_",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.price",
                name: "normalPrice_",
                type: "tuple",
            },
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.price",
                name: "ogPrice_",
                type: "tuple",
            },
            {
                internalType: "address[]",
                name: "whitelist_",
                type: "address[]",
            },
            {
                internalType: "address[]",
                name: "og_",
                type: "address[]",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "target",
                type: "address",
            },
        ],
        name: "AddressEmptyCode",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "AddressInsufficientBalance",
        type: "error",
    },
    {
        inputs: [],
        name: "EnforcedPause",
        type: "error",
    },
    {
        inputs: [],
        name: "ExpectedPause",
        type: "error",
    },
    {
        inputs: [],
        name: "FailedInnerCall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "OwnableInvalidOwner",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "OwnableUnauthorizedAccount",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyGuardReentrantCall",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
        ],
        name: "SafeERC20FailedOperation",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "amountExceeded",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "insufficientAllowance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "insufficientBalance",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "landtype",
                type: "uint256",
            },
        ],
        name: "landTypeNoExists",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "saleStateError",
        type: "error",
    },
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
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "saleId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "nftId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "landtype",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256",
            },
        ],
        name: "saleMade",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "started",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "ogLimit",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "whitelistLimit",
                type: "uint256",
            },
        ],
        name: "saleStarted",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addOg",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "addWhitelist",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "landtype",
                type: "uint256",
            },
        ],
        name: "buy",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nftId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "landtype",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.sale",
                name: "info",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getMaxSupply",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.supply",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getNormalPrice",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.price",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getOgPrice",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.price",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
        ],
        name: "getSale",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "nftId",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "landtype",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.sale",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getSaleTime",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "ogLimit",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "whitelistLimit",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.time",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTotalSupply",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "small",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "med",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "large",
                        type: "uint256",
                    },
                ],
                internalType: "struct structs.supply",
                name: "",
                type: "tuple",
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
        ],
        name: "isOg",
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
        ],
        name: "isWhitelist",
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
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "paused",
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
        ],
        name: "removeOg",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "removeWhitelist",
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
        inputs: [],
        name: "startSale",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startedSale",
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
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
class LandSaleAbi__factory {
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.LandSaleAbi__factory = LandSaleAbi__factory;
LandSaleAbi__factory.abi = _abi;
//# sourceMappingURL=LandSaleAbi__factory.js.map