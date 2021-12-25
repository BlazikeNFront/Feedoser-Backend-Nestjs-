import { Module } from '@nestjs/common';
import { TankController } from './tank.controller';
import { TankService } from './tank.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TankController],
  providers: [TankService],
})
export class TankModule {}
