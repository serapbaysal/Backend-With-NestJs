import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import environment from 'tools/environment/environment';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';

import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UserModule,LoginModule,SignupModule, AuthModule, MongooseModule.forRoot(environment.mongoUrl)],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
