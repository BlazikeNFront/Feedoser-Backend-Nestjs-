import { IsObject, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformationDTO } from './UpdateMainTankInformation.dto';
import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';
import { TankAnnotationDto } from 'src/tank-annotations/dto/tank-annotation.dto';

export class CreateTankDto {
  @IsObject()
  @ValidateNested()
  @Type(() => MainTankInformationDTO)
  mainTankInformation: MainTankInformationDTO;
  @IsObject()
  @IsOptional()
  livestockInformation?: LivestockInformation;
  @IsOptional()
  @IsObject()
  feedInformation?: FeedInformation;
  @ValidateNested()
  @Type(() => TankAnnotationDto)
  tankAnnotations: TankAnnotation[];
}
