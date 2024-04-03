import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LibroService } from '../service/libro.service';
import { Libro } from '../entities/libro.entity';

@Controller('libro')
export class LibroController {

    constructor(private readonly libroService: LibroService){}

    
    @Get()
    findLibros(){
        return this.libroService.findLibros()
    }

    @Get(':id')
    findLibro(@Param('id') id:number){
        return this.libroService.findLibro(id)
    }

    @Post()
    createLibro(@Body() libro:Libro){
        return this.libroService.createLibro(libro)
    }





}
