import {
  IsEnum,
  IsString,
  IsOptional,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
export class FeedDoseDto implements FeedDose {
  @IsNumber()
  number: number;
  @IsNumber()
  amount: number;
  @IsNumber()
  @IsPositive()
  temperature: number;
  @IsString()
  @IsOptional()
  date: string | null;
  @IsEnum(DoseTermination)
  terminated: DoseTermination;
  @IsNumber()
  weightGainAfterDose: number;
}
