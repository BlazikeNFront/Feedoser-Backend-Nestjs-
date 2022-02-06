import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tank } from 'src/tank/entities/tank.entity';
import { Model } from 'mongoose';
import { TankAnnotationDto } from './dto/tank-annotation.dto';
import * as mongoose from 'mongoose';
@Injectable()
export class TankAnnotationsService {
  constructor(
    @InjectModel(Tank.name)
    private TankModel: Model<Tank>,
  ) {}
  async create(tankId, TankAnnotationDto: TankAnnotationDto) {
    const annotationId = { id: new mongoose.mongo.ObjectId() };
    await this.TankModel.findByIdAndUpdate(tankId, {
      $push: {
        annotations: {
          ...TankAnnotationDto,
          ...annotationId,
        },
      },
    }).exec();
    return annotationId;
  }

  async findAll(tankId: string) {
    return await (
      await this.TankModel.findById(tankId).exec()
    ).annotations;
  }

  async findOne(tankId: string, annotationId: string) {
    return await (
      await this.TankModel.findById(tankId).exec()
    ).annotations.filter((annotation) => annotation.id === annotationId);
  }
  async update(
    tankId: string,
    annotationId: string,
    updateTankAnnotationDto: Partial<TankAnnotationDto>,
  ) {
    const { date, title, description, enviromentalData, isImportant } =
      updateTankAnnotationDto;
    return {
      id: await (
        await this.TankModel.findOneAndUpdate(
          { tankId },
          {
            $set: {
              'annotations.$[annotation].date': date,
              'annotations.$[annotation].title': title,
              'annotations.$[annotation].description': description,
              'annotations.$[annotation].enviromentalData': enviromentalData,
              'annotations.$[annotation].isImportant': isImportant,
            },
          },
          {
            arrayFilters: [
              {
                'annotation.id': annotationId,
              },
            ],
          },
        ).exec()
      )._id,
    };
  }
  async remove(tankId: string, annotationId: string) {
    return await await this.TankModel.findByIdAndUpdate(
      { tankId },
      {
        $pull: { annotations: { id: annotationId } },
      },
    ).exec();
  }
  async removeAll(tankId: string) {
    return await await this.TankModel.findByIdAndUpdate(
      { tankId },
      {
        $set: { annotations: [] },
      },
    ).exec();
  }
}
