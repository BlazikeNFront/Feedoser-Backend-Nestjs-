import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankFeedInformationService } from './tank-feed-information.service';
import { CreateTankFeedInformationDto } from './dto/create-tank-feed-information.dto';
import { UpdateTankFeedInformationDto } from './dto/update-tank-feed-information.dto';

@Controller('tank-feed-information')
export class TankFeedInformationController {
  constructor(private readonly tankFeedInformationService: TankFeedInformationService) {}

  @Post()
  create(@Body() createTankFeedInformationDto: CreateTankFeedInformationDto) {
    return this.tankFeedInformationService.create(createTankFeedInformationDto);
  }

  @Get()
  findAll() {
    return this.tankFeedInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tankFeedInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTankFeedInformationDto: UpdateTankFeedInformationDto) {
    return this.tankFeedInformationService.update(+id, updateTankFeedInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tankFeedInformationService.remove(+id);
  }
}
