import { FeedDose } from './FeedDose';
export interface TerminatedCalcWeightsData {
  currentLivestockWeight: number;
  usedFeedTotalWeight: number;
}
export interface TerminateFeedDose {
  feedDose: FeedDose;
  weightsData: TerminatedCalcWeightsData;
}
