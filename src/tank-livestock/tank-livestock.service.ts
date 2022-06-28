import { Injectable } from '@nestjs/common';
import { TankLivestockDto } from './dto/tank-livestock';
import { InjectModel } from '@nestjs/mongoose';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
import { ChangeSpecieWeightDto } from './dto/change-specie-weight.dto';
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
            'livestockInformation.initial': TankLivestockDto.initial,
            'livestockInformation.current': TankLivestockDto.current,
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
  async updateCurrentLivestock(
    tankId: string,
    ChangeSpecieWeight: ChangeSpecieWeightDto,
  ) {
    return await (
      await this.TankModel.findByIdAndUpdate(
        tankId,
        {
          $set: {
            'livestockInformation.current.$[specie]': ChangeSpecieWeight.after,
          },
          $push: {
            'livestockInformation.changes': ChangeSpecieWeight,
          },
        },
        {
          arrayFilters: [
            {
              'specie.specie': ChangeSpecieWeight.after.specie,
            },
          ],
        },
      ).exec()
    )._id;
  }
}
