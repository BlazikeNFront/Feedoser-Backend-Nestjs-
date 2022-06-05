import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedTable } from 'src/constants/interfaces/FeedTable';
import { FeedType } from 'src/feeds-type/entities/feedType.entity';
import * as mongoose from 'mongoose';

@Schema({ collection: 'feedTables' })
export class FeedTableEntity extends mongoose.Document {
  @Prop()
  specie: SpeciesValues;
  @Prop(
    raw({
      feedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FeedType',
      },
      fcrForSizes: {} || null,
      temperatureFeedDoses: {},
    }),
  )
  feedTables: FeedTable[];
}

export const FeedTableEntitySchema =
  SchemaFactory.createForClass(FeedTableEntity);
