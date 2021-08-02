import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';


@Injectable()
export class LoginService {

    constructor(@InjectModel('User') private readonly userMongo: Model<UserModel>,
        private readonly userService: UserService
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
                    return await { success: true, value: existUser }
                } else {
                    return await { success: false, response: 'user password is incorrect' }
                }
            }else {
                return await { success: false, response: 'user does not exists' }
            }
        } catch (error) {
            return await {success: false}
        };
        
    }
}
