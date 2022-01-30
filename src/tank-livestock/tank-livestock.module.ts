import { Module } from '@nestjs/common';
import { TankLivestockService } from './tank-livestock.service';
import { TankLivestockController } from './tank-livestock.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tank, TankSchema } from '../tank/entities/tank.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tank.name, schema: TankSchema }]),
  ],
  controllers: [TankLivestockController],
  providers: [TankLivestockService],
})
export class TankLivestockModule {}
