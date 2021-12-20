import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TankModule } from './modules/tank/tank.module';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), TankModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
