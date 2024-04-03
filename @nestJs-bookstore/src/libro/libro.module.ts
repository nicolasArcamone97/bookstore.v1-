import { Module } from '@nestjs/common';
import { LibroController } from './controllers/libro.controller';
import { LibroService } from './service/libro.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Libro])],
  controllers: [LibroController],
  providers: [LibroService],
  exports:[LibroService, TypeOrmModule]
})
export class LibroModule {}
