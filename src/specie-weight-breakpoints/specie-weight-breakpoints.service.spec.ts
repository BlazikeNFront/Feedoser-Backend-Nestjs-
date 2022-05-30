import { Test, TestingModule } from '@nestjs/testing';
import { SpecieWeightBreakpointsService } from './specie-weight-breakpoints.service';

describe('SpecieWeightBreakpointsService', () => {
  let service: SpecieWeightBreakpointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecieWeightBreakpointsService],
    }).compile();

    service = module.get<SpecieWeightBreakpointsService>(SpecieWeightBreakpointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
