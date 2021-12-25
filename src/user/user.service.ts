import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { RegisteredUserResponse } from 'src/constants/interfaces/User';

import { User } from './entities/user.entity';
import hashPassword from 'src/utils/hashPassword';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  filter(user: User): RegisteredUserResponse {
    const { username, email } = user;
    return { username, email };
  }
  constructor(
    @InjectModel(User.name)
    private UserModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<RegisteredUserResponse> {
    const { email, password, username } = createUserDto;
    const hashedPassword = hashPassword(password);
    const user = await this.UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    return this.filter(user);
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
