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
exports.CharacterController = void 0;
const common_1 = require("@nestjs/common");
const character_service_1 = require("./character.service");
const create_character_dto_1 = require("./dto/create-character.dto");
const swagger_1 = require("@nestjs/swagger");
let CharacterController = class CharacterController {
    constructor(characterService) {
        this.characterService = characterService;
    }
    create(createCharacterDto) {
        return this.characterService.createNew(createCharacterDto);
    }
    findAllByUser(id) {
        return this.characterService.findAllByUser(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um Personagem' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_character_dto_1.CreateCharacterDto]),
    __metadata("design:returntype", void 0)
], CharacterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Busca personagens pelo ID do usuario' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CharacterController.prototype, "findAllByUser", null);
CharacterController = __decorate([
    (0, swagger_1.ApiTags)('Character'),
    (0, common_1.Controller)('api/v1/characters'),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map