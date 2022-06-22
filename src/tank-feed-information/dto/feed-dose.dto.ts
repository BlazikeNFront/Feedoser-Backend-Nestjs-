import { IsEnum, IsString, IsNumber, IsPositive, Max } from 'class-validator';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
export class FeedDoseDto implements FeedDose {
  @IsNumber()
  @IsPositive()
  number: number;
  @IsNumber()
  @IsPositive()
  amount: number;
  @IsNumber()
  @IsPositive()
  @Max(50)
  temperature: number;
  @IsString()
  date: string;
  @IsEnum(DoseTermination)
  terminated: DoseTermination;
  @IsNumber()
  @IsPositive()
  weightGainAfterDose: number;
}
