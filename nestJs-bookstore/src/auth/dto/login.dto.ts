import { IsEmail, IsString, MinLength } from "class-validator"
import { Role } from "../role.enum"
import { Transform } from "class-transformer"

export class LoginUserDTO {
    
    @IsEmail()
    email:string

    @IsString()
    @MinLength(6)
    @Transform(({value}) => value.trim())
    password: string

}