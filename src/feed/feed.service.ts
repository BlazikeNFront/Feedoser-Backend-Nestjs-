import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FeedEntity } from './entities/feed.entity';
import { Model } from 'mongoose';
@Injectable()
export class FeedService {
  constructor(
    @InjectModel(FeedEntity.name) private FeedModel: Model<FeedEntity>,
  ) {}

  async findAll() {
    return this.FeedModel.find().exec();
  }

  async findOne(_id: string) {
    return await this.FeedModel.findOne({ _id }).exec();
  }
}
