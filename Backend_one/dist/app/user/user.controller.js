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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const throttler_1 = require("@nestjs/throttler");
const resetPassReqDto_dto_copy_1 = require("./dto/resetPassReqDto.dto copy");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createNew(body) {
        return this.userService.createNew(body);
    }
    findAll() {
        return this.userService.findAll();
    }
    async findOneById(id) {
        return this.userService.findOneById(id);
    }
    async updateById(id, body) {
        return this.userService.updateById(id, body);
    }
    async requestPasswordReset(payload) {
        return await this.userService.requestPasswordReset(payload);
    }
    async resetPassword(body) {
        return await this.userService.resetPassword(body);
    }
    async deleteById(id) {
        await this.userService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Cria um usuario',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createNew", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lista todos os usuarios' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista todos os usuarios',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Puxa informacoes de um unico usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Puxa informacoes de um unico usuario',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOneById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza informacoes de um unico usuario' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Atualiza informacoes de um unico usuario',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Cria um usuario',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateById", null);
__decorate([
    (0, common_1.Post)('request-password-reset'),
    (0, swagger_1.ApiBody)({
        description: 'Valores que vao no body',
        type: resetPassReqDto_dto_copy_1.ResetPassReqDto,
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Faz requisicao para pegar o token pra atualizar senha',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassReqDto_dto_copy_1.ResetPassReqDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "requestPasswordReset", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, swagger_1.ApiBody)({
        description: 'Valores que vao no body',
        type: resetPassReqDto_dto_copy_1.ResetPassDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar a senha de um usuario' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetPassReqDto_dto_copy_1.ResetPassDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Deleta um unico usuario' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
UserController = __decorate([
    (0, throttler_1.SkipThrottle)(),
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('api/v1/users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map