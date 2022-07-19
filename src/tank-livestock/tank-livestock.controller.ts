import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { TankLivestockService } from './tank-livestock.service';
import { TankLivestockDto } from './dto/tank-livestock';
import { ChangeSpecieWeightDto } from './dto/change-specie-weight.dto';
@Controller('tank-livestock')
export class TankLivestockController {
  constructor(private readonly tankLivestockService: TankLivestockService) {}

  @Patch(':tankId')
  update(
    @Param('tankId') tankId: string,
    @Body() createTankLivestockDto: TankLivestockDto,
  ) {
    return this.tankLivestockService.update(createTankLivestockDto, tankId);
  }

  @Get(':tankId')
  findOne(@Param('tankId') tankId: string) {
    return this.tankLivestockService.findOne(tankId);
  }

  @Delete(':tankId')
  remove(@Param('tankId') tankId: string) {
    return this.tankLivestockService.remove(tankId);
  }
  @Patch('/current-livestock/:tankId')
  updateCurrentLivesstock(
    @Param('tankId') tankId: string,
    @Body() ChangeSpecieWeight: ChangeSpecieWeightDto,
  ) {
    return this.tankLivestockService.updateCurrentLivestock(
      tankId,
      ChangeSpecieWeight,
    );
  }
}
