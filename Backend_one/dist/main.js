"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const bodyParser = require("body-parser");
const path_1 = require("path");
const class_validator_1 = require("class-validator");
const BigInt_validator_1 = require("./validators/BigInt.validator");
const express_rate_limit_1 = require("express-rate-limit");
const helmet_1 = require("helmet");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const BACKEND_PORT = 3333;
    app.use((req, res, next) => {
        const host = req.hostname;
        const subdomainFiles = {
            'sv1.farmineland.online': 'sv1.html',
            'ph.farmineland.online': 'ph.html',
            'webc.farmineland.online': 'webc.html',
            'eu.farmineland.online': 'eu.html',
            'ch.farmineland.online': 'ch.html',
            'af.farmineland.online': 'af.html',
            'sa.farmineland.online': 'sa.html',
            'sv1.farmine.land': 'sv1.html',
        };
        if (subdomainFiles[host]) {
            const filePath = path.join(__dirname, '..', 'static', subdomainFiles[host]);
            res.sendFile(filePath, (err) => {
                if (err) {
                    res.status(404).send(`<h1>404 - File Not Found for ${host}</h1>`);
                }
            });
        }
        else {
            next();
        }
    });
    app.enableCors({
        origin: [
            'https://farmine.land',
            'https://front-end2.pages.dev',
            'https://front-dev2.pages.dev',
            'https://sv1.farmineland.online',
            'https://ph.farmineland.online',
            'https://webc.farmineland.online',
            'https://eu.farmineland.online',
            'https://ch.farmineland.online',
            'https://af.farmineland.online',
            'https://sa.farmineland.online',
            'https://sv1.farmine.land',
        ],
        methods: 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    app.use((0, helmet_1.default)({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
            },
        },
    }));
    app.use((0, express_rate_limit_1.rateLimit)({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle("Farmine API's")
            .setVersion('1.0.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'static'), {
        prefix: '/static/',
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalInterceptors(new BigInt_validator_1.BigIntToNumberInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, forbidNonWhitelisted: true }));
    await app.listen(BACKEND_PORT, () => {
        console.log(`Backend is running on port ${BACKEND_PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map