import { Test, TestingModule } from '@nestjs/testing';
import { TanksController } from './tanks.controller';

describe('TanksController', () => {
  let controller: TanksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TanksController],
    }).compile();

    controller = module.get<TanksController>(TanksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
