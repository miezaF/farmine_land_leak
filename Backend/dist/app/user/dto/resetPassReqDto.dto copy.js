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
exports.ResetPassDto = exports.ResetPassReqDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResetPassReqDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Preencha o email' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Tamanho máximo é de 255 caracteres ' }),
    __metadata("design:type", String)
], ResetPassReqDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Preencha o link' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Tamanho máximo é de 255 caracteres ' }),
    __metadata("design:type", String)
], ResetPassReqDto.prototype, "redirect_link", void 0);
exports.ResetPassReqDto = ResetPassReqDto;
class ResetPassDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], ResetPassDto.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], ResetPassDto.prototype, "newPassword", void 0);
exports.ResetPassDto = ResetPassDto;
//# sourceMappingURL=resetPassReqDto.dto%20copy.js.map