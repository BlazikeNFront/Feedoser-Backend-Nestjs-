import { Test, TestingModule } from '@nestjs/testing';
import { FeedsForSpecieController } from './feeds-for-specie.controller';
import { FeedsForSpecieService } from './feeds-for-specie.service';

describe('FeedsForSpecieController', () => {
  let controller: FeedsForSpecieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedsForSpecieController],
      providers: [FeedsForSpecieService],
    }).compile();

    controller = module.get<FeedsForSpecieController>(FeedsForSpecieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
