import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FeedType } from './entities/feedType.entity';
import { Model } from 'mongoose';

@Injectable()
export class FeedsTypeService {
  constructor(
    @InjectModel(FeedType.name)
    private FeedType: Model<FeedType>,
  ) {}

  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }
  async findFeed(feedId: string) {
    return await this.FeedType.findOne({
      _id: feedId,
    }).exec();
  }
  async findAllFeeds() {
    return await this.FeedType.find().exec();
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
