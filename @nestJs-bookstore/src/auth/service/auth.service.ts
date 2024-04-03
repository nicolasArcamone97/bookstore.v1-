import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/service/user.service';
import { RegisterUserDTO } from '../dto/register.dto';
import { CarroService } from 'src/carro/service/carro.service';
import * as bcrypt from 'bcrypt'
import { LoginUserDTO } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(private readonly userService:UserService,
                private readonly carroService: CarroService,
                private readonly jwtService: JwtService
                ){}

    // metodo para registrar un usuario con los datos enviados por cliente
    async register(user:RegisterUserDTO){
        // creamos un usuario, userSerivice posee un metodo para crearUsuario, el cual valida emails que sean unicos
        const usuario = await this.userService.createUser(user)

        // al registrar un usuario quiero asignarle un carro de compras por ende debemos crear la relacion en el register en este caso
        const carro = await this.carroService.createCarro()

        // hasheo de password, para aumentar la seguridad de las contraseñas
        const passwordHash = await bcrypt.hash(usuario.password, 10) 

        // asignamos valores
        usuario.carro = carro
        usuario.password = passwordHash

        // guardamos los cambios del usuario
        await this.userService.guardarUser(usuario)

        // retornamos lo que queramos, en mi caso un message de registro exitoso y el email
        return {
            message: "Usuario registrado con exito",
            email: usuario.email
        }
    }

    // login es el metodo para logear el usuario, es el que vamos a usar para autenticar el mismo
    async login({ email, password }: LoginUserDTO){
        // recibimos un usuario, verificamos que el email se valido o este registrado en la base de datos
        const userEmail = await this.userService.findUserByEmail(email)

        // si esto es igual a true, mandomos un error de que no existe el email
        if(!userEmail){
            throw new BadRequestException('Email no registrado')
        }

        // en el caso de que el email exista, comparamos el password
        const passwordValidate = await bcrypt.compare(password, userEmail.password)

        if(!passwordValidate){
            throw new BadRequestException('Password no es correcto')
        }

        // asignamos un token al usuario
        // payload es la variable que contiene la informacion publica que va a mostrar el token
        const payload = {email: userEmail.email, role: userEmail.role}

        // creamos el token y le pasamos por parametro la informacion publica que queremos que muestre
        const token = await this.jwtService.signAsync(payload)

        // retornamos el token
        return token
    }








    
}
