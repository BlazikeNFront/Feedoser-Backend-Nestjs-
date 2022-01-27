import { IsNumber, IsString } from 'class-validator';

export class MainTankInformation {
  @IsString()
  name: string;
  @IsNumber()
  volume: number;
  @IsString()
  description?: string;
}
