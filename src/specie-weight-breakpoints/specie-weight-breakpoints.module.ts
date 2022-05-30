import { Module } from '@nestjs/common';
import { SpecieWeightBreakpointsService } from './specie-weight-breakpoints.service';
import { SpecieWeightBreakpointsController } from './specie-weight-breakpoints.controller';
import {
  SpeciesFeedBreakpoints,
  SpeciesFeedBreakpointsModel,
} from './entities/specie-weight-breakpoint.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: SpeciesFeedBreakpoints.name,
        schema: SpeciesFeedBreakpointsModel,
      },
    ]),
  ],
  controllers: [SpecieWeightBreakpointsController],
  providers: [SpecieWeightBreakpointsService],
})
export class SpecieWeightBreakpointsModule {}
