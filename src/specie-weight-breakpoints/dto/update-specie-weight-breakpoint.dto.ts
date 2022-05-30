import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecieWeightBreakpointDto } from './create-specie-weight-breakpoint.dto';

export class UpdateSpecieWeightBreakpointDto extends PartialType(CreateSpecieWeightBreakpointDto) {}
