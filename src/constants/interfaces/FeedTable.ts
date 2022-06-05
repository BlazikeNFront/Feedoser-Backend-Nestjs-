import { FeedType } from 'src/feeds-type/entities/feedType.entity';
export interface FeedTable {
  feedId: FeedType;
  fcrForSizes: Record<string, number> | null;
  temperatureFeedDoses: Record<string, unknown>;
}
