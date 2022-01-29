import { DoseTermination } from '../enums/DoseTermination';
export interface FeedDose {
  number: number;
  amount: number;
  date: string | null;
  terminated: DoseTermination;
  weightGainAfterDose: number;
}
