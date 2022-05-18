import * as path from 'path';

export const STORAGE_DIR_PATH = '../../storage';
export const STORAGE_FEED_TABLES_DIR_NAME = 'FeedTables';

export function storageDir() {
  return path.join(__dirname, STORAGE_DIR_PATH);
}
