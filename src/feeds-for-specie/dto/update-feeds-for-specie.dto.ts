import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedsForSpecieDto } from './create-feeds-for-specie.dto';

export class UpdateFeedsForSpecieDto extends PartialType(CreateFeedsForSpecieDto) {}
