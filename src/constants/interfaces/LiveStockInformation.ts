import { SpeciesValues } from '../enums/Species';
export interface LivestockInformation {
  livestock: SingleSpecie[];
  initialLivestockWeight: number;
}

export interface SingleSpecie {
  specie: SpeciesValues;
  weight: number;
  meanWeight: number;
  quantity: number;
}
