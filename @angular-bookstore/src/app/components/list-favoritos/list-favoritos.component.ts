import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

import { Libro } from 'src/interfaces/libro.interface';

@Component({
  selector: 'app-list-favoritos',
  templateUrl: './list-favoritos.component.html',
  styleUrls: ['./list-favoritos.component.css']
})
export class ListFavoritosComponent implements OnInit{

  
  // lista vacia de libros
  libros?: Libro[] 

  constructor(private usuarioService: UsuarioService){

    this.libros = [
      {
        "id": 4,
        "titulo": "Martín Fierro",
        "autor": "José Hernández",
        "descripcion": "El poema épico que define la literatura gauchesca.",
        "precio": 1200,
        "portada": "https://dcdn.mitiendanube.com/stores/004/088/117/products/665662-fc5c5c361bf2bd6cdb17274863220864-1024-1024.webp",
        "categorias": [
          {
            "id": 5,
            "nombre": "Literatura Gauchesca",
            "descripcion": "Obras literarias que narran la vida y costumbres de los gauchos.",
            "libros": []
          },
          {
            "id": 7,
            "nombre": "Poesía",
            "descripcion": "Obras en verso que expresan sentimientos y emociones.",
            "libros": []
          }
        ]
      },
      {
        "id": 5,
        "titulo": "Operación Masacre",
        "autor": "Rodolfo Walsh",
        "descripcion": "Una investigación pionera del periodismo narrativo sobre crímenes políticos.",
        "precio": 1700,
        "portada": "https://dcdn.mitiendanube.com/stores/004/088/117/products/691501-a2003e092dab5749f617285648800468-1024-1024.webp",
        "categorias": [
          {
            "id": 8,
            "nombre": "Periodismo Narrativo",
            "descripcion": "Relatos basados en investigaciones periodísticas.",
            "libros": []
          },
          {
            "id": 9,
            "nombre": "Política",
            "descripcion": "Obras que abordan temas políticos y sociales.",
            "libros": []
          }
        ]
      }
    ]
  }

  ngOnInit(): void {
   
  }

  

}
