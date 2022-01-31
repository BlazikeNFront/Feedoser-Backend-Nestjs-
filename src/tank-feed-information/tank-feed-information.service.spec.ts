import { Test, TestingModule } from '@nestjs/testing';
import { TankFeedInformationService } from './tank-feed-information.service';

describe('TankFeedInformationService', () => {
  let service: TankFeedInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankFeedInformationService],
    }).compile();

    service = module.get<TankFeedInformationService>(
      TankFeedInformationService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
