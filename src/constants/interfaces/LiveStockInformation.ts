export class LivestockInformation {
  livestock: SingleLivestockSpecie[];
  totalWeight: number;
}

export class SingleLivestockSpecie {
  name: string;
  weight: number;
  meanWeight: number;
}
