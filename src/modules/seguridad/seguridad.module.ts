import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UsersService } from './service/users.service';

@Module({
  controllers: [UserController],
  providers: [UsersService],
})
export class SeguridadModule {}
