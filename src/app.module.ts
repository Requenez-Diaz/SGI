import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [AuthModule, DatabaseModule, SecurityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
