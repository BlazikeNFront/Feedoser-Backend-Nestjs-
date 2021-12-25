import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';

import { Response } from 'express';
import { User } from 'src/user/entities/user.entity';
import hashPassword from 'src/utils/hashPassword';
import * as jwt from 'jsonwebtoken';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  private createToken(userId: string) {
    return jwt.sign(
      {
        userId,
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
    );
  }

  async login(req: AuthLoginDto, res: Response): Promise<any> {
    try {
      const user = await this.UserModel.findOne({
        username: req.username,
        password: hashPassword(req.password),
      }).exec();
      if (!user) return res.json({ error: 'Invalid login data!' });
      else {
        const token = await this.createToken(user.id);
        return res
          .cookie('token', token, {
            secure: false,
            domain: 'localhost',
            httpOnly: true,
          })
          .json({ ok: true });
      }
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
}
