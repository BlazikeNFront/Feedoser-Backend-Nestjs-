import { Test, TestingModule } from '@nestjs/testing';
import { FeedsForSpeciesService } from './feeds-for-species.service';

describe('FeedsForSpeciesService', () => {
  let service: FeedsForSpeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedsForSpeciesService],
    }).compile();

    service = module.get<FeedsForSpeciesService>(FeedsForSpeciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
