import { Injectable } from '@nestjs/common';
import { CreateTankAnnotationDto } from './dto/create-tank-annotation.dto';
import { UpdateTankAnnotationDto } from './dto/update-tank-annotation.dto';

@Injectable()
export class TankAnnotationsService {
  create(createTankAnnotationDto: CreateTankAnnotationDto) {
    return 'This action adds a new tankAnnotation';
  }

  findAll() {
    return `This action returns all tankAnnotations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tankAnnotation`;
  }

  update(id: number, updateTankAnnotationDto: UpdateTankAnnotationDto) {
    return `This action updates a #${id} tankAnnotation`;
  }

  remove(id: number) {
    return `This action removes a #${id} tankAnnotation`;
  }
}
