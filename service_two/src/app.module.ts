import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'teste',
          type: 'direct',
        },
      ],

      uri: 'amqp://localhost:5672',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
