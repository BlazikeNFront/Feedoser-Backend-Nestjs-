import { IsEnum, IsString } from 'class-validator';
import { FeedQuality } from 'src/constants/enums/FeedQuality';
export class FeedDto {
  @IsString()
  name: string;
  @IsString()
  size: string;
  @IsEnum(FeedQuality)
  quality: FeedQuality;
  @IsString()
  fileName: string;
}
