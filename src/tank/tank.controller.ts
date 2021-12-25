import { Body, Controller, Get, Post, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { GetUser } from 'src/decorators/getUser.decorator';
import { CreateTankDto } from './dto/CreateTankDto';
import { TankService } from './tank.service';
import { User } from 'src/user/entities/user.entity';
@Controller('tank')
export class TankController {
  constructor(private readonly tankService: TankService) {}

  @Post()
  create(@Body() createTankDto: CreateTankDto) {
    return this.tankService.create(createTankDto);
  }
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string, @GetUser() userId: string) {
    console.log(userId);
    return userId;
  }
  @Get()
  findAll() {
    return this.tankService.findAll();
  }
}
