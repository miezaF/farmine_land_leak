import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    enableShutDownHooks(app: NestApplication): void;
}
