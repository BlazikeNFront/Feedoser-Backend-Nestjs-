import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { FeedInformation } from 'src/constants/interfaces/FeedInformation';
import { LivestockInformation } from 'src/constants/interfaces/LiveStockInformation';
import { MainTankInformation } from 'src/constants/interfaces/MainTankInformation';
import { TankAnnotation } from 'src/constants/interfaces/TankAnnotations';
import { Document } from 'mongoose';
import { MainTankInformationDTO } from '../dto/UpdateMainTankInformation.dto';
import { TankFeedInformation } from 'src/tank-feed-information/entities/tank-feed-information.entity';
import { TankLivestockDto } from 'src/tank-livestock/dto/tank-livestock';
import { TankFeedInformationDto } from 'src/tank-feed-information/dto/tank-feed-information.dto';
@Schema()
export class Tank extends Document {
  @Prop()
  userId: string;
  @Prop({ type: MainTankInformationDTO })
  mainTankInformation: MainTankInformation;
  @Prop({ type: TankLivestockDto })
  livestockInformation: LivestockInformation;
  @Prop({ type: TankFeedInformationDto })
  feedInformation: FeedInformation;
  // @Prop()
  // annotations?: TankAnnotation[];
}

export const TankSchema = SchemaFactory.createForClass(Tank);
