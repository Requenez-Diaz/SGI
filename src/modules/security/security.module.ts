import { Module } from '@nestjs/common';

import { UsersService } from './service/users.service';
import { UserController } from './controller/user.controller';

@Module({
  imports: [UserController],
  providers: [UsersService],
})
export class SecurityModule {}
