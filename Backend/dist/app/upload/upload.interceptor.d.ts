import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UploadService } from './upload.service';
export declare class ImageCompressionInterceptor implements NestInterceptor {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
