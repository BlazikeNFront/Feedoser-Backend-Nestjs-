import { Injectable } from '@nestjs/common';
import { TankLivestockDto } from './dto/tank-livestock';
import { InjectModel } from '@nestjs/mongoose';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
@Injectable()
export class TankLivestockService {
  constructor(
    @InjectModel(Tank.name)
    private TankModel: Model<Tank>,
  ) {}
  async update(TankLivestockDto: TankLivestockDto, tankId: string) {
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            'livestockInformation.livestock': TankLivestockDto.livestock,
            'livestockInformation.totalWeight': TankLivestockDto.totalWeight,
          },
        }).exec()
      )._id,
    };
  }

  async findOne(tankId: string) {
    return await (
      await this.TankModel.findOne({ tankId }).exec()
    ).livestockInformation;
  }

  async remove(tankId: string) {
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            livestockInformation: null,
          },
        }).exec()
      )._id,
    };
  }
}
