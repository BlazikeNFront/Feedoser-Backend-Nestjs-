import { PartialType } from '@nestjs/mapped-types';
import { CreateTankAnnotationDto } from './create-tank-annotation.dto';

export class UpdateTankAnnotationDto extends PartialType(CreateTankAnnotationDto) {}
