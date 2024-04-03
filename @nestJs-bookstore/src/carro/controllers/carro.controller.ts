import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarroService } from '../service/carro.service';
import { Carro } from '../entities/carro.entity';

@Controller('carro')
export class CarroController {


    constructor(private readonly carroService: CarroService){}

    @Get()
    findCarros(){
        return this.carroService.findCarros()
    }

    @Post()
    createCarro(){
        return this.carroService.createCarro()
    }


}
