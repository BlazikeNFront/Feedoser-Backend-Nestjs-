import { FeedEntity } from 'src/feed/entities/feed.entity';

export interface CurrentTankFeed {
  feed: FeedEntity;
  isProposed: boolean;
}
