import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from 'src/user/user.controller';
import { UserService } from 'src/user/user.service';
import { UserSchema } from 'tools/models/user.model';
import { SignUpController } from './signup.controller';
import { SignUpService } from './signup.service';




@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema:UserSchema}])],
  controllers: [SignUpController, UserController],
  providers: [SignUpService, UserService],
})
export class SignupModule {}
