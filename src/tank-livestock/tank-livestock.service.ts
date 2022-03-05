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
    if (
      !(await (
        await this.TankModel.findById(tankId).exec()
      ).livestockInformation)
    ) {
      await this.TankModel.findByIdAndUpdate(tankId, {
        $set: {
          livestockInformation: TankLivestockDto,
        },
      }).exec();
      return tankId;
    }
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            'livestockInformation.livestock': TankLivestockDto.livestock,
            'livestockInformation.initialLivestockWeight':
              TankLivestockDto.initialLivestockWeight,
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
