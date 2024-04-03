import { GeneroUser } from "src/user/genero.enum"
import { Role } from "../role.enum"
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"
import { Transform } from "class-transformer"
import { Carro } from "src/carro/entities/carro.entity"

export class RegisterUserDTO {
    
    @IsString()
    @MinLength(1)
    nombre:string

    @IsEmail()
    email:string

    @IsString()
    @MinLength(6)
    @Transform(({value})=> value.trim())
    password: string

    @IsOptional()
    role: Role

    @IsOptional()
    genero: GeneroUser

    @IsOptional()
    carro: Carro

}