import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import {
  AmqpConnection,
  InjectRabbitMQConfig,
} from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post('/')
  sendHelloWord(): Promise<any> {
    this.amqpConnection.publish('teste', '1', {
      helloWord: 'Hello Word',
    });
    return;
  }
}
