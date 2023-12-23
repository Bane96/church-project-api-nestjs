import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeormConfig from './config/typeorm.config';
import {HomeModule} from "./home/home.module";

@Module({
  imports: [UserModule, HomeModule, TypeOrmModule.forRoot(TypeormConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
