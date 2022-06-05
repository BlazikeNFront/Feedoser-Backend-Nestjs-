import { Controller, Get, Param } from '@nestjs/common';

import { FeedsTypeService } from './feeds-type.service';

// import { CreateFeedDto } from './dto/create-feed.dto';
// import { UpdateFeedDto } from './dto/update-feed.dto';

@Controller('feeds-type')
export class FeedsTypeController {
  constructor(private readonly FeedsTypeService: FeedsTypeService) {}

  @Get(':id')
  findFeed(@Param('id') id: string) {
    return this.FeedsTypeService.findFeed(id);
  }
}
