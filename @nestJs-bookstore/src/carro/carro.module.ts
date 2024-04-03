import { Module } from '@nestjs/common';
import { CarroService } from './service/carro.service';
import { CarroController } from './controllers/carro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carro } from './entities/carro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carro])],
  providers: [CarroService],
  controllers: [CarroController],
  exports: [CarroService, TypeOrmModule]
})
export class CarroModule {}
