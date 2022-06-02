import { Controller, Get, Param } from '@nestjs/common';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedsForSpecieService } from './feeds-for-specie.service';

@Controller('feeds-for-specie')
export class FeedsForSpecieController {
  constructor(private readonly feedsForSpecieService: FeedsForSpecieService) {}

  @Get()
  findAll() {
    return this.feedsForSpecieService.findAll();
  }

  @Get(':specie')
  findOne(@Param('specie') specie: SpeciesValues) {
    return this.feedsForSpecieService.findOne(specie);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSpecieWeightBreakpointDto: UpdateSpecieWeightBreakpointDto) {
  //   return this.specieWeightBreakpointsService.update(+id, updateSpecieWeightBreakpointDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.specieWeightBreakpointsService.remove(+id);
  // }
}
