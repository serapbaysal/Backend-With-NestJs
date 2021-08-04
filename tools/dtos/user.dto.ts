

export class UserCreateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    refreshToken :string
   
}

export class UserUpdateDto {
    name: string;
    surname: string;
    password: string;
    email: string;
   
    
}

export class UserLoginDto {
   
    email: string;
    password: string;
    refreshToken: string;

}

export class ForgotPasswordDto {
    email:string;
    
}