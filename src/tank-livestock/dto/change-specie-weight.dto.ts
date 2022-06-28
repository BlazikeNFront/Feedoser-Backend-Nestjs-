import {
  IsObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';
import { ChangeSpecieWeight } from '../../constants/interfaces/ChangeSpecieWeight';
import { SingleSpecieDto } from './single-specie.dto';

export class ChangeSpecieWeightDto implements ChangeSpecieWeight {
  @IsObject()
  @Type(() => SingleSpecieDto)
  before: SingleSpecieDto;
  @IsObject()
  @Type(() => SingleSpecieDto)
  after: SingleSpecieDto;
  @IsString()
  @MinLength(5)
  @MaxLength(200)
  reason: string;
  @IsString()
  @MinLength(5)
  @MaxLength(12)
  date: string;
}
