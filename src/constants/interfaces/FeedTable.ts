import { FeedEntity } from 'src/feeds/entities/feed.entity';
export interface FeedTable {
  feedId: FeedEntity;
  fcrForSizes: Record<string, number> | null;
  temperatureFeedDoses: Record<string, unknown>;
}
