import { Injectable } from '@nestjs/common';
import { CreateTankLivestockDto } from './dto/create-tank-livestock.dto';
import { UpdateTankLivestockDto } from './dto/update-tank-livestock.dto';

@Injectable()
export class TankLivestockService {
  create(createTankLivestockDto: CreateTankLivestockDto) {
    return 'This action adds a new tankLivestock';
  }

  findAll() {
    return `This action returns all tankLivestock`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tankLivestock`;
  }

  update(id: number, updateTankLivestockDto: UpdateTankLivestockDto) {
    return `This action updates a #${id} tankLivestock`;
  }

  remove(id: number) {
    return `This action removes a #${id} tankLivestock`;
  }
}
