import { Injectable } from '@nestjs/common';
import { CreateTankDto } from './dto/CreateTankDto';
import { InjectModel } from '@nestjs/mongoose';
import { Tank } from './entities/tank.entity';
import { Model } from 'mongoose';
@Injectable()
export class TankService {
  constructor(
    @InjectModel(Tank.name)
    private TankModel: Model<Tank>,
  ) {}
  async create(userId: string, createTankDto: CreateTankDto) {
    const saveAction = await this.TankModel.create({
      userId,
      ...createTankDto,
    });
    return { id: saveAction._id };
  }

  async findOne(userId: string, tankId: string): Promise<Tank[]> {
    const tank = await this.TankModel.find({ userId, id: tankId }).exec();
    return tank;
  }
  findAll() {
    console.log('find');
  }
}
