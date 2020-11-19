import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { from, Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/sum')
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): Observable<number> {
    return from([1, 2, 3]);
  }
}
