import { Injectable } from '@nestjs/common';
import { usersDto } from '../dto/users.dto';

@Injectable()
export class UsersService {
  users: any[] = [];

  countItems() {
    return this.users.length;
  }
  created(user: any) {
    this.users.push(user);
    return `users created with exit`;
  }

  getUsers() {
    return this.users;
  }
  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }

  updateUser(id: number, payload: usersDto) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = payload;
    return 'users create whit exit';
  }

  deleted(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'users delete';
  }

  existEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
