export interface LivestockInformation {
  livestock: SingleSpecie[];
  totalWeight: number;
}

export interface SingleSpecie {
  name: string;
  weight: number;
  meanWeight: number;
}
