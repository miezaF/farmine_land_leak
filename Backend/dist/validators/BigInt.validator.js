"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigIntToNumberInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let BigIntToNumberInterceptor = class BigIntToNumberInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.map)((data) => {
            return this.convertBigIntToNumber(data);
        }));
    }
    convertBigIntToNumber(data) {
        if (Array.isArray(data)) {
            return data.map((item) => this.convertBigIntToNumber(item));
        }
        else if (data && typeof data === 'object') {
            const newData = Object.assign({}, data);
            for (const key in newData) {
                if (typeof newData[key] === 'bigint') {
                    newData[key] = Number(newData[key]);
                }
                else if (typeof newData[key] === 'object') {
                    newData[key] = this.convertBigIntToNumber(newData[key]);
                }
            }
            return newData;
        }
        return data;
    }
};
BigIntToNumberInterceptor = __decorate([
    (0, common_1.Injectable)()
], BigIntToNumberInterceptor);
exports.BigIntToNumberInterceptor = BigIntToNumberInterceptor;
//# sourceMappingURL=BigInt.validator.js.map