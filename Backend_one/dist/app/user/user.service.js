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
exports.UserService = void 0;
const crypto_1 = require("crypto");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const character_service_1 = require("../character/character.service");
const jwt_1 = require("@nestjs/jwt");
const nodemailer = require("nodemailer");
let UserService = class UserService {
    constructor(prisma, charService, jwtService) {
        this.prisma = prisma;
        this.charService = charService;
        this.jwtService = jwtService;
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'farminelandrecovery@gmail.com',
                pass: 'vrrj ctam jbxk yjda',
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }
    async findAll() {
        return this.prisma.account.findMany();
    }
    async createNew(data) {
        try {
            const hashedPassword = await this.hashPassword(data.password);
            const nobody = data.name.toLowerCase();
            if (nobody === 'nobody') {
                throw new common_1.BadRequestException('Cannot create name');
            }
            const user = await this.prisma.account.create({
                data: {
                    name: data.name,
                    email: data.email,
                    password: hashedPassword,
                    premdays: 0,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findOneById(id) {
        try {
            const user = await this.prisma.account.findUnique({
                where: { id },
            });
            const players = await this.charService.findAllByUser(id);
            return Object.assign(Object.assign({}, user), { players });
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findByEmail(email) {
        try {
            const user = await this.prisma.account.findFirstOrThrow({
                where: { email },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with email ${email} not found`);
            }
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async findByUsername(name) {
        try {
            const user = await this.prisma.account.findUnique({
                where: { name },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with username ${name} not found`);
            }
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
    async updateById(id, data) {
        try {
            if (data.password)
                data.password = await this.hashPassword(data.password);
            await this.prisma.account.update({
                where: { id },
                data,
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteById(id) {
        try {
            const user = await this.prisma.account.findUnique({ where: { id } });
            if (!user) {
                throw new common_1.NotFoundException(`User with id ${id} not found`);
            }
            await this.prisma.account.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async requestPasswordReset(payload) {
        const user = await this.findByEmail(payload.email);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const token = await this.jwtService.signAsync({ id: user.id, email: user.email }, { expiresIn: '24h' });
        const resetLink = `${payload.redirect_link}?token=${token}`;
        const email = await this.sendMail(user.email, 'Recuperação de Senha - Farmine Land', `<!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recuperação de Senha - Farmine Land</title>
        </head>
        <body>
            <p>Olá ${user.name},</p>
            <p>Recebemos uma solicitação para redefinir a sua senha. Se você não fez essa solicitação, por favor, ignore este e-mail. Caso contrário, siga as instruções abaixo para redefinir sua senha.</p>
            <p>Para redefinir sua senha, clique no botão abaixo:</p>
            <p><a href="${resetLink}" style="background-color: rgb(249 115 22); color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Redefinir Senha</a></p>
            <p>Este link é válido por 24 horas. Se o link expirar, você precisará solicitar uma nova recuperação de senha.</p>
            <p>Atenciosamente,<br>Equipe Farmine Land</p>
        </body>
      </html>`);
        return token;
    }
    async sendMail(to, subject, html) {
        return await this.transporter.sendMail({
            from: '"Farmine Land" <farminelandrecovery@gmail.com>',
            to,
            subject,
            html,
        });
    }
    async resetPassword(body) {
        const { token, newPassword } = body;
        try {
            const payload = await this.verifyToken(token);
            const hashedPassword = await this.hashPassword(newPassword);
            await this.prisma.account.update({
                where: { id: payload.id },
                data: { password: hashedPassword },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid token or expired token');
        }
    }
    async hashPassword(password) {
        return (0, crypto_1.createHash)('sha1').update(password).digest('hex');
    }
    async validatePassword(password, hash) {
        const hashedPassword = (0, crypto_1.createHash)('sha1').update(password).digest('hex');
        return hashedPassword === hash;
    }
    async verifyToken(token) {
        try {
            return await this.jwtService.verifyAsync(token);
        }
        catch (e) {
            console.log(e);
            throw new Error('Token inválido');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => character_service_1.CharacterService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        character_service_1.CharacterService,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map