import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';

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

  @Delete(':tankId')
  remove(@Param('tankId') id: string) {
    return this.tankFeedInformationService.remove(id);
  }
}
