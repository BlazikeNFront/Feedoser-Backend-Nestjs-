import { IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { CurrentTankFeed, Feed } from 'src/constants/interfaces/Feed';
import { FeedDto } from 'src/feeds-type/dto/Feed.dto';

export class CurrentTankFeedDto implements CurrentTankFeed {
  @Type(() => FeedDto)
  feed: Feed;
  @IsBoolean()
  isProposed: boolean;
}
