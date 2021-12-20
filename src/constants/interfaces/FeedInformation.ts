import { FeedProgramUpdateFrequency } from '../enums/FeedProgramUpdateFrequency';
import { TypesOfFeedProgram } from '../enums/TypesOfFeedProgram';
export class FeedInformation {
  currentFeed: Feed;
  totalWeight: number;
  feedProgram: SingleDose[];
  typeOfProgram: TypesOfFeedProgram;
  doseUpdateFrequency?: FeedProgramUpdateFrequency;
  defaultTemperature?: number;
}

export class Feed {
  name: string;
  size: string;
  fcr: number;
}
export class SingleDose {
  number: number;
  weight: number;
  date: string | null;
  terminated: number;
  weightGainAfterDose: number;
}
