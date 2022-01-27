import { Test, TestingModule } from '@nestjs/testing';
import { TankAnnotationsService } from './tank-annotations.service';

describe('TankAnnotationsService', () => {
  let service: TankAnnotationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TankAnnotationsService],
    }).compile();

    service = module.get<TankAnnotationsService>(TankAnnotationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
