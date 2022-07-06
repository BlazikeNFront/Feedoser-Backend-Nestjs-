import {
  IsEnum,
  IsString,
  IsNumber,
  IsPositive,
  Max,
  ValidateIf,
  Min,
} from 'class-validator';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
export class FeedDoseDto implements FeedDose {
  @IsNumber()
  @IsPositive()
  number: number;
  @IsNumber()
  @Min(0)
  amount: number;
  @IsNumber()
  @IsPositive()
  @Max(50)
  @ValidateIf((_, value) => value !== null)
  temperature: number;
  @IsString()
  date: string;
  @IsEnum(DoseTermination)
  terminated: DoseTermination;
  @IsNumber()
  @Min(0)
  weightGainAfterDose: number;
  @IsString()
  specie: string;
  @IsPositive()
  currentCycleDoseNumber: number;
}
