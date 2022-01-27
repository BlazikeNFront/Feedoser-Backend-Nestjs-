import { Test, TestingModule } from '@nestjs/testing';
import { TankLivestockInformationService } from './tank-livestock-information.service';

describe('TankLivestockInformationService', () => {
  let service: TankLivestockInformationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankLivestockInformationService],
    }).compile();

    service = module.get<TankLivestockInformationService>(TankLivestockInformationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
