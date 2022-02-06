import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTerminationDto } from './dto/dose-termination.dto';

@Controller('tank-feed-information')
export class TankFeedInformationController {
  constructor(
    private readonly tankFeedInformationService: TankFeedInformationService,
  ) {}

  @Get(':tankId')
  findOne(@Param('tankId') id: string) {
    return this.tankFeedInformationService.find(id);
  }

  @Patch(':tankId')
  update(
    @Param('tankId') id: string,
    @Body() TankFeedInformationDto: TankFeedInformationDto,
  ) {
    return this.tankFeedInformationService.update(id, TankFeedInformationDto);
  }
  @Patch(':tankId/add-feed-dose')
  addFeedDose(@Param('tankId') id: string, @Body() FeedDoseDto: FeedDose) {
    return this.tankFeedInformationService.updateFeedProgram(id, FeedDoseDto);
  }
  @Patch(':tankId/terminate-dose/:doseIndex')
  terminateDose(
    @Param('tankId') id: string,
    @Param('doseIndex') doseIndex: number,
    @Body() DoseTerminationDto: DoseTerminationDto,
  ) {
    return this.tankFeedInformationService.terminateDose(
      id,
      +doseIndex,
      DoseTerminationDto,
    );
  }

  @Delete(':tankId')
  remove(@Param('tankId') id: string) {
    return this.tankFeedInformationService.remove(id);
  }
}
