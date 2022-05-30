import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TankModule } from './tank/tank.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TankLivestockModule } from './tank-livestock/tank-livestock.module';
import { TankFeedInformationModule } from './tank-feed-information/tank-feed-information.module';
import { TankAnnotationsModule } from './tank-annotations/tank-annotations.module';
import { FeedsModule } from './feeds/feeds.module';
import { SpecieWeightBreakpointsModule } from './specie-weight-breakpoints/specie-weight-breakpoints.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB),
    UserModule,
    TankModule,
    TankLivestockModule,
    TankFeedInformationModule,
    TankAnnotationsModule,
    FeedsModule,
    SpecieWeightBreakpointsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
