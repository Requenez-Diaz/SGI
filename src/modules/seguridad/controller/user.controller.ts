import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
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

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id);
  }

  @Put('/:id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() payload: usersDto) {
    return this.userService.updateUser(id, payload);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleted(id);
  }
}
