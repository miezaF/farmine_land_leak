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
import helmet from 'helmet';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Enable CORS for specific trusted domains
  app.enableCors({
    origin: ['https://farmine.land', 'https://front-end2.pages.dev', 'https://front-dev2.pages.dev'], 
    methods: 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

app.use(helmet());

app.use(rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
}));

  // Configure Swagger only for non-production environments
  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle("Farmine API's")
      .setVersion('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  // Limit the size of incoming JSON requests to 1MB
  app.use(bodyParser.json({ limit: '1mb' }));
  app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));

  // Serve static assets
  app.useStaticAssets(join(__dirname, '..', 'metadata'), {
    prefix: '/metadata/',
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalInterceptors(new BigIntToNumberInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, forbidNonWhitelisted: true }),
  );
  await app.listen(3333);
}
bootstrap();
