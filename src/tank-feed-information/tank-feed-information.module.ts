import { Module } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { TankFeedInformationController } from './tank-feed-information.controller';

@Module({
  controllers: [TankFeedInformationController],
  providers: [TankFeedInformationService]
})
export class TankFeedInformationModule {}
