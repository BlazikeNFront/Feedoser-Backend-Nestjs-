import { Module } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { TankFeedInformationController } from './tank-feed-information.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tank, TankSchema } from '../tank/entities/tank.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tank.name, schema: TankSchema }]),
  ],
  controllers: [TankFeedInformationController],
  providers: [TankFeedInformationService],
})
export class TankFeedInformationModule {}
