import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserCreateDto} from 'tools/dtos/user.dto';
import { SignUpService } from './signup.service';
import { UserService } from 'src/user/user.service';

@Controller('signup')
export class SignUpController {

    constructor(private userService:UserService, private signupService:SignUpService){}

    @Post()
    async signUp(@Body() body: UserCreateDto):Promise<UserModel>{
        body.password = await this.userService.convertToHash(body.password);
        return await this.signupService.signUp(body);

    }

    


}
