import { Module } from '@nestjs/common';
import { TankAnnotationsService } from './tank-annotations.service';
import { TankAnnotationsController } from './tank-annotations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tank, TankSchema } from '../tank/entities/tank.entity';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tank.name, schema: TankSchema }]),
  ],
  controllers: [TankAnnotationsController],
  providers: [TankAnnotationsService],
})
export class TankAnnotationsModule {}
