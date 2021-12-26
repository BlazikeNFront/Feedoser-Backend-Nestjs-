import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';
import { TankAnnotations } from 'src/constants/interfaces/TankAnnotations';
import { Document } from 'mongoose';
@Schema()
export class Tank extends Document {
  @Prop()
  userId: string;
  @Prop()
  mainTankInformation: MainTankInformation;
  @Prop()
  livestockInformation?: LivestockInformation;
  @Prop()
  feedInformation?: FeedInformation;
  @Prop()
  annotations?: TankAnnotations[];
}

export const TankSchema = SchemaFactory.createForClass(Tank);
