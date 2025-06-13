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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCompressionInterceptor = void 0;
const common_1 = require("@nestjs/common");
const upload_service_1 = require("./upload.service");
let ImageCompressionInterceptor = class ImageCompressionInterceptor {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        if (req.file) {
            const file = req.file;
            const buffer = await this.uploadService.getFileBuffer(file.path);
            file.buffer = buffer;
            try {
                const compressedFilePath = await this.uploadService.compressImage(file);
                req.file['compressedFilePath'] = compressedFilePath;
            }
            catch (error) {
                console.error('Failed to compress image:', error.message);
                throw new Error(`Failed to compress image: ${error.message}`);
            }
        }
        return next.handle();
    }
};
ImageCompressionInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], ImageCompressionInterceptor);
exports.ImageCompressionInterceptor = ImageCompressionInterceptor;
//# sourceMappingURL=upload.interceptor.js.map