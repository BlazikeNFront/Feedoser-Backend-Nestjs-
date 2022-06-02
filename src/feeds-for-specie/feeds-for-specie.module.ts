import { Module } from '@nestjs/common';
import { FeedsForSpecieService } from './feeds-for-specie.service';
import { FeedsForSpecieController } from './feeds-for-specie.controller';
import {
  FeedsForSpecie,
  FeedsForSpecieModel,
} from './entities/feeds-for-specie.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FeedsForSpecie.name,
        schema: FeedsForSpecieModel,
      },
    ]),
  ],
  controllers: [FeedsForSpecieController],
  providers: [FeedsForSpecieService],
})
export class FeedsForSpecieModule {}
