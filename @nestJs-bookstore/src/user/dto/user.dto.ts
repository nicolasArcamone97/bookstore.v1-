import { IsEmail, IsEnum, IsOptional, IsString, MinLength, minLength } from "class-validator"
import { Role } from "src/auth/role.enum";
import { Carro } from "src/carro/entities/carro.entity";
import { GeneroUser } from "../genero.enum";

export class CreateUserDTO {

    @IsString()
    @MinLength(1)
    nombre: string;
    
    @IsEmail()
    email: string

    @IsString()
    @MinLength(6)
    password: string

    @IsEnum(Role)
    role: Role
    
    @IsEnum(GeneroUser)
    genero: GeneroUser

    carro: Carro
}
