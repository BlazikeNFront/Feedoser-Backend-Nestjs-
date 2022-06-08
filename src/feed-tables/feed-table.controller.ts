import { Controller, Get, Headers, Param, Res } from '@nestjs/common';
import { FeedTableService } from './feed-table.service';

import { SpeciesValues } from 'src/constants/enums/Species';

@Controller('feed-tables')
export class FeedTableController {
  constructor(private readonly feedTableService: FeedTableService) {}

  @Get(':specie/:fileName')
  getSpecieartInPdf(
    @Param('specie') specie: SpeciesValues,
    @Param('fileName') fileName: string,
    @Headers('x-user-lang') userLang: string,
    @Res() res: any,
  ) {
    return this.feedTableService.getSpecieFeedCartInPdf(
      specie,
      fileName,
      userLang,
      res,
    );
  }
}
