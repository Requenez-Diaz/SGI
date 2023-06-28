import { Injectable } from '@nestjs/common';

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
}
