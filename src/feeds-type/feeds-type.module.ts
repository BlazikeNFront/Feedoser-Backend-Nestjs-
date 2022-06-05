import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedsTypeService } from './feeds-type.service';
import { FeedsTypeController } from './feeds-type.controller';
import { FeedType, FeedTypeSchema } from './entities/feedType.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FeedType.name, schema: FeedTypeSchema },
    ]),
  ],
  controllers: [FeedsTypeController],
  providers: [FeedsTypeService],
})
export class FeedsTypeModule {}
