import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import * as mongoose from 'mongoose';
import { FeedType } from '../../feeds-type/entities/feedType.entity';
class WeightBreakpoint {
  size: number;
  feeds: FeedType[];
}

@Schema({ collection: 'feedsForSpecie' })
export class FeedsForSpecie extends mongoose.Document {
  @Prop()
  specie: SpeciesValues;
  @Prop(
    raw({
      size: { type: Number },
      feeds: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FeedType' }],
      },
    }),
  )
  weightBreakpoints: WeightBreakpoint[];
}

export const FeedsForSpecieModel = SchemaFactory.createForClass(FeedsForSpecie);
