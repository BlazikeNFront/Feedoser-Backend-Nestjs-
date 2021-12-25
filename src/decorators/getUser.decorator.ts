import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../constants/privates';

export const GetUser = createParamDecorator((_, context: ExecutionContext) => {
  const {
    cookies: { token },
  } = context.switchToHttp().getRequest();
  console.log(JWT_SECRET);
  return jwt.verify(token, JWT_SECRET);
});
