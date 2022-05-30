import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecieWeightBreakpointsService } from './specie-weight-breakpoints.service';
import { CreateSpecieWeightBreakpointDto } from './dto/create-specie-weight-breakpoint.dto';
import { UpdateSpecieWeightBreakpointDto } from './dto/update-specie-weight-breakpoint.dto';

@Controller('specie-weight-breakpoints')
export class SpecieWeightBreakpointsController {
  constructor(
    private readonly specieWeightBreakpointsService: SpecieWeightBreakpointsService,
  ) {}

  @Post()
  create(
    @Body() createSpecieWeightBreakpointDto: CreateSpecieWeightBreakpointDto,
  ) {
    return this.specieWeightBreakpointsService.create(
      createSpecieWeightBreakpointDto,
    );
  }

  @Get()
  findAll() {
    return this.specieWeightBreakpointsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.specieWeightBreakpointsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSpecieWeightBreakpointDto: UpdateSpecieWeightBreakpointDto) {
  //   return this.specieWeightBreakpointsService.update(+id, updateSpecieWeightBreakpointDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.specieWeightBreakpointsService.remove(+id);
  // }
}
