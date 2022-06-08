import { Injectable, NotFoundException } from '@nestjs/common';
import { SpeciesValues } from 'src/constants/enums/Species';
import { STORAGE_FEED_TABLES_DIR_NAME } from '../utils/paths';
import { storageDir } from 'src/utils/paths';

import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FeedTableService {
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
      res.status(error.status).json({
        error: error.message,
        status: error.status,
      });
    }
  }
}
