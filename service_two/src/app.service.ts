import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  // @RabbitSubscribe({
  //   exchange: 'test',
  //   routingKey: 'subscribe-route',
  //   queue: 'service_one',
  // })
  // async sendHelloWord(): Promise<string> {
  //   this.client.emit<any>('message_printed', 'Hello World!');
  //   return 'Hello World!';
  // }
  // async receivedHelloWord(data: any, ctx: any): Promise<string> {
  //   console.log(data, ctx);
  //   return 'Hello World!';
  // }
}
