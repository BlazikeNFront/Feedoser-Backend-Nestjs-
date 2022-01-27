import { PartialType } from '@nestjs/mapped-types';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';

export class UpdateMainTankInformationDto extends PartialType(
  MainTankInformation,
) {}
