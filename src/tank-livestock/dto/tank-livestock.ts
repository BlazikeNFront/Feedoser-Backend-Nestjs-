import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { SingleSpecieDto } from './single-specie.dto';
import { ChangeSpecieWeightDto } from './change-specie-weight.dto';
export class TankLivestockDto implements LivestockInformation {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SingleSpecieDto)
  initial: SingleSpecieDto[];
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SingleSpecieDto)
  current: SingleSpecieDto[];
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChangeSpecieWeightDto)
  changes: ChangeSpecieWeightDto[];
}
