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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const luxon_1 = require("luxon");
const user_service_1 = require("../user/user.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(user) {
        const userJson = { name: user.name, password: user.password };
        const token = await this.jwtService.signAsync(userJson);
        const buffered = Buffer.from(token.split('.')[1], 'base64').toString();
        const payload = JSON.parse(buffered);
        const expiresIn = luxon_1.DateTime.fromMillis(payload.exp * 1000)
            .toUTC()
            .toISO();
        const userLogged = await this.userService.findByUsername(user.name);
        const { id, email, name, wallet } = userLogged;
        const userResponse = { id, email, name, wallet };
        return { token, expiresIn, user: userResponse };
    }
    async validate(name, password) {
        try {
            const user = await this.userService.findByUsername(name);
            const isValid = await this.userService.validatePassword(password, user.password);
            console.log(isValid);
            if (!isValid)
                throw new Error();
            delete user.password;
            return user;
        }
        catch (error) {
            throw new common_1.ForbiddenException('E-mail e/ou senha estão inválidos');
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map