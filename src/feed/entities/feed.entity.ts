import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { SpeciesValues } from 'src/constants/enums/Species';
import { FeedQuality } from 'src/constants/enums/FeedQuality';
@Schema({ collection: 'feeds' })
export class FeedEntity extends Document {
  @Prop()
  name: string;
  @Prop()
  sizes: string[];
  @Prop()
  speciesWithFeedTables: SpeciesValues[];
  @Prop()
  quality: FeedQuality;
  @Prop()
  fileName: string;
}

export const FeedEntitySchema = SchemaFactory.createForClass(FeedEntity);
