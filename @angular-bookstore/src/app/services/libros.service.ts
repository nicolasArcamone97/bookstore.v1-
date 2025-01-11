import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Libro } from 'src/interfaces/libro.interface';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private baseUrl = 'http://localhost:3001/api/libro'

  listLibros: Libro[] = []
    
  constructor(private httpClient:HttpClient) {

    this.listLibros = [
      {
        "id": 1,
        "titulo": "El Aleph",
        "autor": "Jorge Luis Borges",
        "descripcion": "Una colección de cuentos que exploran conceptos de infinito, realidad y tiempo.",
        "precio": 1500,
        "portada": "https://example.com/el-aleph.jpg",
        "categorias": [
          {
            "id": 1,
            "nombre": "Cuentos",
            "descripcion": "Narraciones breves y concisas.",
            "libros": []
          },
          {
            "id": 2,
            "nombre": "Filosofía",
            "descripcion": "Obras que exploran conceptos filosóficos y existenciales.",
            "libros": []
          }
        ]
      },
      {
        "id": 2,
        "titulo": "Rayuela",
        "autor": "Julio Cortázar",
        "descripcion": "Una novela innovadora que puede leerse de diversas maneras.",
        "precio": 2000,
        "portada": "https://example.com/rayuela.jpg",
        "categorias": [
          {
            "id": 3,
            "nombre": "Novela",
            "descripcion": "Narraciones extensas que desarrollan una trama compleja.",
            "libros": []
          },
          {
            "id": 4,
            "nombre": "Literatura Experimental",
            "descripcion": "Obras literarias que desafían las normas convencionales.",
            "libros": []
          }
        ]
      },
      {
        "id": 3,
        "titulo": "Don Segundo Sombra",
        "autor": "Ricardo Güiraldes",
        "descripcion": "Una obra clásica de la literatura gauchesca argentina.",
        "precio": 1800,
        "portada": "https://example.com/don-segundo-sombra.jpg",
        "categorias": [
          {
            "id": 5,
            "nombre": "Literatura Gauchesca",
            "descripcion": "Obras literarias que narran la vida y costumbres de los gauchos.",
            "libros": []
          },
          {
            "id": 6,
            "nombre": "Clásico",
            "descripcion": "Obras representativas de la literatura universal.",
            "libros": []
          }
        ]
      },
      {
        "id": 4,
        "titulo": "Martín Fierro",
        "autor": "José Hernández",
        "descripcion": "El poema épico que define la literatura gauchesca.",
        "precio": 1200,
        "portada": "https://example.com/martin-fierro.jpg",
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
        "portada": "https://example.com/operacion-masacre.jpg",
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


  public obtenerLibros(): Libro[]{
    return this.listLibros
  }

  public obtenerLibro(libroId:number): Observable<Libro>{
    return this.httpClient.get<Libro>(`${this.baseUrl}/${libroId}`)
  }

  public crearLibro(libro:Libro): Observable<void> {
    console.log(libro)
    return this.httpClient.post<void>(`${this.baseUrl}`, libro)
  }


}
