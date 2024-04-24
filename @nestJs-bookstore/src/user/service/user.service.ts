import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dto/user.dto';
import { Libro } from 'src/libro/entities/libro.entity';
import { LibroService } from 'src/libro/service/libro.service';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,
                private readonly libroService: LibroService){}


    // obtener todos los usuarios de la db, (rol admin)
    public async findUsers(): Promise<User[]> {
        // si no hay usuarios retorna una lista vacioa
        const users = await this.userRepository.find({relations: ['carro','libros']})
        
        // si la lista es === 0, no hay usuarios
        if(users.length === 0){
            console.log('No tienes aun usuarios en tu db')
        }

        // retornamos los usuarios o lista vacia 
        return users
    }


    // obtener un usuario por id
    public async findUser(id:number): Promise<User>{
        // buscamos el usuario, si no hay un usuario con ese id devuelve un null
        const user = await this.userRepository.findOne({where: {id:id},
            relations: ['libros','carro']
        })

        
        // manejamos casos, si !user es igual a null o undefined va a retornar un true
        if(!user){
            throw new NotFoundException('No hay usuarios con el id buscado')
        }   

        return user
    }


    // obtener usuario por email, funcion echa con el fin para validar que no allá duplicados
    public async findUserByEmail(email:string): Promise<User> {
        return await this.userRepository.findOneBy({email})
    }


    // crear usuario
    public async createUser(user:CreateUserDTO){
        const userEmail = await this.findUserByEmail(user.email)

        if(userEmail !== null){
            throw new ConflictException('Ya existe un usuario registrado con ese email')
        }
        
        // creamos una nueva instacia del usuario pasado por el cliente
         const newUser = this.userRepository.create(user)
        
         return this.guardarUser(newUser)
    }


    public async guardarUser(user:CreateUserDTO){
        return this.userRepository.save(user)
    }

    // funcion que recibe un id usuario y se le asigna a su lista de libros el libroId recibido
    public async asignarLibro(usuarioId:number, libroId:number): Promise<User>{
            // obrtenemos el usuario y libro, 
            // findUser ya se encarga de verificar que exista el id del usuario en la db
            const usuario = await this.findUser(usuarioId)
            const librito = await this.libroService.findLibro(libroId)
            console.log(usuario.libros)
            // verifico que no exista ya la relacion, para evitar error de duplicado
            // indexOf hace una busqueda estricta osea usa ===, si no encuentra el elemento retorna un -1
            const libroExistente = usuario.libros.find(libr => libr.id === librito.id)
        

            // si libroExistente no es undefined, significa que el libro ya esta en la lista del usuario, !libroExistente es para contra
            if(libroExistente){
                throw new NotFoundException('El libro ya está en la lista del usuario');
            }

            usuario.libros.push(librito)

            this.guardarUser(usuario)
            return usuario
    }
    
    // funcion para eliminar relacion de usuario y libro
    public async eliminarLibro(usuarioId:number, libroId:number): Promise<User>{
        // vemos si existe la relacion 
        const user = await this.findUser(usuarioId)

        // verifico que exista el libro
        const librito = await this.libroService.findLibro(libroId)

        // chequeo que el usuario tenga el libro en su lista de libros
        const existeLibro = user.libros.find(libro => {
            libro.id === librito.id 
        })

        // si retorna true significa que es undefines por ende no tiene el libro en su coleccion
        if(existeLibro){
            throw new BadRequestException('No existe este libro en la lista del usuario')
        }

        const nuevaListaLibros = user.libros.filter( libro => libro.id !== librito.id)
        
        user.libros = nuevaListaLibros

        this.guardarUser(user)

        return user
    }
    

}
