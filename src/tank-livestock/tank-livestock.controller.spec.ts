import { Test, TestingModule } from '@nestjs/testing';
import { TankLivestockController } from './tank-livestock.controller';
import { TankLivestockService } from './tank-livestock.service';

describe('TankLivestockController', () => {
  let controller: TankLivestockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankLivestockController],
      providers: [TankLivestockService],
    }).compile();

    controller = module.get<TankLivestockController>(TankLivestockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
