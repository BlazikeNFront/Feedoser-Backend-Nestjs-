import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FeedTypes } from 'src/constants/enums/FeedType';
import { FeedQuality } from 'src/constants/enums/FeedQuality';
import { Document } from 'mongoose';

@Schema({ collection: 'feedTables' })
export class Feed extends Document {
  @Prop()
  pelletSize: string;
  @Prop()
  fullName: string;
  @Prop()
  feedType: FeedTypes;
  @Prop()
  feedQuality: FeedQuality;
}

export const FeedSchema = SchemaFactory.createForClass(Feed);
