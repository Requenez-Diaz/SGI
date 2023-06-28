import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env',
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    SecurityModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
