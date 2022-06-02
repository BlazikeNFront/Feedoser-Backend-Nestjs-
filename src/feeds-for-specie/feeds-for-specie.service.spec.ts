import { Test, TestingModule } from '@nestjs/testing';
import { FeedsForSpecieService } from './feeds-for-specie.service';

describe('FeedsForSpecieService', () => {
  let service: FeedsForSpecieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedsForSpecieService],
    }).compile();

    service = module.get<FeedsForSpecieService>(FeedsForSpecieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
