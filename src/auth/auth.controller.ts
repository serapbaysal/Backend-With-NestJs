import { Controller, Post, Body, Param } from '@nestjs/common';
import { UserCreateDto, UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import { AuthService } from './auth.service';
import { ForgotPasswordDto } from 'tools/dtos/user.dto';
import { UserService } from 'src/user/user.service';
import { timingSafeEqual } from 'crypto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService,
        private userService: UserService) { }

    @Post("/logout") 
    



    @Post("/resetPassword")
    async resetPassword(@Body() body: UserCreateDto) {
        body.password = await this.userService.convertToHash(body.password);
        return await this.authService.resetPassword(body.email, body.password);
    }

    @Post("/logout/:id")
    async logout(@Param() params) {
        return await this.authService.logout(params.id);
    }



}