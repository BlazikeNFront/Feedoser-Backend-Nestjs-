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
import { TerminateFeedDoseDto } from './dto/terminate-feed-dose.dto';
import { CurrentTankFeedDto } from './dto/current-tank-feed.dto';

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
  @Post(':tankId/add-feed-dose')
  addFeedDose(
    @Param('tankId') id: string,
    @Body() terminateFeedDose: TerminateFeedDoseDto,
  ) {
    return this.tankFeedInformationService.terminateFeedDose(
      id,
      terminateFeedDose,
    );
  }

  @Patch(':tankId/current-tank-feed')
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
}
