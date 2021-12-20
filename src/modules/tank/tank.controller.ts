import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateTankDto } from './dto/CreateTankDto';
import { TankService } from './tank.service';
@Controller('tank')
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Post()
  create(@Body() createTankDto: CreateTankDto) {
    return this.tankService.create(createTankDto);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tankService.findOne(+id);
  }
}
