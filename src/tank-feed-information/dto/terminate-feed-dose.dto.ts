import { IsNumber, IsObject } from 'class-validator';
import { TerminateFeedDose } from 'src/constants/interfaces/TerminatedFeedDose';
import { FeedDoseDto } from './feed-dose.dto';
import { TerminatedCalcWeightsData } from 'src/constants/interfaces/TerminatedFeedDose';
import { Type } from 'class-transformer';
export class WeightsDataDto implements TerminatedCalcWeightsData {
  @IsNumber()
  currentLivestockWeight: number;
  @IsNumber()
  usedFeedTotalWeight: number;
}
export class TerminateFeedDoseDto implements TerminateFeedDose {
  @IsObject()
  @Type(() => FeedDoseDto)
  feedDose: FeedDoseDto;
  @IsObject()
  @Type(() => WeightsDataDto)
  weightsData: WeightsDataDto;
}
