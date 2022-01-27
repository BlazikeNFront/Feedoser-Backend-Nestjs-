import { Injectable } from '@nestjs/common';
import { CreateTankDto } from './dto/CreateTank.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tank } from './entities/tank.entity';
import { Model } from 'mongoose';
import { UpdateMainTankInformationDto } from './dto/UpdateTank.dto';
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

  async findOne(id: string): Promise<Tank[]> {
    return await this.TankModel.find({ id }).exec();
  }
  async update(
    id: string,
    UpdateMainTankInformationDto: UpdateMainTankInformationDto,
  ) {
    await this.TankModel.findByIdAndUpdate(id, {
      mainTankInformation: UpdateMainTankInformationDto,
    });
  }
  async delete(id: string) {
    await this.TankModel.findByIdAndRemove(id);
  }
  async findAll(userId: string, page = 1) {
    return await this.TankModel.find({ userId })
      .limit(10)
      .skip(page - 1);
  }
}
