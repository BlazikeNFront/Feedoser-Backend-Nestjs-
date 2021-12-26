import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { GetUser } from 'src/decorators/getUser.decorator';
import { CreateTankDto } from './dto/CreateTankDto';
import { TankService } from './tank.service';

@Controller('tank')
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createTankDto: CreateTankDto, @GetUser() userId: string) {
    return this.tankService.create(userId, createTankDto);
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') tankId: string, @GetUser() userId: string) {
    return this.tankService.findOne(tankId, userId);
  }
  @Get()
  findAll() {
    return this.tankService.findAll();
  }
}
