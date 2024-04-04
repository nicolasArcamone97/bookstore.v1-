import { Injectable } from '@angular/core';
import { Categoria } from '../categoria.interface';
import { Libro } from '../libro.interfaz';

@Injectable({
  providedIn: 'root'
})


export class CategoriaService {

  listCategorias: Categoria[] = [
    
      
  ]

  constructor() { 
    this.obtenerCategorias()
  }


  obtenerCategorias(): Categoria[]{
    console.log(this.listCategorias)
    return this.listCategorias
  }

  obtenerCategoria(idCategoria:number){
    const categoria = this.listCategorias.find(categoria => categoria.id == idCategoria )
    return categoria
  }

  obtenerLibrosCategoria(idCategoria:number){
    const librosCategoria = this.obtenerCategoria(idCategoria)?.libros
    return librosCategoria
  }


}
