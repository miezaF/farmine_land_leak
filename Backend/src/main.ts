import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import { join } from 'path';
import { useContainer } from 'class-validator';
import { BigIntToNumberInterceptor } from './validators/BigInt.validator';
import { rateLimit } from 'express-rate-limit';
import * as dns from 'dns/promises'; // Importação do DNS
import * as childProcess from 'child_process';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Subdomains to check
  const subdomains = [
    'sv1.farmineland.online',
    'ph.farmineland.online',
    'webc.farmineland.online',
    'eu.farmineland.online',
    'ch.farmineland.online',
    'af.farmineland.online',
    'sa.farmineland.online',
  ];

  // Function to test connectivity via DNS and CURL
  async function checkSubdomains() {
    const results = await Promise.all(
      subdomains.map(async (subdomain) => {
        try {
          // DNS resolution
          const dnsResolved = await dns.lookup(subdomain);
          // Curl command to check connectivity
          const curlResult = childProcess.execSync(`curl -Is http://${subdomain} | head -n 1`, {
            encoding: 'utf-8',
          });

          // Return positive result
          return {
            subdomain,
            dns: dnsResolved.address,
            curl: curlResult.includes('200 OK') ? 'Active' : 'Inactive',
          };
        } catch (error) {
          // Return negative result
          return {
            subdomain,
            dns: 'Not resolved',
            curl: 'Inactive',
          };
        }
      }),
    );

    return results;
  }

  // Middleware for identifying and testing subdomains
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
    } else {
      next();
    }
  });

  // Enable CORS for specific trusted domains
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
  app.useStaticAssets(join(__dirname, '..', 'metadata'), {
    prefix: '/metadata/',
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalInterceptors(new BigIntToNumberInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidNonWhitelisted: true }),
  );

  // Swagger configuration (for non-production environments)
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle("Farmine API's")
      .setVersion('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(3333);
}

bootstrap();
