import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  Transport,
  MicroserviceOptions,
  RmqOptions,
} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3334, () =>
    console.log(
      'MicroServiceOne running, connect to RMQ and expose HTTP post on 3334',
    ),
  );
}
bootstrap();
