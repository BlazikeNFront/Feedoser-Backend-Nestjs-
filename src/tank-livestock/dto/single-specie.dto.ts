import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { SingleSpecie } from 'src/constants/interfaces/LiveStockInformation';

export class SingleSpecieDto implements SingleSpecie {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsPositive()
  weight: number;
  @IsPositive()
  meanWeight: number;
  @IsPositive()
  quantity: number;
}
