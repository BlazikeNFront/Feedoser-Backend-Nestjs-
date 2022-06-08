import { Controller, Get, Param } from '@nestjs/common';
import { FeedsForSpeciesService } from './feeds-for-species.service';
import { SpeciesValues } from 'src/constants/enums/Species';
@Controller('feeds-for-species')
export class FeedsForSpeciesController {
  constructor(
    private readonly feedsForSpeciesService: FeedsForSpeciesService,
  ) {}

  @Get()
  findAll() {
    return this.feedsForSpeciesService.findAll();
  }

  @Get('specie/:specie')
  findSpecieFeeds(@Param('specie') specie: SpeciesValues) {
    return this.feedsForSpeciesService.findAllSpecieFeeds(specie);
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.feedsForSpeciesService.findOne(_id);
  }
}
