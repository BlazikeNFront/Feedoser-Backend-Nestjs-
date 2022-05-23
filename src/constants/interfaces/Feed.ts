import { FeedQuality } from '../enums/FeedQuality';
export interface Feed {
  name: string;
  size: string;
  quality: FeedQuality;
  fileName: string;
}
