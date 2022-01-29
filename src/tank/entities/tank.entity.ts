import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';
import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';
import { Document } from 'mongoose';
import { MainTankInformationDTO } from '../dto/UpdateMainTankInformation.dto';
@Schema()
export class Tank extends Document {
  @Prop()
  userId: string;
  @Prop({ type: MainTankInformationDTO })
  mainTankInformation: MainTankInformation;
  // @Prop()
  // livestockInformation?: LivestockInformation;
  // @Prop()
  // feedInformation?: FeedInformation;
  // @Prop()
  // annotations?: TankAnnotation[];
}

export const TankSchema = SchemaFactory.createForClass(Tank);
