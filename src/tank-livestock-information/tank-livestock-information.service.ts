import { Injectable } from '@nestjs/common';
import { CreateTankLivestockInformationDto } from './dto/create-tank-livestock-information.dto';
import { UpdateTankLivestockInformationDto } from './dto/update-tank-livestock-information.dto';

@Injectable()
export class TankLivestockInformationService {
  create(createTankLivestockInformationDto: CreateTankLivestockInformationDto) {
    return 'This action adds a new tankLivestockInformation';
  }

  findAll() {
    return `This action returns all tankLivestockInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tankLivestockInformation`;
  }

  update(id: number, updateTankLivestockInformationDto: UpdateTankLivestockInformationDto) {
    return `This action updates a #${id} tankLivestockInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tankLivestockInformation`;
  }
}
