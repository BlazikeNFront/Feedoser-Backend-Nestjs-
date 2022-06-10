import { FeedForSpecieEntity } from '../../feeds-for-species/entities/feeds-for-specie.entity';
import { ExistingFeedDto } from 'src/feed/dto/create-feed.dto';
import { SpeciesValues } from '../enums/Species';
export interface TankFeedForSpecie {
  feed: ExistingFeedDto;
  specie: SpeciesValues;
  minSize: number;
  maxSize: null | number;
  fcr: number;
  size: string;
  weightBreakpoints: Record<string, number> | null;
}

export interface CurrentTankFeed {
  feedForSpecie: TankFeedForSpecie;
  isProposed: boolean;
}
