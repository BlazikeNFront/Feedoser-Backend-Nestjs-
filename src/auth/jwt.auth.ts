import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export interface JwtPayload {
  id: string;
}
function getCookie(req: any): null | string {
  return req && req.cookies ? req.cookies?.JWT_TOKEN ?? null : null;
}
@Injectable()
export class JwtAuth extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {
    super({
      jwtFromRequest: getCookie,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
}
