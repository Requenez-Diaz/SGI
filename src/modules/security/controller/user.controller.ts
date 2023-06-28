import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  // @Post()
  // createdUsers(@Body() payload: Payload) {
  //   return this.userService.createUsers(payload);
  // }
}
