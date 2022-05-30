import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import * as mongoose from 'mongoose';
import { FeedEntity } from '../../feeds/entities/feed.entity';
class WeightBreakpoint {
  size: number;
  feeds: FeedEntity[];
}

@Schema({ collection: 'speciesFeedBreakpoints' })
export class SpeciesFeedBreakpoints extends mongoose.Document {
  @Prop()
  specie: SpeciesValues;
  @Prop(
    raw({
      size: { type: Number },
      feeds: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FeedEntity' }],
      },
    }),
  )
  weightBreakpoints: WeightBreakpoint[];
}

export const SpeciesFeedBreakpointsModel = SchemaFactory.createForClass(
  SpeciesFeedBreakpoints,
);