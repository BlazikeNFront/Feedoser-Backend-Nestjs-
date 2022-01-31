import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Feed } from 'src/constants/interfaces/Feed';

export class FeedDto implements Feed {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  size: string;
  @IsPositive()
  fcr: number;
}
