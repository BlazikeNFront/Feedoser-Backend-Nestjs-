import { FeedQuality } from '../enums/FeedQuality';
export interface FeedType {
  name: string;
  size: string;
  quality: FeedQuality;
  fileName: string;
}
export interface Feed {
  feedType: FeedType;
  size: string;
  minWeight: number | null;
  maxWeight: number | null;
  fcr: number;
}
export interface CurrentTankFeed {
  feed: Feed;
  isProposed: boolean;
}
