import { Module } from '@nestjs/common';
import { TankLivestockService } from './tank-livestock.service';
import { TankLivestockController } from './tank-livestock.controller';

@Module({
  controllers: [TankLivestockController],
  providers: [TankLivestockService]
})
export class TankLivestockModule {}
