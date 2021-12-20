import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';
import { RegisteredUserResponse } from 'src/constants/interfaces/User';

import { User } from './entities/user.entity';
import hashPassword from 'src/utils/hashPassword';
import { HttpService } from '@nestjs/axios';

import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
  async create(createUserDto: CreateUserDto): Promise<RegisteredUserResponse> {
    const { email, password, username } = createUserDto;
    const user = new User();
    user.email = email;
    user.username = username;
    user.password = hashPassword(password);
    const response = await this.httpService
      .post(`${process.env.FIREBASE_DB}/users.json`, user)
      .pipe(tap((data) => data))
      .toPromise();
    //   await fetch(process.env.FIREBASE_DB, {
    //   method: 'POST',
    //   body: JSON.stringify(user),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    return response.config.data;
  }

  findAll() {
    return `This action returns all user`;
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
