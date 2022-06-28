import { SingleSpecie } from './LiveStockInformation';
export interface ChangeSpecieWeight {
  before: SingleSpecie;
  after: SingleSpecie;
  reason: string;
}
