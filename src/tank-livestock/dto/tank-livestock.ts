import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import {
  LivestockInformation,
  SingleSpecie,
} from 'src/constants/interfaces/LiveStockInformation';
import { SingleSpecieDto } from './single-specie.dto';
export class TankLivestockDto implements LivestockInformation {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SingleSpecieDto)
  initial: SingleSpecie[];
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SingleSpecieDto)
  current: SingleSpecieDto[];
}
