import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { Feed } from 'src/constants/interfaces/Feed';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { TypesOfFeedProgram } from 'src/constants/enums/FeedSelect';

import {
  IsEnum,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FeedDto } from './feed.dto';
import { FeedDoseDto } from './feed-dose.dto';

export class TankFeedInformationDto implements FeedInformation {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FeedDto)
  currentFeed: FeedDto | null;
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
  @IsPositive()
  @IsOptional()
  currentLivestockWeight: number | null;
}
