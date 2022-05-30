import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSpecieWeightBreakpointDto } from './dto/create-specie-weight-breakpoint.dto';
import { UpdateSpecieWeightBreakpointDto } from './dto/update-specie-weight-breakpoint.dto';
import { SpeciesFeedBreakpoints } from './entities/specie-weight-breakpoint.entity';
import { Model } from 'mongoose';
@Injectable()
export class SpecieWeightBreakpointsService {
  constructor(
    @InjectModel(SpeciesFeedBreakpoints.name)
    private SpeciesFeedBreakpointsModel: Model<SpeciesFeedBreakpoints>,
  ) {}
  create(createSpecieWeightBreakpointDto: CreateSpecieWeightBreakpointDto) {
    return 'This action adds a new specieWeightBreakpoint';
  }

  async findAll() {
    try {
      const data = await this.SpeciesFeedBreakpointsModel.find()
        .populate('weightBreakpoints.feeds')
        .exec();
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  findOne(id: number) {
    return this.SpeciesFeedBreakpointsModel.find().populate(
      'weightBreakpoints',
    );
  }

  // update(id: number, updateSpecieWeightBreakpointDto: UpdateSpecieWeightBreakpointDto) {
  //   return `This action updates a #${id} specieWeightBreakpoint`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} specieWeightBreakpoint`;
  // }
}
