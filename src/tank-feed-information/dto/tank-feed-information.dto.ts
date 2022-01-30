import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { Feed } from 'src/constants/interfaces/Feed';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { TypesOfFeedProgram } from 'src/constants/enums/FeedSelect';
import { FeedProgramUpdateFrequency } from 'src/constants/enums/FeedSelect';
export class TankFeedInformationDto implements FeedInformation {
  currentFeed: Feed | null;
  totalWeight: number;
  feedProgram: FeedDose[];
  typeOfProgram: TypesOfFeedProgram | null;
  doseUpdateFrequency: FeedProgramUpdateFrequency | null;
  defaultTemperature: number | null;
}
