import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { EventPattern, Ctx } from '@nestjs/microservices';

@Injectable()
export class MessageService {
  // @RabbitSubscribe({
  //   exchange: 'teste',
  //   routingKey: 'ola',
  //   queue: 'bodao',
  //   allowNonJsonMessages: true,
  // })
  // @EventPattern()
  public async semnome(msg: {}) {
    return console.log(msg);
  }
}
