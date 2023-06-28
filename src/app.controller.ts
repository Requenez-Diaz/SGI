import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { identity, sequenceEqual } from 'rxjs';

import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.config.get('API_KEY');
  }
}
