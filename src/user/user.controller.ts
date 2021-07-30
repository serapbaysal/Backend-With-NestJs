import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserCreateDto} from 'tools/dtos/user.dto';
import { UserUpdateDto } from 'tools/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post()
    async createUser(@Body() body: UserCreateDto):Promise<UserModel>{
        return await this.userService.createUser(body);

    }

    @Get()
    async getAllUsers():Promise<UserModel[]>{
        return await this.userService.findAll();
    }

    @Get(":id")
    async getUser(@Param() params) : Promise<UserModel> {
        return await this.userService.findOne(params.id);
    }

    @Put(":id") 
    async updateUser(@Param() params, @Body() user) : Promise<UserModel>{
        return await this.userService.update(params.id, user);
    }


    @Delete(":id") 
    async deleteUser(@Param() params ) : Promise<UserModel>{
        return await this.userService.delete(params.id);
    }

    



}
