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
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/decorators/getUserId.decorator';
import { TankDto } from './dto/Tank.dto';
import { TankService } from './tank.service';
import { MainTankInformationDTO } from './dto/MainTankInformation.dto';

@Controller('tanks')
@UseGuards(AuthGuard('jwt'))
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Post()
  create(@GetUser() userId: string, @Body() tankDto: TankDto) {
    console.log('hello');
    return this.tankService.create(userId, tankDto);
  }
  @Get(':_id')
  findOne(@Param('_id') tankId: string) {
    return this.tankService.findOne(tankId);
  }
  @Get()
  findAll(@GetUser() userId: string) {
    return this.tankService.findAll(userId);
  }
  @Delete(':id')
  delete(@Param('id') tankId: string) {
    return this.tankService.delete(tankId);
  }

  //Tank cannot exist withoout main information,thats why it is the only update in this controller.
  //The rest of update API - s(for livestock, annotations and feed informations are in separates controllers

  @Patch('/:id')
  update(
    @Param('id') tankId: string,
    @Body() MainTankInformationDTO: Partial<MainTankInformationDTO>,
  ) {
    return this.tankService.update(tankId, MainTankInformationDTO);
  }
}
