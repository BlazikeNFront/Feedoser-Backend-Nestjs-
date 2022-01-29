import { Test, TestingModule } from '@nestjs/testing';
import { TankLivestockService } from './tank-livestock.service';

describe('TankLivestockService', () => {
  let service: TankLivestockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankLivestockService],
    }).compile();

    service = module.get<TankLivestockService>(TankLivestockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
