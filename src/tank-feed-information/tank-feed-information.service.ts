import { Injectable } from '@nestjs/common';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FeedDoseDto } from './dto/feed-dose.dto';
import { TerminateFeedDoseDto } from './dto/terminate-feed-dose.dto';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
import { CurrentTankFeedDto } from './dto/current-tank-feed.dto';

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

  async terminateFeedDose(
    tankId: string,
    terminatedFeedDose: TerminateFeedDoseDto,
  ) {
    const { feedDose, weightsData } = terminatedFeedDose;

    if (feedDose.terminated === DoseTermination.DONE) {
      const { weightGainAfterDose, amount } = feedDose;
      const { currentLivestockWeight, usedFeedTotalWeight } = weightsData;

      const updatedLivestockWeight =
        Math.round(
          (currentLivestockWeight + weightGainAfterDose + Number.EPSILON) * 100,
        ) / 100;

      const updatedFeedTotalWeight =
        Math.round((usedFeedTotalWeight + amount + Number.EPSILON) * 100) / 100;

      const id = await (
        await this.TankModel.findOneAndUpdate(
          { tankId },
          {
            $set: {
              'feedInformation.currentLivestockWeight': updatedLivestockWeight,
              'feedInformation.usedFeedTotalWeight': updatedFeedTotalWeight,
            },
            $push: {
              'feedInformation.feedProgram': feedDose,
            },
          },
        ).exec()
      )._id;
      return { id };
    }
    const id = await (
      await this.TankModel.findOneAndUpdate(
        { tankId },
        {
          $push: {
            'feedInformation.feedProgram': feedDose,
          },
        },
      ).exec()
    )._id;
    return { id };
  }

  async updateCurrentTankFeed(tankId: string, newTankFeed: CurrentTankFeedDto) {
    return await this.TankModel.findOneAndUpdate(
      { _id: tankId },
      {
        $set: {
          'feedInformation.currentFeed': newTankFeed,
        },
      },
    );
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
