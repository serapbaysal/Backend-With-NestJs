import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import  environment from 'tools/environment/environment'
import { UserService } from 'src/user/user.service';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = environment.hashText;


@Injectable()
export class AuthService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>,
    private readonly userService: UserService
    ) {

    }
    async logout(id:string):Promise<UserModel>{
        try {
            return await this.userMongo.findByIdAndUpdate(id, {refreshToken:""}, {new:true, useFindAndModify:false});

        } catch (error) {
            return error;
        }

    }

    async resetPassword(email: string, password:string): Promise<UserModel> {   
       try {
           const existUser = await this.userMongo.findOne({
               email:email
           }).exec();
           if(existUser) {
              
               return await this.userMongo.findOneAndUpdate({email}, {password}, {new:true, useFindAndModify:false} )
           }

       } catch (error) {
          return error; 
       }
      
    }


    
}
