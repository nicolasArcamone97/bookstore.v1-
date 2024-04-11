import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { CategoriaController } from './controllers/categoria.controller';
import { CategoriaService } from './service/categoria.service';

@Module({
  imports:[TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports:[CategoriaService, TypeOrmModule]
})
export class CategoriaModule {}
