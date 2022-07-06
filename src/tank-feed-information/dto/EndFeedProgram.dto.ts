import { ValidateNested } from 'class-validator';

import { Type } from 'class-transformer';
import { Tank } from 'src/constants/interfaces/Tank';

import { TankLivestockDto } from 'src/tank-livestock/dto/tank-livestock';
import { TankFeedInformationDto } from './tank-feed-information.dto';
export class EndFeedProgramDto
  implements Pick<Tank, 'livestockInformation' | 'feedInformation'>
{
  @ValidateNested({ each: true })
  @Type(() => TankLivestockDto)
  livestockInformation: TankLivestockDto;
  @ValidateNested()
  @Type(() => TankFeedInformationDto)
  feedInformation: TankFeedInformationDto;
}
