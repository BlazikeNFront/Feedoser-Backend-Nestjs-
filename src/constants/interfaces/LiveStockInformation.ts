export interface LivestockInformation {
  livestock: SingleSpecie[];
  totalLivestockWeight: number;
}

export interface SingleSpecie {
  name: string;
  weight: number;
  meanWeight: number;
}
