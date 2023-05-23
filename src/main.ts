import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';
import * as nunjucks from 'nunjucks';

console.log("File dir: ",__dirname)

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const express = app.getHttpAdapter().getInstance();
  const views = join(__dirname, '..', 'views');
  nunjucks.configure(views, { express });
  const statisAssets = join(__dirname, '..', 'static/public');
  app.useStaticAssets(statisAssets);

  await app.listen(3000);
  
}
bootstrap();
