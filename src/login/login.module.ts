import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'tools/models/user.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import environment from '../../tools/environment/environment'


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), JwtModule.register({
    secret: environment.secret,
    signOptions: { expiresIn: '30d' },
  }),],
  controllers: [LoginController],
  providers: [LoginService, UserService ],
})
export class LoginModule {}