import { PrismaService } from 'src/database/prisma.service';
import { UploadService } from '../upload/upload.service';
import { RaffleDto } from './dto/raffle.dto';
export declare class LandsService {
    private readonly prisma;
    private readonly uploadService;
    constructor(prisma: PrismaService, uploadService: UploadService);
    loadHistorico(): Promise<any>;
    saveHistorico(historico: string[]): Promise<void>;
    findAll(): Promise<number>;
    getFilesBySize(files: string[], sizeCodes: string[]): Promise<string[]>;
    getRandomFile(files: string[]): Promise<string>;
    getAvailableFiles(historico: string[], allFiles: string[]): Promise<string[]>;
    extractCategoryFromUrl(url: string): Promise<string>;
    raffleLand(payload: RaffleDto): Promise<string>;
    findAllSavedLand(): Promise<string[]>;
    parseString(input: string): Promise<any>;
}
