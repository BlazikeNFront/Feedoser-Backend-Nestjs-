import { Injectable } from '@nestjs/common';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { DoseTerminationDto } from './dto/dose-termination.dto';
@Injectable()
export class TankFeedInformationService {
  constructor(
    @InjectModel(Tank.name)
    private TankModel: Model<Tank>,
  ) {}

  async find(tankId: string) {
    return await (
      await this.TankModel.findOne({ tankId }).exec()
    ).livestockInformation;
  }
  async update(tankId: string, TankFeedInformationDto: TankFeedInformationDto) {
    if (
      !(await (
        await this.TankModel.findById(tankId).exec()
      ).feedInformation)
    ) {
      await this.TankModel.findByIdAndUpdate(tankId, {
        $set: {
          feedInformation: TankFeedInformationDto,
        },
      }).exec();
    }

    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            'feedInformation.currentFeed': TankFeedInformationDto.currentFeed,
            'feedInformation.usedFeedTotalWeight':
              TankFeedInformationDto.usedFeedTotalWeight,
            'feedInformation.feedProgram': TankFeedInformationDto.feedProgram,
            'feedInformation.typeOfProgram':
              TankFeedInformationDto.typeOfProgram,
            'feedInformation.doseUpdateFrequency':
              TankFeedInformationDto.doseUpdateFrequency,
            'feedInformation.defaultTemperature':
              TankFeedInformationDto.defaultTemperature,
          },
        }).exec()
      )._id,
    };
  }

  async updateFeedProgram(tankId: string, FeedDoseDto: FeedDose) {
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $push: {
            'feedInformation.feedProgram': FeedDoseDto,
          },
        }).exec()
      )._id,
    };
  }

  async terminateDose(
    tankId: string,
    doseNumber: number,
    { terminated }: DoseTerminationDto,
  ) {
    return {
      id: await (
        await this.TankModel.findOneAndUpdate(
          { tankId },
          {
            $set: {
              'feedInformation.feedProgram.$[feedDose].terminated': terminated,
            },
          },
          {
            arrayFilters: [
              {
                'feedDose.number': doseNumber,
              },
            ],
          },
        ).exec()
      )._id,
    };
  }

  async remove(tankId: string) {
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            feedInformation: null,
          },
        }).exec()
      )._id,
    };
  }
}
