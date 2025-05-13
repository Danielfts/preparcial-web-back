import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration, {
  config_schema,
  IConfiguration,
} from './config/configuration';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<IConfiguration>) => {
        const db_config: TypeOrmModuleOptions = configService.get('database', {
          infer: true,
        })!;
        return db_config;
      },
    }),
    ConfigModule.forRoot({
      validationSchema: config_schema,
      load: [configuration],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
