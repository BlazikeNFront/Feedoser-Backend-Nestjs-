import { Module } from '@nestjs/common';
import { TankLivestockInformationService } from './tank-livestock-information.service';
import { TankLivestockInformationController } from './tank-livestock-information.controller';

@Module({
  controllers: [TankLivestockInformationController],
  providers: [TankLivestockInformationService]
})
export class TankLivestockInformationModule {}
