import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarroService } from '../service/carro.service';
import { Carro } from '../entities/carro.entity';

@Controller('carro')
export class CarroController {


    constructor(private readonly carroService: CarroService){}

    @Get()
    findCarros(){
        return this.carroService.findCarros()
    }

    @Get(':id')
    findCarro(@Param('id') idCarro:number){
        return this.carroService.findCarro(idCarro)
    }

    @Post()
    createCarro(){
        return this.carroService.createCarro()
    }
    
    @Post('add-libro-carro')
    asignarLibro(@Body() body:{carroId:number, libroId:number}){
        return this.carroService.asignarLibro(body.carroId, body.libroId)
    }


    @Delete(':carroId/deleteLibro/:libroId')
    deleteLibro(@Param('carroId') carroId: number, @Param('libroId') LibroId:number){
        return this.carroService.eliminarLibro(carroId,LibroId)
    }


}
