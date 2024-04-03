import { Injectable } from '@angular/core';
import { Libro } from '../libro.interfaz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    { 
      id: 1,
      titulo: 'Para ser humanos',
      autor: 'Pablo Melicchio',
      descripcion:'El legado de Adolfo Pérez Esquivel, instrumento de la paz',
      precio: 3.000,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_784657-MLU73231928049_122023-O.webp'
    },
    { 
      id: 2,
      titulo: 'La felicidad',
      autor: 'Gabriel Rolon',
      descripcion:'El arte de escuchar el deseo. Como imposible y como quimera, como fin y también como imperativo, la idea de la felicidad nos interpela más que nunca en los tiempos que corren.',
      precio: 24.900,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_758457-MLU75135654463_032024-O.webp'
    },
    {
      id: 3,
      titulo: 'Asesinos seriales',
      autor: 'Gabriel Rolon',
      descripcion:'Asesinos seriales',
      precio: 11.000,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_960156-MLU74303121196_022024-O.webp'
    },
    { 
      id: 4,
      titulo: 'Para ser humanos',
      autor: 'Pablo Melicchio',
      descripcion:'El legado de Adolfo Pérez Esquivel, instrumento de la paz',
      precio: 3.000,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_784657-MLU73231928049_122023-O.webp'
    },
    { 
      id: 5,
      titulo: 'La felicidad',
      autor: 'Gabriel Rolon',
      descripcion:'El arte de escuchar el deseo. Como imposible y como quimera, como fin y también como imperativo, la idea de la felicidad nos interpela más que nunca en los tiempos que corren.',
      precio: 24.900,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_758457-MLU75135654463_032024-O.webp'
    },
    {
      id: 6,
      titulo: 'Asesinos seriales',
      autor: 'Gabriel Rolon',
      descripcion:'Asesinos seriales',
      precio: 11.000,
      portada: 'https://http2.mlstatic.com/D_NQ_NP_960156-MLU74303121196_022024-O.webp'
    }
  ]
  
  
  
  
  constructor() {
    this.obtenerLibros()
    console.log(this.libros)
   }



  obtenerLibros(): Libro[]{
    return this.libros
  }

  obtenerLibro(libroId:number){
    const libro = this.libros.find( librito => librito.id == libroId)
    return libro
  }

  crearLibro(libro:Libro){
    const librito: Libro = {
      id: libro.id,
      titulo: libro.titulo,
      descripcion: libro.descripcion,
      autor: libro.autor,
      precio: libro.precio,
      portada: libro.portada
    } 

    this.libros.push(librito)
  }


}
