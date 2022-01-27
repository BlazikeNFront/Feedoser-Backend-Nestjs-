import { IsObject } from 'class-validator';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';

export class CreateTankDto {
  @IsObject()
  mainTankInformation: MainTankInformation;
  @IsObject()
  livestockInformation?: LivestockInformation;
  @IsObject()
  feedInformation?: FeedInformation;
}
