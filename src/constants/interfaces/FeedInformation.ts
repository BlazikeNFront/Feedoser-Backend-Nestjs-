import { TypesOfFeedProgram } from '../enums/FeedSelect';
import { Feed } from './Feed';
import { FeedDose } from './FeedDose';
export interface FeedInformation {
  currentFeed: Feed | null;
  usedFeedTotalWeight: number | null;
  feedProgram: FeedDose[];
  typeOfProgram: TypesOfFeedProgram | null;
  doseUpdateFrequency: number | null;
  defaultTemperature: number | null;
  currentLivestockWeight: number | null;
}
