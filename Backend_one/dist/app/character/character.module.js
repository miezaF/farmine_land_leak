"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterModule = void 0;
const common_1 = require("@nestjs/common");
const character_service_1 = require("./character.service");
const character_controller_1 = require("./character.controller");
const prisma_service_1 = require("../../database/prisma.service");
const IsUnique_validator_1 = require("../../validators/IsUnique.validator");
const user_service_1 = require("../user/user.service");
const user_module_1 = require("../user/user.module");
let CharacterModule = class CharacterModule {
};
CharacterModule = __decorate([
    (0, common_1.Module)({
        controllers: [character_controller_1.CharacterController],
        imports: [user_module_1.UserModule],
        providers: [character_service_1.CharacterService, user_service_1.UserService, prisma_service_1.PrismaService, IsUnique_validator_1.IsUnique],
        exports: [character_service_1.CharacterService],
    })
], CharacterModule);
exports.CharacterModule = CharacterModule;
//# sourceMappingURL=character.module.js.map