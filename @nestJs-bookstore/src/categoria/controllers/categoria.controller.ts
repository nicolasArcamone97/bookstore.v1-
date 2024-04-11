import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../entities/categoria.entity';

@Controller('categorias')
export class CategoriaController {

    constructor(private readonly categoriaService:CategoriaService){}

    @Get()
    async findCategorias(): Promise<Categoria[]>{
        return await this.categoriaService.findCategorias()
    }

    @Get(':id')
    async findCategoria(@Param('id') id:number):Promise<Categoria> {
        return await this.categoriaService.findCategoria(id)
    }

    @Post()
    crearCategoria(@Body() body: Categoria){
        return this.categoriaService.crearCategoria(body)
    }

    @Post('add-libro-categoria')
    asignarLibro(@Body() body:{categoria_id:number, libro_id:number}){
        return this.categoriaService.asignarLibro(body.categoria_id, body.libro_id)
    }



}
