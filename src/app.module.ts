import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TanksController } from './tanks/tanks.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot()],
  controllers: [AppController, TanksController],
  providers: [AppService],
})
export class AppModule {}
