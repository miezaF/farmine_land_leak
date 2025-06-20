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
exports.LoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Preencha o name' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Tamanho máximo é de 255 caracteres ' }),
    __metadata("design:type", String)
], LoginDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Preencha a senha' }),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Tamanho máximo é de 255 caracteres ' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
exports.LoginDto = LoginDto;
//# sourceMappingURL=login.dto.js.map