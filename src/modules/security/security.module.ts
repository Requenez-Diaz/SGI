import { Module } from '@nestjs/common';
import { UsersModule } from './controller/users.module';
import { UsersService } from './service/users.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService]
})
export class SecurityModule {}
