import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedEntity } from 'src/feed/entities/feed.entity';

@Schema({ collection: 'feedsForSpecies' })
export class FeedForSpecieEntity extends mongoose.Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FeedEntity' })
  feed: FeedEntity;
  @Prop()
  specie: SpeciesValues;
  @Prop()
  minSize: number;
  @Prop()
  maxSize: null | number;
  @Prop()
  fcr: number;
  @Prop()
  size: string;
  @Prop({ type: {} || null })
  weightBreakpoints: Record<string, number> | null;
}

export const FeedForSpecieSchema =
  SchemaFactory.createForClass(FeedForSpecieEntity);
