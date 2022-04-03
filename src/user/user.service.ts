import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
import { RegisteredUserResponse } from 'src/constants/interfaces/User';
import { User } from './entities/user.entity';
import hashPassword from 'src/utils/hashPassword';
import { JwtPayload } from '../constants/interfaces/JwtPayload';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class UserService {
  filter(user: User): RegisteredUserResponse {
    const { email } = user;
    return { email };
  }
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
    private jwtService: JwtService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<RegisteredUserResponse> {
    const { email, password } = createUserDto;
    const hashedPassword = hashPassword(password);
    const user = await this.UserModel.create({
      email,
      password: hashedPassword,
    });

    return this.filter(user);
  }
  async signIn(authCredential: AuthDto, res: Response): Promise<any> {
    const { email, password } = authCredential;
    const user = await this.UserModel.findOne({
      email,
      password: hashPassword(password),
    }).exec();
    if (!user) throw new UnauthorizedException('Invalid login credentials');
    const payload: JwtPayload = { email };
    const token = await this.jwtService.sign(payload);
    return res
      .cookie('jwt', token, {
        secure: false,
        httpOnly: true,
      })
      .json({ email });
  }

  async logout(userId: string, res: Response): Promise<any> {
    const user = await this.UserModel.findById(userId).exec();
    if (!user) throw new UnauthorizedException('Invalid login credentials');
    return res
      .cookie('jwt', '', {
        secure: false,
        httpOnly: true,
      })
      .json({ success: true, email: user.email });
  }
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
