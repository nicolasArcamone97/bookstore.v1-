import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carro } from '../entities/carro.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarroService {

    constructor(@InjectRepository(Carro) private readonly carroRepository: Repository<Carro>){}

    public async findCarros(): Promise<Carro[]>{
        return await this.carroRepository.find({relations:['usuario']})
    }

    public async createCarro(){
        const carro = new Carro()
        const newCarro = this.carroRepository.create(carro)
        return this.carroRepository.save(newCarro)
    }




}
