import { IsPositive, IsEnum, IsString, IsOptional } from 'class-validator';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
export class FeedDoseDto implements FeedDose {
  @IsPositive()
  number: number;
  @IsPositive()
  amount: number;
  @IsString()
  @IsOptional()
  date: string | null;
  @IsEnum(DoseTermination)
  terminated: DoseTermination;
  @IsPositive()
  weightGainAfterDose: number;
}
