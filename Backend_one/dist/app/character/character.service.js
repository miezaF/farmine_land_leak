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
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
const user_service_1 = require("../user/user.service");
let CharacterService = class CharacterService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async findAll() {
        return this.prisma.player.findMany();
    }
    async findAllByUser(id) {
        return this.prisma.player.findMany({ where: { account_id: id } });
    }
    async createNew(data) {
        var _a;
        try {
            const nobody = data.name.toLowerCase();
            if (nobody === 'nobody') {
                throw new common_1.BadRequestException('Cannot create name');
            }
            const user = await this.userService.findOneById(data.account_id);
            if (((_a = user.players) === null || _a === void 0 ? void 0 : _a.length) === 4) {
                throw new common_1.BadRequestException('Cannot create another character');
            }
            return await this.prisma.player.create({
                data: {
                    name: data.name,
                    sex: data.sex,
                    account_id: data.account_id,
                    conditions: Buffer.from('undefined', 'utf-8'),
                    skill_axe: 10,
                    skill_sword: 10,
                    skill_shielding: 10,
                    mana: 50,
                    manamax: 50,
                    skill_fist_tries: 10,
                    skill_club: 10,
                    skill_dist: 10,
                    skill_fishing: 10,
                },
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async findOneById(id) {
        try {
            const player = await this.prisma.player.findUnique({
                where: { id },
            });
            if (!player) {
                throw new common_1.NotFoundException(`Player with id ${id} not found`);
            }
            return player;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Player with id ${id} not found`);
        }
    }
    async updateById(id, data) {
        try {
            const updatedPlayer = await this.prisma.player.update({
                where: { id },
                data,
            });
            if (!updatedPlayer) {
                throw new common_1.NotFoundException(`Player with id ${id} not found`);
            }
        }
        catch (error) {
            throw new common_1.NotFoundException(`Player with id ${id} not found`);
        }
    }
    async deleteById(id) {
        try {
            const player = await this.prisma.player.findUnique({ where: { id } });
            if (!player) {
                throw new common_1.NotFoundException(`Player with id ${id} not found`);
            }
            await this.prisma.player.delete({ where: { id } });
        }
        catch (error) {
            throw new common_1.NotFoundException(`Player with id ${id} not found`);
        }
    }
};
CharacterService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => user_service_1.UserService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map