export interface LivestockInformation {
  livestock: SingleLivestockSpecie[];
  totalWeight: number;
}

export interface SingleLivestockSpecie {
  name: string;
  weight: number;
  meanWeight: number;
}
