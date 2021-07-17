import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserModel } from 'tools/dtos/models/user.model';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    createUser(@Body() body:UserCreateDto){
        return this.userService.createUser(body)
    }

    @Get()
    getAllUsers():UserModel[]{
        return this.userService.getAllUsers();
    }



}
