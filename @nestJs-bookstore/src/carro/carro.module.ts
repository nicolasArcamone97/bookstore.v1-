import { Module } from '@nestjs/common';
import { CarroService } from './service/carro.service';
import { CarroController } from './controllers/carro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';
import { LibroModule } from 'src/libro/libro.module';

@Module({
  imports: [TypeOrmModule.forFeature([Carro]), LibroModule],
  providers: [CarroService],
  controllers: [CarroController],
  exports: [CarroService, TypeOrmModule]
})
export class CarroModule {}
