import { Controller, Get, Param, Res } from '@nestjs/common';
import { Species } from 'src/constants/enums/Species';
import { FeedsService } from './feeds.service';
// import { CreateFeedDto } from './dto/create-feed.dto';
// import { UpdateFeedDto } from './dto/update-feed.dto';

@Controller('feedTables')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  // @Post()
  // create(@Body() createFeedDto: CreateFeedDto) {
  //   return this.feedsService.create(createFeedDto);
  // }

  @Get(':specie')
  findOne(@Param('specie') specie: Species) {
    return this.feedsService.findSpecieTables(specie);
  }
  @Get(':specie/:cartId/pdf')
  getSpecieartInPdf(
    @Param('specie') specie: Species,
    @Param('cartId') cartId: string,
    @Res() res: any,
  ) {
    return this.feedsService.getSpecieFeedCartInPdf(specie, cartId, res);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFeedDto: UpdateFeedDto) {
  //   return this.feedsService.update(+id, updateFeedDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.feedsService.remove(+id);
  // }
}
