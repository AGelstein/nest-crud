import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsController } from './controllers/cat/cat.controller';

@Module({
  controllers: [CatsController],
  providers: [AppService],
})
export class AppModule {}
