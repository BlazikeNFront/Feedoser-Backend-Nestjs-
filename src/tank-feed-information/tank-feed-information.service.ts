import { Injectable } from '@nestjs/common';
import { CreateTankFeedInformationDto } from './dto/tank-feed-information.dto';
import { UpdateTankFeedInformationDto } from './dto/update-tank-feed-information.dto';

@Injectable()
export class TankFeedInformationService {
  create(createTankFeedInformationDto: CreateTankFeedInformationDto) {
    return 'This action adds a new tankFeedInformation';
  }

  findAll() {
    return `This action returns all tankFeedInformation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tankFeedInformation`;
  }

  update(
    id: number,
    updateTankFeedInformationDto: UpdateTankFeedInformationDto,
  ) {
    return `This action updates a #${id} tankFeedInformation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tankFeedInformation`;
  }
}
