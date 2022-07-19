import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
} from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { FeedDoseDto } from './dto/feed-dose.dto';
import { CurrentTankFeedDto } from './dto/current-tank-feed.dto';
import { EndFeedProgramDto } from './dto/EndFeedProgram.dto';
import { Tank } from 'src/constants/interfaces/Tank';

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
  @Post('feedProgram/:tankId')
  addFeedDose(
    @Param('tankId') id: string,
    @Body() terminateFeedDose: FeedDoseDto,
  ) {
    return this.tankFeedInformationService.terminateFeedDose(
      id,
      terminateFeedDose,
    );
  }

  @Patch('current-tank-feed/:tankId')
  updateCurrentTankFeed(
    @Param('tankId') id: string,
    @Body() newTankFeed: CurrentTankFeedDto,
  ) {
    return this.tankFeedInformationService.updateCurrentTankFeed(
      id,
      newTankFeed,
    );
  }

  @Delete(':tankId')
  remove(@Param('tankId') id: string) {
    return this.tankFeedInformationService.remove(id);
  }
  @Patch('end-feed-program/:tankId')
  endTankFeedProgram(
    @Param('tankId') tankId: string,
    @Body() tankData: EndFeedProgramDto,
  ) {
    return this.tankFeedInformationService.endFeedProgram(tankId, tankData);
  }
}
