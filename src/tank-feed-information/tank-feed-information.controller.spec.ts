import { Test, TestingModule } from '@nestjs/testing';
import { TankFeedInformationController } from './tank-feed-information.controller';
import { TankFeedInformationService } from './tank-feed-information.service';

describe('TankFeedInformationController', () => {
  let controller: TankFeedInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankFeedInformationController],
      providers: [TankFeedInformationService],
    }).compile();

    controller = module.get<TankFeedInformationController>(TankFeedInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
