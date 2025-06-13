import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { PrismaService } from 'src/database/prisma.service';
export declare class IsUnique implements ValidatorConstraintInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validate(value: any, args?: ValidationArguments): Promise<boolean>;
    defaultMessage(validationArguments: ValidationArguments): string;
}
