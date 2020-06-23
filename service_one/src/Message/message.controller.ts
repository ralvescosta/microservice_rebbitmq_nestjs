import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Controller, Injectable } from '@nestjs/common';
import { Payload, EventPattern, MessagePattern } from '@nestjs/microservices';
import { MessageService } from './message.service';

@Injectable()
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    private amqpConnect: AmqpConnection,
  ) {}

  @RabbitSubscribe({
    exchange: 'teste',
    routingKey: '1',
    queue: 'queue1',
    allowNonJsonMessages: true,
  })
  public async teste(msg: any) {
    this.messageService.semnome(msg);
  }

  @RabbitSubscribe({
    exchange: 'teste',
    routingKey: '2',
    queue: 'queue2',
    allowNonJsonMessages: true,
  })
  public async teste2(msg: any) {
    this.messageService.semnome(msg);
  }

  @RabbitSubscribe({
    exchange: 'teste',
    routingKey: '3',
    queue: 'queue3',
    allowNonJsonMessages: true,
  })
  public async teste3(msg: any) {
    this.messageService.semnome(msg);
  }
}
