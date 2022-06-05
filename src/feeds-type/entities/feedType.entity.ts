import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FeedQuality } from 'src/constants/enums/FeedQuality';

@Schema({ collection: 'feedTypes' })
export class FeedType extends Document {
  @Prop()
  name: string;
  @Prop()
  size: string;
  @Prop()
  quality: FeedQuality;
  @Prop()
  fileName: string;
}

export const FeedTypeSchema = SchemaFactory.createForClass(FeedType);
