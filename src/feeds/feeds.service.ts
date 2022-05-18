import { Injectable } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FeedTableEntity } from './entities/feed.entity';
import { Model } from 'mongoose';
import { storageDir } from 'src/utils/paths';
import { STORAGE_FEED_TABLES_DIR_NAME } from '../utils/paths';
import { Species } from 'src/constants/enums/Species';
import * as path from 'path';
@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(FeedTableEntity.name)
    private FeedTableModel: Model<FeedTableEntity>,
  ) {}
  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }

  async findSpecieTables(specie: Species) {
    const data = await this.FeedTableModel.findOne({ specie }).exec();
    console.log(data);
    return data;
  }
  async getSpecieFeedCartInPdf(specie: Species, cartId: string, res: any) {
    try {
      res.sendFile('test.pdf', {
        root: path.join(storageDir(), STORAGE_FEED_TABLES_DIR_NAME),
      });
    } catch (error) {
      res.status(error.status).json({
        error: error.message,
      });
    }
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
