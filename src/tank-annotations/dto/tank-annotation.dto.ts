import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';
import { EnviromentalData } from 'src/constants/interfaces/EnviromentalData';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { EnviromentalDataDto } from './enviromental-data.dto';
export class TankAnnotationDto implements TankAnnotation {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  date: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string | null;
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => EnviromentalDataDto)
  enviromentalData: EnviromentalData | null;
  @IsBoolean()
  isImportant: boolean;
}
