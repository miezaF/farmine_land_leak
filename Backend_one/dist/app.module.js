"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./app/auth/auth.module");
const user_module_1 = require("./app/user/user.module");
const throttler_1 = require("@nestjs/throttler");
const upload_module_1 = require("./app/upload/upload.module");
const IsUnique_validator_1 = require("./validators/IsUnique.validator");
const character_module_1 = require("./app/character/character.module");
const prisma_service_1 = require("./database/prisma.service");
const jwt_1 = require("@nestjs/jwt");
const lands_module_1 = require("./app/lands/lands.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                global: true,
                privateKey: process.env.JWT_PRIVATE_KEY,
                secret: process.env.JWT_PRIVATE_KEY,
                signOptions: { expiresIn: '24h' },
            }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    name: 'short',
                    ttl: 1000,
                    limit: 3,
                },
                {
                    name: 'medium',
                    ttl: 10000,
                    limit: 20,
                },
                {
                    name: 'long',
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            upload_module_1.UploadModule,
            character_module_1.CharacterModule,
            lands_module_1.LandsModule,
        ],
        controllers: [],
        providers: [IsUnique_validator_1.IsUnique, prisma_service_1.PrismaService],
        exports: [IsUnique_validator_1.IsUnique]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map