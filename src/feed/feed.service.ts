import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { FeedEntity } from './entities/feed.entity';
import { Model } from 'mongoose';
@Injectable()
export class FeedService {
  constructor(
    @InjectModel(FeedEntity.name)
    private FeedEntity: Model<FeedEntity>,
  ) {}
  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }

  async findAll() {
    return await this.FeedEntity.find().populate('feedType').exec();
  }

  async findOne(id: string) {
    return await this.FeedEntity.findOne({
      id,
    })
      .populate('feedType')
      .exec();
  }
  async findByFeedTypeId(id: string) {
    return await this.FeedEntity.find({
      feedType: id,
    })
      .populate('feedType')
      .exec();
  }
  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
