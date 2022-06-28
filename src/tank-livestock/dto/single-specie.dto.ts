import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { SingleSpecie } from 'src/constants/interfaces/LiveStockInformation';
import { SpeciesValues } from 'src/constants/enums/Species';
export class SingleSpecieDto implements SingleSpecie {
  specie: SpeciesValues;

  weight: number;

  meanWeight: number;

  quantity: number;
}
