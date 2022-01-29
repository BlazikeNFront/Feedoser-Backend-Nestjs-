import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

export const GetUser = createParamDecorator(
  (_, context: ExecutionContext): User => {
    return context.switchToHttp().getRequest().user._id;
  },
);
