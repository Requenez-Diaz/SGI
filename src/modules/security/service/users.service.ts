import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: any[] = [];

  countItem() {
    return this.users.length;
  }

  createUser(user: any) {
    this.users.push(user);
    return `users created with exit`;
  }

  getUsers() {
    return this.users;
  }

  createUsers() {}
}
