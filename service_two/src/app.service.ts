import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) { }

  async sendHelloWord(): Promise<string> {
    this.client.emit<any>('message_printed', 'Hello World!');

    return 'Hello World!';
  }

  async receivedHelloWord(data: any, ctx: any): Promise<string> {
    console.log(data, ctx)
    return 'Hello World!';
  }
}
