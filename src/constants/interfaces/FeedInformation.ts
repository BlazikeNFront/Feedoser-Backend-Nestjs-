import { TypesOfFeedProgram } from '../enums/FeedSelect';
import { FeedDose } from './FeedDose';
import { Feed } from './Feed';
export interface FeedInformation {
  currentFeed: Feed | null;
  usedFeedTotalWeight: number | null;
  feedProgram: FeedDose[];
  typeOfProgram: TypesOfFeedProgram | null;
  doseUpdateFrequency: number | null;
  defaultTemperature: number | null;
  currentLivestockWeight: number | null;
}
