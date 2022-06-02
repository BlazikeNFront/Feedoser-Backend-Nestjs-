import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedTable } from 'src/constants/interfaces/FeedTable';
import * as mongoose from 'mongoose';
// export interface FeedTable {
//   feedId: ObjectId;
//   fcrForSizes: Record<string , number> | null;
//   temperatureFeedDoses: Record<string, unknown>;
// }

@Schema({ collection: 'feedTables' })
export class FeedTableEntity extends mongoose.Document {
  @Prop()
  specie: SpeciesValues;
  @Prop(
    raw({
      feedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'FeedEntity',
      },
      fcrForSizes: {} || null,
      temperatureFeedDoses: {},
    }),
  )
  feedTables: FeedTable[];
}

export const FeedTableEntitySchema =
  SchemaFactory.createForClass(FeedTableEntity);
