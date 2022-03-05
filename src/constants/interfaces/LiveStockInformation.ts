export interface LivestockInformation {
  livestock: SingleSpecie[];
  initialLivestockWeight: number;
}

export interface SingleSpecie {
  name: string;
  weight: number;
  meanWeight: number;
  quantity: number;
}
