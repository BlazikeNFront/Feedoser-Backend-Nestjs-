import { Test, TestingModule } from '@nestjs/testing';
import { TankLivestockInformationController } from './tank-livestock-information.controller';
import { TankLivestockInformationService } from './tank-livestock-information.service';

describe('TankLivestockInformationController', () => {
  let controller: TankLivestockInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankLivestockInformationController],
      providers: [TankLivestockInformationService],
    }).compile();

    controller = module.get<TankLivestockInformationController>(TankLivestockInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
