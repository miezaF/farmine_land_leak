"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../database/prisma.service");
let IsUnique = class IsUnique {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validate(value, args) {
        const [modelName, column] = args === null || args === void 0 ? void 0 : args.constraints;
        const model = this.prisma[modelName];
        const dataExist = await model.findFirst({
            where: { [column]: value },
        });
        return !dataExist;
    }
    defaultMessage(validationArguments) {
        const field = validationArguments.property;
        return `${field} is already exist.`;
    }
};
IsUnique = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsUniqueConstraint', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], IsUnique);
exports.IsUnique = IsUnique;
//# sourceMappingURL=IsUnique.validator.js.map