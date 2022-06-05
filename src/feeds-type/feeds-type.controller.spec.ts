import { Test, TestingModule } from '@nestjs/testing';
import { FeedsTypeController } from './feeds-type.controller';
import { FeedsTypeService } from './feeds-type.service';

describe('FeedTypeContoller', () => {
  let controller: FeedsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeedsTypeController],
      providers: [FeedsTypeService],
    }).compile();

    controller = module.get<FeedsTypeController>(FeedsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
