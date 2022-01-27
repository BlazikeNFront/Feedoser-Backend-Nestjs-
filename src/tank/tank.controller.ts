import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Delete,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { GetUser } from 'src/decorators/getUser.decorator';
import { CreateTankDto } from './dto/CreateTank.dto';
import { TankService } from './tank.service';
import { UpdateMainTankInformationDto } from './dto/UpdateTank.dto';

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
  findOne(@Param('id') tankId: string) {
    return this.tankService.findOne(tankId);
  }
  @Get()
  @UseGuards(AuthGuard)
  findAll(@GetUser() userId: string) {
    return this.tankService.findAll(userId);
  }
  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') tankId: string) {
    return this.tankService.delete(tankId);
  }

  //Tank cannot exist withoout main information,thats why it is the only update in this controller.
  //The rest of update API - s(for livestock, annotations and feed informations are in separate(for each one)controllers

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') tankId: string,
    @Body() UpdateMainTankInformationDto: UpdateMainTankInformationDto,
  ) {
    return this.tankService.update(tankId, UpdateMainTankInformationDto);
  }
}
