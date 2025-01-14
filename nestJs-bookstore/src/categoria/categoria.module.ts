import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './service/categoria.service';
import { LibroService } from 'src/libro/service/libro.service';
import { LibroModule } from 'src/libro/libro.module';

@Module({
  imports:[TypeOrmModule.forFeature([Categoria]), LibroModule],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports:[CategoriaService, TypeOrmModule]
})
export class CategoriaModule {}
