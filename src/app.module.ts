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

import { FeedTableModule } from './feed-tables/feed-table.module';
import { FeedModule } from './feed/feed.module';
import { FeedsForSpeciesModule } from './feeds-for-species/feeds-for-species.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB),
    UserModule,
    TankModule,
    TankLivestockModule,
    TankFeedInformationModule,
    TankAnnotationsModule,
    FeedTableModule,
    FeedModule,
    FeedsForSpeciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
