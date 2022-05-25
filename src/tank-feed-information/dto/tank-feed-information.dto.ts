import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { TypesOfFeedProgram } from 'src/constants/enums/FeedSelect';

import {
  IsEnum,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FeedDoseDto } from './feed-dose.dto';
import { Feed } from 'src/constants/interfaces/Feed';
import { FeedDto } from 'src/feeds/dto/Feed.dto';

export class TankFeedInformationDto implements FeedInformation {
  @IsOptional()
  @Type(() => FeedDto)
  currentFeed: Feed | null;
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
