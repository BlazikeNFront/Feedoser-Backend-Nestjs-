import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FeedType } from 'src/feeds-type/entities/feedType.entity';
import * as mongoose from 'mongoose';

@Schema({ collection: 'feeds' })
export class FeedEntity extends mongoose.Document {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeedType',
  })
  feedType: FeedType;
  @Prop({ required: true })
  size: string;
  @Prop({ required: true })
  minWeight: number;
  @Prop({ required: true })
  maxWeight: number;
  @Prop({ required: true })
  fcr: number;
}

export const FeedEntitySchema = SchemaFactory.createForClass(FeedEntity);
