import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [
    RabbitMQModule.build({
      exchanges: [
        {
          name: 'teste',
          type: 'direct',
        },
      ],
      uri: 'amqp://localhost:5672',
    }),
  ],
  providers: [MessageService, MessageController],
})
export class RabbitMessage {}
