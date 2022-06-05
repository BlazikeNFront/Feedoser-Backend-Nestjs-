import { Module } from '@nestjs/common';
import { FeedTableService } from './feed-table.service';
import { FeedTableController } from './feed-table.controller';
import {
  FeedTableEntity,
  FeedTableEntitySchema,
} from './entities/feed-table.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedTableEntity.name, schema: FeedTableEntitySchema },
    ]),
  ],
  controllers: [FeedTableController],
  providers: [FeedTableService],
})
export class FeedTableModule {}
