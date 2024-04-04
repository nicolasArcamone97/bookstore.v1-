import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from '../entities/libro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService {

    constructor(@InjectRepository(Libro) private readonly libroRepository:Repository<Libro>){}



    // obtener libros de la base de datos 
    public async findLibros(): Promise<Libro[]>{
        const libros = await this.libroRepository.find({
          relations: {
            usuarios: true
          }
        })
        
        if(!libros || libros.length == 0){
            throw new BadRequestException('No tines libros aun')
        }
    
        return libros
    }

    
    // funcion para obtener un libro 
    public async findLibro(id:number): Promise<Libro>{
        return await this.libroRepository.findOne({where: {id:id}, relations: ['usuarios']
        })
    }


    // funcion para crear un libro
    public async createLibro(libro:Libro){
        const libroExistente = await this.libroRepository.findOneBy({titulo: libro.titulo}) 

        // esto verifica si el libroExistene es flasy, osea undefind, null o Nan
        // lo cual siginifica que si es true, es porque es lo anterior entonces no existe en la base de datos
        // if(!libroExistente){
        //     throw new BadRequestException('El libro no existe en la base de datos')
        // }

        if(libroExistente){
            throw new BadRequestException('El libro ya existe en la base de datos')
        }

        const newLibro = this.libroRepository.create(libro)
        this.guardarLibro(newLibro)
    }


    // gudar cambios 
    public async guardarLibro(libro:Libro){
        return await this.libroRepository.save(libro)
    }


}
