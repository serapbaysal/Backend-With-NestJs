import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {

    }


    async loginUser(user: UserLoginDto): Promise<any> {
        try {
            const existUser = await this.userMongo.findOne(
                {
                    email: user.email
                }
            ).exec();
            if (existUser.email) {
                let checkPwd;
                await this.userService.compareHashes(user.password, existUser.password).then(resp => {
                    if (resp) {
                        checkPwd = true;
                    } else {
                        checkPwd = false
                    }
                })
                if (checkPwd) {

                    const payload = {userName:existUser.name, sub:existUser.id}
                    const refreshToken = this.jwtService.sign(payload);
            
                    
                    return await this.userMongo.findOneAndUpdate({email:user.email},{refreshToken}, {new: true, useFindAndModify:false})
                } else {
                    return await { success: false, response: 'user password is incorrect' }
                }
            }else {
                return await { success: false, response: 'user does not exists' }
            }
        } catch (error) {
            return await {success: false, error}
        };
        
    }
}
