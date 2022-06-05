import { Test, TestingModule } from '@nestjs/testing';
import { FeedTableController } from './feed-table.controller';
import { FeedTableService } from './feed-table.service';

describe('FeedTableController', () => {
  let controller: FeedTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedTableController],
      providers: [FeedTableService],
    }).compile();

    controller = module.get<FeedTableController>(FeedTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
