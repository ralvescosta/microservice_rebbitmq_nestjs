import { Module } from '@nestjs/common';

import { RabbitMessage } from './Message/message.module';

@Module({
  imports: [RabbitMessage],
})
export class AppModule {}
