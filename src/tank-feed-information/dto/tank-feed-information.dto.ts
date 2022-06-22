import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { TypesOfFeedProgram } from 'src/constants/enums/FeedSelect';

import {
  IsEnum,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FeedDoseDto } from './feed-dose.dto';
import { CurrentTankFeedDto } from './current-tank-feed.dto';

export class TankFeedInformationDto implements FeedInformation {
  @IsOptional()
  @Type(() => CurrentTankFeedDto)
  currentFeed: CurrentTankFeedDto | null;
  @IsOptional()
  usedFeedTotalWeight: number | null;
  @ValidateNested({ each: true })
  @Type(() => FeedDoseDto)
  feedProgram: FeedDoseDto[];
  @IsOptional()
  @IsEnum(TypesOfFeedProgram)
  typeOfProgram: TypesOfFeedProgram | null;
  @IsPositive()
  @IsOptional()
  doseUpdateFrequency: number | null;
  @IsPositive()
  @IsOptional()
  defaultTemperature: number | null;
}
