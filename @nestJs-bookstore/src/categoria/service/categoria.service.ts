import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entity';
import { Repository } from 'typeorm';
import { Libro } from 'src/libro/entities/libro.entity';
import { LibroService } from 'src/libro/service/libro.service';

@Injectable()
export class CategoriaService {

    constructor(@InjectRepository(Categoria) private readonly categoriaRepositoty: Repository<Categoria>,
                private readonly libroService: LibroService){}



    // obtener todas las categorias
    public async findCategorias(): Promise<Categoria[]> {
        return await this.categoriaRepositoty.find({
            relations: ['categorias']
        })
    }

    public async findCategoria(id:number): Promise<Categoria> {
        // obtengo la categoria con el id 
        const categoria:Categoria = await this.categoriaRepositoty.findOne({ 
            where: {id:id}, 
            relations: ['categorias']})

        // '!categoria = si es null o undefined da true, si tiene un elemento osea no es null da false
        if(!categoria){
            // codigo a ejecutar si la categoria es null o undefined osea da true
            throw new BadRequestException('No existe la categoria')
        }

        return categoria
    }

    // crear categoria nueva 
    public async crearCategoria(categori:Categoria): Promise<void> {
        // verifico que no exista la categoria previamente por el nombre
        const categoria: Categoria = await this.categoriaRepositoty.findOneBy({nombre: categori.nombre})

        // si la categoria es diferente que null es porque ya existe una 
        if(categoria !== null){
            throw new BadRequestException('Ya existe una categoria')
        }

        // guardamos la instancia creada 
        const newCategoria = this.categoriaRepositoty.create(categoria)

        // guardamos en la db
        this.guardarCategoria(newCategoria)
    }

    public async guardarCategoria(categoria:Categoria){
        return this.categoriaRepositoty.save(categoria)
    }

    // asignar libro a categoria
    public async asignarLibro(idCategoria:number, idLibro:number){
        // const verificar que exista la categoira y el libro
        const categoria: Categoria = await this.findCategoria(idCategoria)

        const librito: Libro = await this.libroService.findLibro(idLibro)

        // verifico que el libro no exista en la lista de libros de la categoria
        const existeLibro = categoria.libros.find( libro => libro.id == librito.id)

        if(existeLibro !== null){
            throw new BadRequestException('El libro ya existe en la categoria')
        }

        categoria.libros.push(existeLibro)

        this.guardarCategoria(categoria)
    }


    // eliminar libro de categoria
    public async deleteLibro(idCategoria:number, idLibro:number){
        // const verificar que exista la categoira y el libro
        const categoria: Categoria = await this.findCategoria(idCategoria)

        const librito: Libro = await this.libroService.findLibro(idLibro)

        // verifico que el libro no exista en la lista de libros de la categoria
        const existeLibro = categoria.libros.find( libro => libro.id == librito.id)

        if(existeLibro == null){
            throw new BadRequestException('El libro no existe en la categoria')
        }

        categoria.libros.find( libro => {
            libro.id == librito.id 
            this.categoriaRepositoty.delete(librito)
        })

        this.guardarCategoria(categoria)

        return categoria
    }










}
