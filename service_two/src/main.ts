import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions, RmqOptions } from '@nestjs/microservices';

const amqpConnection: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672'],
    queue: 'service_two',
    queueOptions: {
      durable: false
    },
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(
    amqpConnection,
  );

  await app.startAllMicroservicesAsync()
  await app.listen(3334, ()=> console.log('MicroServiceOne running, connect to RMQ and expose HTTP post on 3334'));
}
bootstrap();
