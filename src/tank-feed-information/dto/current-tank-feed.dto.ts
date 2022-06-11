import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  CurrentTankFeed,
  TankFeedForSpecie,
} from 'src/constants/interfaces/Feed';

import { CreateFeedDto } from 'src/feed/dto/create-feed.dto';
import { Species } from 'src/constants/enums/Species';

export class TankFeedForSpecieDto {
  @IsString()
  _id: string;
  @ValidateNested()
  @Type(() => CreateFeedDto)
  feed: CreateFeedDto;
  @IsEnum(Species)
  specie: string;
  @IsNumber()
  minSize: number;
  @IsOptional()
  @IsNumber()
  maxSize: null | number;
  @IsNumber()
  fcr: number;
  @IsString()
  size: string;
  @IsOptional()
  weightBreakpoints: Record<string, number> | null;
}
export class CurrentTankFeedDto implements CurrentTankFeed {
  @ValidateNested()
  @Type(() => TankFeedForSpecieDto)
  feedForSpecie: TankFeedForSpecie;
  @IsBoolean()
  isProposed: boolean;
}
