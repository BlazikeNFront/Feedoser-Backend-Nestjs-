import { PartialType } from '@nestjs/mapped-types';
import { CreateTankLivestockDto } from './create-tank-livestock.dto';

export class UpdateTankLivestockDto extends PartialType(CreateTankLivestockDto) {}
