import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Feed } from './entities/feed.entity';
import { Model } from 'mongoose';
@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(Feed.name)
    private FeedModel: Model<Feed>,
  ) {}
  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }

  async findAll() {
    return await this.FeedModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} feed`;
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
