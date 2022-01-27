import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankAnnotationsService } from './tank-annotations.service';
import { CreateTankAnnotationDto } from './dto/create-tank-annotation.dto';
import { UpdateTankAnnotationDto } from './dto/update-tank-annotation.dto';

@Controller('tank-annotations')
export class TankAnnotationsController {
  constructor(private readonly tankAnnotationsService: TankAnnotationsService) {}

  @Post()
  create(@Body() createTankAnnotationDto: CreateTankAnnotationDto) {
    return this.tankAnnotationsService.create(createTankAnnotationDto);
  }

  @Get()
  findAll() {
    return this.tankAnnotationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tankAnnotationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTankAnnotationDto: UpdateTankAnnotationDto) {
    return this.tankAnnotationsService.update(+id, updateTankAnnotationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tankAnnotationsService.remove(+id);
  }
}
