import { IsArray, IsEnum, IsString } from 'class-validator';
import { FeedQuality } from 'src/constants/enums/FeedQuality';
import { SpeciesValues } from 'src/constants/enums/Species';

export class CreateFeedDto {
  @IsString()
  _id: string;
  @IsString()
  name: string;
  @IsArray()
  sizes: string[];
  @IsArray()
  speciesWithFeedTables: SpeciesValues[];
  @IsEnum(FeedQuality)
  quality: FeedQuality;
  @IsString()
  filename: string;
}
export class ExistingFeedDto extends CreateFeedDto {}
