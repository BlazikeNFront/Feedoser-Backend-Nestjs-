import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AuthToken } from 'src/constants/interfaces/AuthToken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const token = context.switchToHttp().getRequest().cookies.token;
    if (!token) throw new UnauthorizedException();
    const { userId } = <AuthToken>jwt.verify(token, process.env.JWT_SECRET);
    if (!userId) throw new UnauthorizedException();
    return true;
  }
}
