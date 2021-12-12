import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TanksController } from './tanks/tanks.controller';

@Module({
  imports: [],
  controllers: [AppController, TanksController],
  providers: [AppService],
})
export class AppModule {}
