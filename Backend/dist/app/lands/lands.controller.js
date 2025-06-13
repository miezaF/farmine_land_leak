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
exports.LandsController = void 0;
const common_1 = require("@nestjs/common");
const lands_service_1 = require("./lands.service");
const swagger_1 = require("@nestjs/swagger");
let LandsController = class LandsController {
    constructor(landsService) {
        this.landsService = landsService;
    }
    async findAll() {
        return await this.landsService.findAll();
    }
    async findAllSavedLand() {
        return await this.landsService.findAllSavedLand();
    }
    async loadHistorico() {
        return await this.landsService.loadHistorico();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LandsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('lands-saved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LandsController.prototype, "findAllSavedLand", null);
__decorate([
    (0, common_1.Get)('chests-open'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LandsController.prototype, "loadHistorico", null);
LandsController = __decorate([
    (0, swagger_1.ApiTags)('Lands'),
    (0, common_1.Controller)('/api/v1/lands'),
    __metadata("design:paramtypes", [lands_service_1.LandsService])
], LandsController);
exports.LandsController = LandsController;
//# sourceMappingURL=lands.controller.js.map