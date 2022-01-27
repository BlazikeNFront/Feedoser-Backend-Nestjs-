import { Module } from '@nestjs/common';
import { TankAnnotationsService } from './tank-annotations.service';
import { TankAnnotationsController } from './tank-annotations.controller';

@Module({
  controllers: [TankAnnotationsController],
  providers: [TankAnnotationsService]
})
export class TankAnnotationsModule {}
