import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { TankLivestockDto } from 'src/tank-livestock/dto/tank-livestock';
import { MainTankInformationDTO } from './MainTankInformation.dto';
import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';
import { TankAnnotationDto } from 'src/tank-annotations/dto/tank-annotation.dto';
import { TankFeedInformationDto } from 'src/tank-feed-information/dto/tank-feed-information.dto';
export class TankDto {
  @IsOptional()
  @IsString()
  _id: string;
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => MainTankInformationDTO)
  mainTankInformation: MainTankInformationDTO;
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => TankLivestockDto)
  livestockInformation: TankLivestockDto;
  @ValidateNested()
  @Type(() => TankFeedInformationDto)
  feedInformation: TankFeedInformationDto;
  @ValidateNested()
  @Type(() => TankAnnotationDto)
  annotations: TankAnnotation[];
}
