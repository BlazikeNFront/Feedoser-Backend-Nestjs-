import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';

export class CreateTankDto {
  mainTankInformation: MainTankInformation;
  livestockInformation: LivestockInformation;
  feedInformation: FeedInformation;
}
