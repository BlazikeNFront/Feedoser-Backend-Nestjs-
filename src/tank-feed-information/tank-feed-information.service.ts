import { Injectable } from '@nestjs/common';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FeedDose } from 'src/constants/interfaces/FeedDose';
import { FeedDoseDto } from './dto/feed-dose.dto';

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
            'feedInformation.currentLivestockWeight':
              TankFeedInformationDto.currentLivestockWeight,
          },
        }).exec()
      )._id,
    };
  }

  async pushFeedDoseToFeedProgram(tankId: string, FeedDoseDto: FeedDose) {
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
  async updateDose(
    tankId: string,
    doseNumber: number,
    feedDose: Partial<FeedDoseDto>,
  ) {
    const { number, amount, date, terminated, weightGainAfterDose } = feedDose;
    return await await this.TankModel.findOneAndUpdate(
      { tankId },
      {
        $set: {
          'feedInformation.feedProgram.$[feedDose].number': number,
          'feedInformation.feedProgram.$[feedDose].amount': amount,
          'feedInformation.feedProgram.$[feedDose].date': date,
          'feedInformation.feedProgram.$[feedDose].terminated': terminated,
          'feedInformation.feedProgram.$[feedDose].weightGainAfterDose':
            weightGainAfterDose,
        },
      },
      {
        arrayFilters: [
          {
            'feedDose.number': doseNumber,
          },
        ],
      },
    ).exec();
  }
  async terminateDose(
    tankId: string,
    doseNumber: number,
    feedDoseDto: Partial<FeedDoseDto>,
  ) {
    const tankFeedInformation = await (
      await this.updateDose(tankId, doseNumber, feedDoseDto)
    ).feedInformation;
    const { weightGainAfterDose, amount } = feedDoseDto;
    if (tankFeedInformation) {
      const { currentLivestockWeight, usedFeedTotalWeight } =
        tankFeedInformation;
      const updatedLivestockWeight =
        Math.round(
          (currentLivestockWeight +
            weightGainAfterDose +
            amount +
            Number.EPSILON) *
            100,
        ) / 100;

      const updatedFeedTotalWeight =
        Math.round((usedFeedTotalWeight + amount + Number.EPSILON) * 100) / 100;
      console.log(updatedLivestockWeight, updatedFeedTotalWeight);
      const id = await (
        await this.TankModel.findOneAndUpdate(
          { tankId },
          {
            $set: {
              'feedInformation.currentLivestockWeight': updatedLivestockWeight,
              'feedInformation.usedFeedTotalWeight': updatedFeedTotalWeight,
            },
          },
        ).exec()
      )._id;
      return id;
    }
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
