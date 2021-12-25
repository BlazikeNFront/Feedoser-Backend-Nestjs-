import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
interface userObject {
  userId: string;
  iat: number;
  exp: number;
}
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const token = context.switchToHttp().getRequest().cookies.token;
    if (!token) throw new UnauthorizedException();
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as userObject;
    if (!userId) throw new UnauthorizedException();
    return true;
  }
}
