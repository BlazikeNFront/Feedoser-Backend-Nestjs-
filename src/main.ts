import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedExceptionFilter } from './filters/Unauthorized-exception.filters';
import { GlobalExceptionFilter } from './filters/Global-exception.filters';

import * as cookieParser from 'cookie-parser';
console.log(process.env.NODE_ENV);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.FRONTEND_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(cookieParser());
  app.useGlobalFilters(
    new UnauthorizedExceptionFilter(),
    new GlobalExceptionFilter(),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
