import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FeedForSpecieEntity } from './entities/feeds-for-specie.entity';
import { InjectModel } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
@Injectable()
export class FeedsForSpeciesService {
  constructor(
    @InjectModel(FeedForSpecieEntity.name)
    private FeedForSpecieModel: Model<FeedForSpecieEntity>,
  ) {}
  async findAll() {
    return await this.FeedForSpecieModel.find().populate('feed').exec();
  }
  async findAllSpecieFeeds(specie: SpeciesValues) {
    return await this.FeedForSpecieModel.find({ specie })
      .populate('feed')
      .exec();
  }
  async findOne(_id: string) {
    return await this.FeedForSpecieModel.findOne({ _id })
      .populate('feed')
      .exec();
  }
}
