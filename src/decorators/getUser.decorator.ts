import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { AuthToken } from 'src/constants/interfaces/AuthToken';
import { JWT_SECRET } from '../constants/privates';

export const GetUser = createParamDecorator((_, context: ExecutionContext) => {
  const {
    cookies: { token },
  } = context.switchToHttp().getRequest();
  const decryptedToken = <AuthToken>jwt.verify(token, JWT_SECRET);
  return decryptedToken.userId;
});
