import { FeedProgramUpdateFrequency } from '../enums/FeedSelect';
import { TypesOfFeedProgram } from '../enums/FeedSelect';
import { FeedDose } from './FeedDose';
import { Feed } from './Feed';
export interface FeedInformation {
  currentFeed: Feed | null;
  usedFeedTotalWeight: number;
  feedProgram: FeedDose[];
  typeOfProgram: TypesOfFeedProgram | null;
  doseUpdateFrequency: FeedProgramUpdateFrequency | null;
  defaultTemperature: number | null;
}
