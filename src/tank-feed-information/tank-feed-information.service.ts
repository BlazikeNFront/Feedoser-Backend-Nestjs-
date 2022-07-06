import { Injectable } from '@nestjs/common';
import { TankFeedInformationDto } from './dto/tank-feed-information.dto';
import { Tank } from '../tank/entities/tank.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FeedDoseDto } from './dto/feed-dose.dto';
import { DoseTermination } from 'src/constants/enums/DoseTermination';
import { CurrentTankFeedDto } from './dto/current-tank-feed.dto';
import { roundTo2Decimals } from '../helpers/numberOperations';
import { EndFeedProgramDto } from './dto/EndFeedProgram.dto';
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

  async terminateFeedDose(tankId: string, dose: FeedDoseDto) {
    const { terminated, specie } = dose;

    const {
      _id,
      livestockInformation: { current },
    } = await await this.TankModel.findOneAndUpdate(
      { tankId },
      {
        $push: {
          'feedInformation.feedProgram': dose,
        },
      },
    ).exec();
    if (terminated === DoseTermination.OMITTED) return { _id };
    const indexOfSpecie = current.findIndex(
      (specieData) => specieData.specie === specie,
    );
    const currentSpecieData = current[indexOfSpecie];
    currentSpecieData.weight += dose.weightGainAfterDose;
    currentSpecieData.meanWeight += roundTo2Decimals(
      (dose.weightGainAfterDose * 1000) / currentSpecieData.quantity,
    );
    current[indexOfSpecie] = currentSpecieData;
    await await this.TankModel.findOneAndUpdate(
      { tankId },
      {
        $set: {
          'livestockInformation.current': current,
        },
      },
    ).exec();
    return { _id };
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
  async endFeedProgram(tankId: string, tankData: EndFeedProgramDto) {
    return {
      id: await (
        await this.TankModel.findByIdAndUpdate(tankId, {
          $set: {
            feedInformation: null,
            'livestockInformation.current': [],
            'livestockInformation.initial': [],
            'livestockInformation.changes': [],
          },
          $push: {
            history: tankData,
          },
        }).exec()
      )._id,
    };
  }
}
