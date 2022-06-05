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
import { FeedsTypeModule } from './feeds-type/feeds-type.module';
import { FeedsForSpecieModule } from './feeds-for-specie/feeds-for-specie.module';
import { FeedTableModule } from './feed-table/feed-table.module';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB),
    UserModule,
    TankModule,
    TankLivestockModule,
    TankFeedInformationModule,
    TankAnnotationsModule,
    FeedsTypeModule,
    FeedsForSpecieModule,
    FeedTableModule,
    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
