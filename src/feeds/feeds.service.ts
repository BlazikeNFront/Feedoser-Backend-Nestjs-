import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FeedTableEntity } from './entities/feedTable.entity';
import { FeedEntity } from './entities/feed.entity';
import { Feed } from 'src/constants/interfaces/Feed';
import { Model } from 'mongoose';
import { storageDir } from 'src/utils/paths';
import { STORAGE_FEED_TABLES_DIR_NAME } from '../utils/paths';
import { Species } from 'src/constants/enums/Species';
import { FeedTable } from 'src/constants/interfaces/FeedTable';
import * as path from 'path';

@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(FeedTableEntity.name)
    private FeedTableModel: Model<FeedTableEntity>,
    @InjectModel(FeedEntity.name)
    private FeedEntity: Model<FeedEntity>,
  ) {}

  create(createFeedDto: CreateFeedDto) {
    return 'This action adds a new feed';
  }
  async findFeed(feedId: string) {
    return await this.FeedEntity.findOne({
      _id: feedId,
    }).exec();
  }
  async findAllFeedTables() {
    //currently it takes all documents in collection and Set function deletes dupliactes - it should operated with id-s on single feedTable and just have property of correct FeedTable name (fcr and specie related stuff / feed name size quailty will always be the same)
    return [
      ...new Set(
        Array.from(await this.FeedTableModel.find().exec())
          .map((feedTableEntity) => feedTableEntity.feedTables)
          .flat(),
      ),
    ];
  }
  async findSpecieTables(specie: Species) {
    return await this.FeedTableModel.findOne({
      specie,
    }).exec();
  }
  async getSpecieFeedCartInPdf(
    specie: Species,
    fileName: string,
    userLang: string,
    res: any,
  ) {
    // const feedTableForSpecie = await (
    //   await this.findSpecieTables(specie)
    // ).feedTables;
    // if (
    //   !feedTableForSpecie.find((table) => table.fileName === fileName) ||
    //   !Object.values(Species).includes(specie)
    // )
    //   throw new NotFoundException();
    // try {
    //   res.sendFile(fileName, {
    //     root: path.join(
    //       storageDir(),
    //       `${STORAGE_FEED_TABLES_DIR_NAME}/${userLang}/${Species[specie]}`,
    //     ),
    //   });
    // } catch (error) {
    //   res.status(error.status).json({
    //     error: error.message,
    //   });
    // }
  }

  update(id: number, updateFeedDto: UpdateFeedDto) {
    return `This action updates a #${id} feed`;
  }

  remove(id: number) {
    return `This action removes a #${id} feed`;
  }
}
