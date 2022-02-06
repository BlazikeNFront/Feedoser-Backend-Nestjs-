import { LivestockInformation } from './LiveStockInformation';
import { MainTankInformation } from './MainTankInformation';
import { FeedInformation } from './FeedInformation';
import { TankAnnotation } from './TankAnnotations';
export interface Tank {
  id: string;
  mainTankInformation: MainTankInformation;
  livestockInformation: LivestockInformation | null;
  feedInformation: FeedInformation | null;
  annotations: TankAnnotation[];
}
