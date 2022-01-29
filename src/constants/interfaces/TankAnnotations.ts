import { EnviromentalData } from './EnviromentalData';

export interface TankAnnotation {
  id?: string;
  date: string;
  title: string;
  description: string | null;
  enviromentalData: EnviromentalData | null;
  isImportant: boolean;
}
