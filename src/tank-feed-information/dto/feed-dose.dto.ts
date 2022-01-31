import { IsPositive } from 'class-validator';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
export class FeedDoseDto implements FeedDose {
  @IsPositive()
  number: number;
  @IsPositive()
  amount: number;
  date: string | null;
  terminated: DoseTermination;
  weightGainAfterDose: number;
}
