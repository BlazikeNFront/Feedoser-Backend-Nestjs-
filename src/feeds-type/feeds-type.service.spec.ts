import { Test, TestingModule } from '@nestjs/testing';
import { FeedsTypeService } from './feeds-type.service';

describe('FeedsService', () => {
  let service: FeedsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeedsTypeService],
    }).compile();

    service = module.get<FeedsTypeService>(FeedsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
