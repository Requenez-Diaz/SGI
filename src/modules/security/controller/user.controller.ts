import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { usersDto } from '../dto/users.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createdUsers(@Body() payload: usersDto) {
    return this.userService.created(payload);
  }
}
