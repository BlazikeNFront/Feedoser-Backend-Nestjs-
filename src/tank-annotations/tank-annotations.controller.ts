import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TankAnnotationsService } from './tank-annotations.service';
import { TankAnnotationDto } from './dto/tank-annotation.dto';
import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';

@Controller('tank-notes')
export class TankAnnotationsController {
  constructor(
    private readonly tankAnnotationsService: TankAnnotationsService,
  ) {}

  @Post(':tankId')
  create(
    @Param('tankId') tankId: string,
    @Body() TankAnnotationDto: TankAnnotationDto,
  ) {
    return this.tankAnnotationsService.create(tankId, TankAnnotationDto);
  }

  @Get(':tankId')
  findAll(@Param('tankId') tankId: string) {
    return this.tankAnnotationsService.findAll(tankId);
  }

  @Get(':tankId/:annotationId')
  findOne(
    @Param('tankId') tankId: string,
    @Param('annotationId') annotationId: string,
  ) {
    return this.tankAnnotationsService.findOne(tankId, annotationId);
  }

  @Patch(':tankId')
  update(
    @Param('tankId') tankId: string,
    @Body() updateTankAnnotationDto: Partial<TankAnnotation>,
  ) {
    return this.tankAnnotationsService.update(tankId, updateTankAnnotationDto);
  }

  @Delete(':tankId/:annotationId')
  remove(
    @Param('tankId') tankId: string,
    @Param('annotationId') annotationId: string,
  ) {
    return this.tankAnnotationsService.remove(tankId, annotationId);
  }
  @Delete(':tankId')
  removeAll(@Param('tankId') tankId: string) {
    return this.tankAnnotationsService.removeAll(tankId);
  }
}
