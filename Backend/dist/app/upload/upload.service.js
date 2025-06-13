"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const sharp = require("sharp");
let UploadService = class UploadService {
    async compressImage(file) {
        try {
            const compressedBuffer = await sharp(file.buffer)
                .resize(500)
                .webp({ quality: 80 })
                .toBuffer();
            const compressedFilePath = `uploads/${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1e9)}.webp`;
            await sharp(compressedBuffer).toFile(compressedFilePath);
            return compressedFilePath;
        }
        catch (error) {
            console.error('Failed to compress image:', error.message);
            throw new Error(`Failed to compress image: ${error.message}`);
        }
    }
    async getFileBuffer(filePath) {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(filePath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
    async saveJsonFile(data, filename) {
        const path = './metadata/collection/land/landspot/';
        const filenameNew = `${filename}.json`;
        await (0, fs_extra_1.ensureDir)(path);
        const filePath = (0, path_1.join)(path, filenameNew);
        await (0, fs_extra_1.writeFile)(filePath, JSON.stringify(data, null, 2), 'utf8');
        return filePath;
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map