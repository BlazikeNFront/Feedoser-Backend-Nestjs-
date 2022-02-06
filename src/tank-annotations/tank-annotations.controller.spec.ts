import { Test, TestingModule } from '@nestjs/testing';
import { TankAnnotationsController } from './tank-annotations.controller';
import { TankAnnotationsService } from './tank-annotations.service';

describe('TankAnnotationsController', () => {
  let controller: TankAnnotationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TankAnnotationsController],
      providers: [TankAnnotationsService],
    }).compile();

    controller = module.get<TankAnnotationsController>(TankAnnotationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
