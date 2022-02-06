import { EnviromentalData } from 'src/constants/interfaces/EnviromentalData';
import { Weather } from 'src/constants/enums/Weather';
import { IsEnum, IsNumber, IsOptional, IsPositive } from 'class-validator';
export class EnviromentalDataDto implements EnviromentalData {
  @IsOptional()
  @IsNumber()
  temperature: number | null;
  @IsOptional()
  @IsPositive()
  ph: number | null;
  @IsOptional()
  @IsPositive()
  ammonia: number | null;
  @IsOptional()
  @IsEnum(Weather)
  weather: Weather | null;
}
