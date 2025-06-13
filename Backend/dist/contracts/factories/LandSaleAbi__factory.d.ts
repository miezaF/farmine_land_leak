import { type ContractRunner } from "ethers";
import type { LandSaleAbi, LandSaleAbiInterface } from "../LandSaleAbi";
export declare class LandSaleAbi__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "initialOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "landContract_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "usdt_";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "ogLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "whitelistLimit";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.time";
            readonly name: "time_";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.supply";
            readonly name: "maxSupply_";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.price";
            readonly name: "normalPrice_";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.price";
            readonly name: "ogPrice_";
            readonly type: "tuple";
        }, {
            readonly internalType: "address[]";
            readonly name: "whitelist_";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "og_";
            readonly type: "address[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EnforcedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpectedPause";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "OwnableInvalidOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "OwnableUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "SafeERC20FailedOperation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "amountExceeded";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "insufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "insufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "landtype";
            readonly type: "uint256";
        }];
        readonly name: "landTypeNoExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "saleStateError";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "saleId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "nftId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "buyer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "landtype";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly name: "saleMade";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "started";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "ogLimit";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "whitelistLimit";
            readonly type: "uint256";
        }];
        readonly name: "saleStarted";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addOg";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "addWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "landtype";
            readonly type: "uint256";
        }];
        readonly name: "buy";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "nftId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "buyer";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "landtype";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.sale";
            readonly name: "info";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaxSupply";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.supply";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNormalPrice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.price";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getOgPrice";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.price";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "getSale";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "nftId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "buyer";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "landtype";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "price";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.sale";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getSaleTime";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "ogLimit";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "whitelistLimit";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.time";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTime";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalSupply";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "small";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "med";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "large";
                readonly type: "uint256";
            }];
            readonly internalType: "struct structs.supply";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isOg";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "isWhitelist";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
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
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "removeOg";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "removeWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startSale";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "startedSale";
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
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unpause";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): LandSaleAbiInterface;
    static connect(address: string, runner?: ContractRunner | null): LandSaleAbi;
}
