import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { SingleSpecieDto } from './single-specie.dto';
export class TankLivestockDto implements LivestockInformation {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SingleSpecieDto)
  livestock: SingleSpecieDto[];
  @IsNumber()
  initialLivestockWeight: number;
}
