import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankLivestockInformationService } from './tank-livestock-information.service';
import { CreateTankLivestockInformationDto } from './dto/create-tank-livestock-information.dto';
import { UpdateTankLivestockInformationDto } from './dto/update-tank-livestock-information.dto';

@Controller('tank-livestock-information')
export class TankLivestockInformationController {
  constructor(private readonly tankLivestockInformationService: TankLivestockInformationService) {}

  @Post()
  create(@Body() createTankLivestockInformationDto: CreateTankLivestockInformationDto) {
    return this.tankLivestockInformationService.create(createTankLivestockInformationDto);
  }

  @Get()
  findAll() {
    return this.tankLivestockInformationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tankLivestockInformationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTankLivestockInformationDto: UpdateTankLivestockInformationDto) {
    return this.tankLivestockInformationService.update(+id, updateTankLivestockInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tankLivestockInformationService.remove(+id);
  }
}
