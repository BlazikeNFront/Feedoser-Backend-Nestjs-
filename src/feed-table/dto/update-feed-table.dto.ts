import { PartialType } from '@nestjs/mapped-types';
import { CreateFeedTableDto } from './create-feed-table.dto';

export class UpdateFeedTableDto extends PartialType(CreateFeedTableDto) {}
