/// <reference types="multer" />
/// <reference types="node" />
export declare class UploadService {
    compressImage(file: Express.Multer.File): Promise<string>;
    getFileBuffer(filePath: string): Promise<Buffer>;
    saveJsonFile(data: any, filename: string): Promise<string>;
}
