import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tank, TankSchema } from './entities/tank.entity';
import { TankController } from './tank.controller';
import { TankService } from './tank.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tank.name, schema: TankSchema }]),
  ],
  controllers: [TankController],
  providers: [TankService],
})
export class TankModule {}
