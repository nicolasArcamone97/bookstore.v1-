import { Injectable } from '@angular/core';
import { Categoria } from '../categoria.interface';
import { Libro } from '../libro.interfaz';

@Injectable({
  providedIn: 'root'
})


export class CategoriaService {

  listCategorias: Categoria[] = [
    {
      id:1,
      nombre:'Policiales',
      libros: [
        { 
          id: 5,
          titulo: 'La felicidad',
          autor: 'Gabriel Rolon',
          descripcion:'El arte de escuchar el deseo. Como imposible y como quimera, como fin y también como imperativo, la idea de la felicidad nos interpela más que nunca en los tiempos que corren.',
          precio: 24900,
          portada: 'https://http2.mlstatic.com/D_NQ_NP_758457-MLU75135654463_032024-O.webp'
        },
        {
          id: 6,
          titulo: 'Asesinos seriales',
          autor: 'Gabriel Rolon',
          descripcion:'Asesinos seriales',
          precio: 110000,
          portada: 'https://http2.mlstatic.com/D_NQ_NP_960156-MLU74303121196_022024-O.webp'
        },
        {
          id: 6,
          titulo: 'Asesinos seriales',
          autor: 'Gabriel Rolon',
          descripcion:'Asesinos seriales',
          precio: 110000,
          portada: 'https://http2.mlstatic.com/D_NQ_NP_960156-MLU74303121196_022024-O.webp'
        }
    ]
    },
    {
      id:2,
      nombre:'Romanse',
      libros: [{
        id: 3,
        titulo: 'Asesinos seriales',
        autor: 'Gabriel Rolon',
        descripcion:'Asesinos seriales',
        precio: 110000,
        portada: 'https://http2.mlstatic.com/D_NQ_NP_960156-MLU74303121196_022024-O.webp'
      },
      { 
        id: 4,
        titulo: 'Para ser humanos',
        autor: 'Pablo Melicchio',
        descripcion:'El legado de Adolfo Pérez Esquivel, instrumento de la paz',
        precio: 3000,
        portada: 'https://http2.mlstatic.com/D_NQ_NP_784657-MLU73231928049_122023-O.webp'
      }]
    },
    {
      id:3,
      nombre:'Terror',
      libros: [],
    },
    {
      id:4,
      nombre:'Novelas',
      libros: []
    },
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
