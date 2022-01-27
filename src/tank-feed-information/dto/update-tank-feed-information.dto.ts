import { PartialType } from '@nestjs/mapped-types';
import { CreateTankFeedInformationDto } from './create-tank-feed-information.dto';

export class UpdateTankFeedInformationDto extends PartialType(CreateTankFeedInformationDto) {}
