import { IsBoolean, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { CurrentTankFeed } from 'src/constants/interfaces/Feed';
import { FeedEntity } from 'src/feed/entities/feed.entity';

export class CurrentTankFeedDto implements CurrentTankFeed {
  @Type(() => FeedEntity)
  feed: FeedEntity;
  @IsBoolean()
  isProposed: boolean;
}
