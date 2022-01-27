import { PartialType } from '@nestjs/mapped-types';
import { CreateTankLivestockInformationDto } from './create-tank-livestock-information.dto';

export class UpdateTankLivestockInformationDto extends PartialType(CreateTankLivestockInformationDto) {}
