import { Module } from '@nestjs/common';
import { FeedsForSpeciesService } from './feeds-for-species.service';
import { FeedsForSpeciesController } from './feeds-for-species.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FeedForSpecieEntity,
  FeedForSpecieSchema,
} from './entities/feeds-for-specie.entity';
import { FeedEntity, FeedEntitySchema } from 'src/feed/entities/feed.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedForSpecieEntity.name, schema: FeedForSpecieSchema },
    ]),
    MongooseModule.forFeature([
      { name: FeedEntity.name, schema: FeedEntitySchema },
    ]),
  ],
  controllers: [FeedsForSpeciesController],
  providers: [FeedsForSpeciesService],
})
export class FeedsForSpeciesModule {}
