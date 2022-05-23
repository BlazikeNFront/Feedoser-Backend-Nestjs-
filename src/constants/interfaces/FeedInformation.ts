import { TypesOfFeedProgram } from '../enums/FeedSelect';
import { FeedDose } from './FeedDose';
export interface FeedInformation {
  currentFeedId: string | null;
  usedFeedTotalWeight: number | null;
  feedProgram: FeedDose[];
  typeOfProgram: TypesOfFeedProgram | null;
  doseUpdateFrequency: number | null;
  defaultTemperature: number | null;
  currentLivestockWeight: number | null;
}
