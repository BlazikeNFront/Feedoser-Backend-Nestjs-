import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FeedsForSpecie } from './entities/feeds-for-specie.entity';
import { Model } from 'mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedType } from '../feeds-type/entities/feedType.entity';
@Injectable()
export class FeedsForSpecieService {
  constructor(
    @InjectModel(FeedsForSpecie.name)
    private SpeciesFeedBreakpointsModel: Model<FeedsForSpecie>,
  ) {}

  async findAll() {
    return await this.SpeciesFeedBreakpointsModel.find()
      .populate('weightBreakpoints.feeds')
      .exec();
  }

  async findOne(specie: SpeciesValues) {
    return await this.SpeciesFeedBreakpointsModel.findOne({ specie })
      .populate({
        path: 'weightBreakpoints.feeds',
        populate: {
          path: 'feedType',
          model: FeedType,
        },
      })
      .exec();
  }

  // update(id: number, updateSpecieWeightBreakpointDto: UpdateSpecieWeightBreakpointDto) {
  //   return `This action updates a #${id} specieWeightBreakpoint`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} specieWeightBreakpoint`;
  // }
}
