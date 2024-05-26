/* istanbul ignore file */

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import sapConfiguration from './config/sap.config';
import { LoggingModule } from './common';
import { LoggingInterceptor } from './common/logging/logging.interceptor';
import { HealthModule } from './health/health.module';
import { LoadModule } from './load/load.module';
import { SapModule } from 'nestjs-sap-rfc';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [sapConfiguration] }),
    LoggingModule,
    HealthModule,
    LoadModule,
    SapModule.createPoolAsync({
      isGlobal: true,
      useFactory: (config: ConfigService) => config.get('sap'),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
