import { GroupModel } from "../models/group.model";
import { RoleModel } from "../models/role.model";

export class UserCreateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthday: Date;
}

export class UserUpdateDto {
    name: string;
    surname: string;
    password: string;
    email: string;
    birthDay: Date;
    
}

export class UserLoginDto {
   
    email: string;
    password: string;

}