import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { FeedQuality } from 'src/constants/enums/FeedQuality';

@Schema({ collection: 'feeds' })
export class FeedEntity extends Document {
  @Prop()
  name: string;
  @Prop()
  size: string;
  quality: FeedQuality;
  fileName: string;
}

export const FeedEntitySchema = SchemaFactory.createForClass(FeedEntity);
