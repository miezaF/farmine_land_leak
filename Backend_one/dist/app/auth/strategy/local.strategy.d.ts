import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStragey_base: new (...args: any[]) => Strategy;
export declare class LocalStragey extends LocalStragey_base {
    private readonly authService;
    constructor(authService: AuthService);
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
export {};
