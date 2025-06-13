"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandsModule = void 0;
const common_1 = require("@nestjs/common");
const lands_service_1 = require("./lands.service");
const lands_controller_1 = require("./lands.controller");
const prisma_service_1 = require("../../database/prisma.service");
const upload_service_1 = require("../upload/upload.service");
let LandsModule = class LandsModule {
};
LandsModule = __decorate([
    (0, common_1.Module)({
        controllers: [lands_controller_1.LandsController],
        providers: [lands_service_1.LandsService, prisma_service_1.PrismaService, upload_service_1.UploadService],
    })
], LandsModule);
exports.LandsModule = LandsModule;
//# sourceMappingURL=lands.module.js.map