import { IsEnum } from 'class-validator';
import { DoseTermination } from 'src/constants/enums/DoseTermination';

export class DoseTerminationDto {
  @IsEnum(DoseTermination)
  terminated: DoseTermination;
}
