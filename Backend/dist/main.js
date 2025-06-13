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
const dns = require("dns/promises");
const childProcess = require("child_process");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const subdomains = [
        'sv1.farmineland.online',
        'ph.farmineland.online',
        'webc.farmineland.online',
        'eu.farmineland.online',
        'ch.farmineland.online',
        'af.farmineland.online',
        'sa.farmineland.online',
    ];
    async function checkSubdomains() {
        const results = await Promise.all(subdomains.map(async (subdomain) => {
            try {
                const dnsResolved = await dns.lookup(subdomain);
                const curlResult = childProcess.execSync(`curl -Is http://${subdomain} | head -n 1`, {
                    encoding: 'utf-8',
                });
                return {
                    subdomain,
                    dns: dnsResolved.address,
                    curl: curlResult.includes('200 OK') ? 'Active' : 'Inactive',
                };
            }
            catch (error) {
                return {
                    subdomain,
                    dns: 'Not resolved',
                    curl: 'Inactive',
                };
            }
        }));
        return results;
    }
    app.use(async (req, res, next) => {
        if (req.originalUrl === '/') {
            const testResults = await checkSubdomains();
            let output = '<html><body><h1>Subdomain Test Results</h1><table border="1">';
            output += '<tr><th>Subdomain</th><th>DNS</th><th>Connection</th></tr>';
            testResults.forEach((result) => {
                output += `<tr><td>${result.subdomain}</td><td>${result.dns}</td><td>${result.curl}</td></tr>`;
            });
            output += '</table></body></html>';
            res.send(output);
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
        ],
        methods: 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    app.use(bodyParser.json({ limit: '1mb' }));
    app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'metadata'), {
        prefix: '/metadata/',
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.useGlobalInterceptors(new BigInt_validator_1.BigIntToNumberInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, forbidNonWhitelisted: true }));
    if (process.env.NODE_ENV !== 'production') {
        const config = new swagger_1.DocumentBuilder()
            .setTitle("Farmine API's")
            .setVersion('1.0.0')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map