import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: LoginDto): Promise<{
        token: string;
        expiresIn: string;
        user: {
            id: number;
            email: string;
            name: string;
            wallet: string;
        };
    }>;
    validate(name: string, password: string): Promise<import("@prisma/client/runtime").GetResult<{
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
}
