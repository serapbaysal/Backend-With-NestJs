import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import  environment from 'tools/environment/environment'

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;


@Injectable()
export class SignUpService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>
    ) {

    }

    async signUp(user: UserCreateDto): Promise<UserModel> {   // MongoDb promise döner, dolayısıyla yazılan fonksiyonlar da promise dönmeli
       try {
           return this.userMongo.create(user);
       } catch (error) {
          return error; 
       }
      
    }


    
}
