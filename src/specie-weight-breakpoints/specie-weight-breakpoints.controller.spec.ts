import { Test, TestingModule } from '@nestjs/testing';
import { SpecieWeightBreakpointsController } from './specie-weight-breakpoints.controller';
import { SpecieWeightBreakpointsService } from './specie-weight-breakpoints.service';

describe('SpecieWeightBreakpointsController', () => {
  let controller: SpecieWeightBreakpointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecieWeightBreakpointsController],
      providers: [SpecieWeightBreakpointsService],
    }).compile();

    controller = module.get<SpecieWeightBreakpointsController>(SpecieWeightBreakpointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
