/// <reference types="multer" />
import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadImage(file: Express.Multer.File): Promise<{
        message: string;
        imageUrl: string;
    }>;
}
