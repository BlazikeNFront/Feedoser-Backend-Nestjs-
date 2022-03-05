import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthDto } from './dto/auth.dto';
import { GetUser } from 'src/decorators/getUserId.decorator';
import { AuthGuard } from '@nestjs/passport';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signUp')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @Post('signIn')
  signIn(@Body() authDto: AuthDto, @Res() res: Response) {
    return this.userService.signIn(authDto, res);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete('signIn/')
  logoutUser(@GetUser() userId: string, @Res() res: Response) {
    return this.userService.logout(userId, res);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@GetUser() userId: string, @Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
