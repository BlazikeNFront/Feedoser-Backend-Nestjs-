import { IsPositive, IsString, IsOptional } from 'class-validator';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';
export class MainTankInformationDTO implements MainTankInformation {
  @IsString()
  name: string;
  @IsPositive()
  volume: number;
  @IsString()
  @IsOptional()
  description?: string;
}
