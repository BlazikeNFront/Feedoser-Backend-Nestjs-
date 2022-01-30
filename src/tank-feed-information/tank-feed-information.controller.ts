import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { CreateTankFeedInformationDto } from './dto/tank-feed-information.dto';
import { UpdateTankFeedInformationDto } from './dto/update-tank-feed-information.dto';

@Controller('tank-feed-information')
export class TankFeedInformationController {
  constructor(
    private readonly tankFeedInformationService: TankFeedInformationService,
  ) {}

  @Get(':tankId')
  findOne(@Param('tankId') id: string) {
    return this.tankFeedInformationService.findOne(+id);
  }

  @Patch(':tankId')
  update(
    @Param('tankId') id: string,
    @Body() updateTankFeedInformationDto: UpdateTankFeedInformationDto,
  ) {
    return this.tankFeedInformationService.update(
      +id,
      updateTankFeedInformationDto,
    );
  }

  @Delete(':tankId')
  remove(@Param('tankId') id: string) {
    return this.tankFeedInformationService.remove(+id);
  }
}
