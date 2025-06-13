import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<{
        token: string;
        expiresIn: string;
        user: {
            id: number;
            email: string;
            name: string;
            wallet: string;
        };
    }>;
}
