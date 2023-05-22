import { Controller, Get,Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }
  @Get()
  @Render('index.html')
  getHome(): {} {
    return this.appService.getHome();
   }
  @Get('about-us')
  @Render('index.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
   }
}
