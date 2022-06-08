import { Module } from '@nestjs/common';
import { FeedTableService } from './feed-table.service';
import { FeedTableController } from './feed-table.controller';

@Module({
  controllers: [FeedTableController],
  providers: [FeedTableService],
})
export class FeedTableModule {}
