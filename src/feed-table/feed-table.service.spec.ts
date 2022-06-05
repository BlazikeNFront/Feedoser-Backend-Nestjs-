import { Test, TestingModule } from '@nestjs/testing';
import { FeedTableService } from './feed-table.service';

describe('FeedTableService', () => {
  let service: FeedTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedTableService],
    }).compile();

    service = module.get<FeedTableService>(FeedTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
