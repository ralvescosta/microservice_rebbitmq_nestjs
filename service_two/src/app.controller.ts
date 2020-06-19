import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sendMessage/one')
  sendHelloWord(): Promise<string> {
    return this.appService.sendHelloWord();
  }

  @EventPattern('message_printed')
  async receivedHello(@Payload() data: any, @Ctx() context: RmqContext): Promise<any> {
    return this.appService.receivedHelloWord(data,context)
  }
}
