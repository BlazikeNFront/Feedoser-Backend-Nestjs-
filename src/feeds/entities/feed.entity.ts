import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Species } from 'src/constants/enums/Species';
import { FeedTable } from 'src/constants/interfaces/FeedTable';
import { Document } from 'mongoose';

@Schema({ collection: 'feedTables' })
export class FeedTableEntity extends Document {
  @Prop()
  specie: Species;
  @Prop()
  feedTables: FeedTable[];
}

export const FeedTableEntitySchema =
  SchemaFactory.createForClass(FeedTableEntity);
