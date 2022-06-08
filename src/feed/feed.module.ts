import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedEntity, FeedEntitySchema } from './entities/feed.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FeedEntity.name,
        schema: FeedEntitySchema,
      },
    ]),
  ],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
