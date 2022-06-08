import { Test, TestingModule } from '@nestjs/testing';
import { FeedsForSpeciesController } from './feeds-for-species.controller';
import { FeedsForSpeciesService } from './feeds-for-species.service';

describe('FeedsForSpeciesController', () => {
  let controller: FeedsForSpeciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedsForSpeciesController],
      providers: [FeedsForSpeciesService],
    }).compile();

    controller = module.get<FeedsForSpeciesController>(
      FeedsForSpeciesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
