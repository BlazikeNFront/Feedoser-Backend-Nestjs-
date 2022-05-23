export interface FeedTable {
  feedId: string;
  fcrForSizes: Record<string, null | number>;
  temperatureFeedDoses: Record<string, unknown>;
}
