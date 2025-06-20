/// <reference types="node" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { CharacterService } from '../character/character.service';
import { JwtService } from '@nestjs/jwt';
import { ResetPassReqDto, ResetPassDto } from './dto/resetPassReqDto.dto copy';
export declare class UserService {
    private readonly prisma;
    private readonly charService;
    private readonly jwtService;
    private transporter;
    constructor(prisma: PrismaService, charService: CharacterService, jwtService: JwtService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        password: string;
        secret: string;
        type: number;
        premium_ends_at: number;
        email: string;
        creation: number;
        premium_points: number;
        premdays: number;
        wallet: string;
        alpha_key: string;
    }, unknown, never> & {})[]>;
    createNew(data: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        password: string;
        secret: string;
        type: number;
        premium_ends_at: number;
        email: string;
        creation: number;
        premium_points: number;
        premdays: number;
        wallet: string;
        alpha_key: string;
    }, unknown, never> & {}>;
    findOneById(id: number): Promise<{
        players: (import("@prisma/client/runtime").GetResult<{
            id: number;
            name: string;
            group_id: number;
            account_id: number;
            level: number;
            vocation: number;
            health: number;
            healthmax: number;
            experience: bigint;
            lookbody: number;
            lookfeet: number;
            lookhead: number;
            looklegs: number;
            looktype: number;
            lookaddons: number;
            direction: number;
            maglevel: number;
            mana: number;
            manamax: number;
            manaspent: bigint;
            soul: number;
            town_id: number;
            posx: number;
            posy: number;
            posz: number;
            conditions: Buffer;
            cap: number;
            sex: number;
            lastlogin: bigint;
            lastip: number;
            save: boolean;
            skull: boolean;
            skulltime: bigint;
            lastlogout: bigint;
            blessings: number;
            onlinetime: bigint;
            deletion: bigint;
            balance: bigint;
            offlinetraining_time: number;
            offlinetraining_skill: number;
            stamina: number;
            skill_fist: number;
            skill_fist_tries: bigint;
            skill_club: number;
            skill_club_tries: bigint;
            skill_sword: number;
            skill_sword_tries: bigint;
            skill_axe: number;
            skill_axe_tries: bigint;
            skill_dist: number;
            skill_dist_tries: bigint;
            skill_shielding: number;
            skill_shielding_tries: bigint;
            skill_fishing: number;
            skill_fishing_tries: bigint;
            stat_str: number;
            stat_int: number;
            stat_dex: number;
            stat_vit: number;
            stat_spr: number;
            stat_wis: number;
        }, unknown, never> & {})[];
        name: string;
        email: string;
        password: string;
        id: number;
        secret: string;
        type: number;
        premium_ends_at: number;
        creation: number;
        premium_points: number;
        premdays: number;
        wallet: string;
        alpha_key: string;
    }>;
    findByEmail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        password: string;
        secret: string;
        type: number;
        premium_ends_at: number;
        email: string;
        creation: number;
        premium_points: number;
        premdays: number;
        wallet: string;
        alpha_key: string;
    }, unknown, never> & {}>;
    findByUsername(name: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        password: string;
        secret: string;
        type: number;
        premium_ends_at: number;
        email: string;
        creation: number;
        premium_points: number;
        premdays: number;
        wallet: string;
        alpha_key: string;
    }, unknown, never> & {}>;
    updateById(id: number, data: Partial<UpdateUserDto>): Promise<void>;
    deleteById(id: number): Promise<void>;
    requestPasswordReset(payload: ResetPassReqDto): Promise<string>;
    sendMail(to: string, subject: string, html: string): Promise<any>;
    resetPassword(body: ResetPassDto): Promise<void>;
    hashPassword(password: string): Promise<string>;
    validatePassword(password: string, hash: string): Promise<boolean>;
    verifyToken(token: string): Promise<any>;
}
