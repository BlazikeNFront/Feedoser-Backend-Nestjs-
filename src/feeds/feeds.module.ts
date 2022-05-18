import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';
import { FeedTableEntity, FeedTableEntitySchema } from './entities/feed.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedTableEntity.name, schema: FeedTableEntitySchema },
    ]),
  ],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}
