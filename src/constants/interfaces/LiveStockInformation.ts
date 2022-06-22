import { SpeciesValues } from '../enums/Species';
export interface LivestockInformation {
  initial: SingleSpecie[];
  current: SingleSpecie[];
}

export interface SingleSpecie {
  specie: SpeciesValues;
  weight: number;
  meanWeight: number;
  quantity: number;
}
