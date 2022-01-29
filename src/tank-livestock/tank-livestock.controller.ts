import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TankLivestockService } from './tank-livestock.service';
import { CreateTankLivestockDto } from './dto/create-tank-livestock.dto';
import { UpdateTankLivestockDto } from './dto/update-tank-livestock.dto';

@Controller('tank-livestock')
export class TankLivestockController {
  constructor(private readonly tankLivestockService: TankLivestockService) {}

  @Post()
  create(@Body() createTankLivestockDto: CreateTankLivestockDto) {
    return this.tankLivestockService.create(createTankLivestockDto);
  }

  @Get()
  findAll() {
    return this.tankLivestockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tankLivestockService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTankLivestockDto: UpdateTankLivestockDto,
  ) {
    return this.tankLivestockService.update(+id, updateTankLivestockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tankLivestockService.remove(+id);
  }
}
