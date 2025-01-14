import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { RegisterUserDTO } from '../dto/register.dto';
import { LoginUserDTO } from '../dto/login.dto';
import { AuthGuard } from '../guard/auth/auth.guard';
import { Role } from '../role.enum';
import { Roles } from '../decorators/roles.decorator';
import { RolesGuard } from '../guard/auth/roles.guard';
import { Auth } from '../decorators/auth.decorator';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService:AuthService){}

    @Post('register')
    register(@Body() user:RegisterUserDTO){
        return this.authService.register(user)
    }

    @Post('login')
    login(@Body()  loginUserDTO: { email: string, password: string }){
        return this.authService.login(loginUserDTO)
    }


    @Get('profile')
    @Auth(Role.user)
    profile(@Request() req){
        return req.user
    }


}
