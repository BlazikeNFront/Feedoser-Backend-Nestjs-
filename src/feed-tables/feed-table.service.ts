import { Injectable, NotFoundException } from '@nestjs/common';
import { SpeciesValues } from 'src/constants/enums/Species';
import { STORAGE_FEED_TABLES_DIR_NAME } from '../utils/paths';
import { storageDir } from 'src/utils/paths';
import { APP_LANGUAGES } from 'src/constants/global';
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
    const folderUrl = (lang) =>
      path.join(
        storageDir(),
        `${STORAGE_FEED_TABLES_DIR_NAME}/${lang}/${specie}`,
      );
    try {
      if (fs.existsSync(`${folderUrl(userLang)}/${fileName}`))
        res.sendFile(fileName, {
          root: folderUrl(userLang),
        });
      else if (
        fs.existsSync(`${folderUrl(APP_LANGUAGES.ENGLISH)}/${fileName}`)
      ) {
        res.sendFile(fileName, {
          root: folderUrl(APP_LANGUAGES.ENGLISH),
        });
      } else throw new NotFoundException();
    } catch (error) {
      res.status(error.status).json({
        error: error.message,
        status: error.status,
      });
    }
  }
}
