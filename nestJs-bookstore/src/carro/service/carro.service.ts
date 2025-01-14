import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carro } from '../entities/carro.entity';
import { Repository } from 'typeorm';
import { LibroService } from 'src/libro/service/libro.service';
import { Libro } from 'src/libro/entities/libro.entity';

@Injectable()
export class CarroService {

    constructor(@InjectRepository(Carro) private readonly carroRepository: Repository<Carro>,
                private readonly libroService: LibroService){}

    public async findCarros(): Promise<Carro[]>{
        return await this.carroRepository.find({relations:['usuario', 'libros']})
    }

    public async findCarro(idCarro: number): Promise<Carro> {
        const carro = await this.carroRepository.findOne({where:{id:idCarro}, relations: ['usuario', 'libros']})
        
        if(!carro){
            throw new BadRequestException('El carro con el id dado no existe ')
        }
        
        return carro
    }


  
    public async createCarro(){
        const carro = new Carro()
        const newCarro = this.carroRepository.create(carro)
        return this.carroRepository.save(newCarro)
    }

   
   
   
    public async asignarLibro(idCarro:number, idLibro:number){
        // verifico que exista el carro y libro
        const carro:Carro = await this.findCarro(idCarro)
        const libro:Libro = await this.libroService.findLibro(idLibro)

        const existeLibro = carro.libros.find( libroCarro => libroCarro.id === libro.id)

        if(existeLibro !== undefined){
            throw new BadRequestException('existe el libro en el carro')
        }

        carro.libros.push(libro)
        
        await this.carroRepository.save(carro)
    }    


   // funcion para eliminar relacion de carro y libro
   public async eliminarLibro(carroId:number, libroId:number){
    // vemos si existe la relacion 
    const carro:Carro = await this.findCarro(carroId)

    // verifico que exista el libro
    const librito = await this.libroService.findLibro(libroId)

    // chequeo que el usuario tenga el libro en su lista de libros
    const existeLibro = carro.libros.find(libro => {
        libro.id == librito.id 
    })

    // si retorna true significa que es undefines por ende no tiene el libro en su coleccion
    if(existeLibro){
        throw new BadRequestException('No existe este libro en el carro')
    }

    const nuevaListaLibros = carro.libros.filter( libro => libro.id !== librito.id)
    
    carro.libros = nuevaListaLibros

    await this.carroRepository.save(carro)
    }
















}
