import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}




}
