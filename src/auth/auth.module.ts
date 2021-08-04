import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'tools/models/user.model';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';
import { LoginService } from 'src/login/login.service';
import { SignUpService } from 'src/signup/signup.service';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [AuthController, UserController],
  providers: [AuthService, UserService],
})
export class AuthModule {}