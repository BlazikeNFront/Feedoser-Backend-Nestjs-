import { Injectable, NotFoundException } from '@nestjs/common';
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
    console.log(TankAnnotationDto);
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
    updateTankAnnotationDto: Partial<TankAnnotationDto>,
  ) {
    const { id, date, title, description, enviromentalData, isImportant } =
      updateTankAnnotationDto;
    if (!id) throw new NotFoundException();

    return {
      id: await (
        await this.TankModel.findOneAndUpdate(
          { _id: tankId },
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
                'annotation.id': new mongoose.mongo.ObjectId(id),
              },
            ],
          },
        ).exec()
      )._id,
    };
  }
  async remove(tankId: string, annotationId: string) {
    return {
      id: await (
        await await this.TankModel.findByIdAndUpdate(
          { _id: tankId },
          {
            $pull: {
              annotations: { id: new mongoose.mongo.ObjectId(annotationId) },
            },
          },
        ).exec()
      )._id,
    };
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
