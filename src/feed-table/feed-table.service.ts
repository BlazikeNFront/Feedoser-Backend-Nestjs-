import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { STORAGE_FEED_TABLES_DIR_NAME } from '../utils/paths';
import { FeedTableEntity } from './entities/feed-table.entity';
import { storageDir } from 'src/utils/paths';
import { Model, Mongoose } from 'mongoose';
import * as path from 'path';
import * as fs from 'fs';
import { FeedType } from 'src/feeds-type/entities/feedType.entity';

@Injectable()
export class FeedTableService {
  constructor(
    @InjectModel(FeedTableEntity.name)
    private FeedTableModel: Model<FeedTableEntity>,
  ) {}

  async findSpecieTables(specie: SpeciesValues) {
    return await this.FeedTableModel.findOne({
      specie,
    })
      .populate('feedTables.feedId')
      .exec();
  }
  async findTableByFeedId(specie: string, feedId: string) {
    const tables = await this.FeedTableModel.findOne({
      specie,
    })
      .populate('feedTables.feedId')
      .lean()
      .exec();

    const table = tables.feedTables.find(
      (table) => table.feedId._id.toString() === feedId,
    );
    if (table) return table;
    return new NotFoundException();
  }
  async getSpecieFeedCartInPdf(
    specie: SpeciesValues,
    fileName: string,
    userLang: string,
    res: any,
  ) {
    const folderUrl = path.join(
      storageDir(),
      `${STORAGE_FEED_TABLES_DIR_NAME}/${userLang}/${specie}`,
    );
    try {
      if (fs.existsSync(`${folderUrl}/${fileName}`))
        res.sendFile(fileName, {
          root: folderUrl,
        });
      else throw new NotFoundException();
    } catch (error) {
      console.log(error);
      res.status(error.status).json({
        error: error.message,
        status: error.status,
      });
    }
  }
}
