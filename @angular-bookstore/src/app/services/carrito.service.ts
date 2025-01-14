import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';
import { Carro } from 'src/interfaces/carro.interface';
import { Usuario } from 'src/interfaces/usuari.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private baseUrl = 'http://localhost:3001/api/carro'

  carrito?: Carro


  constructor(private http:HttpClient,
              private userService: UsuarioService
  ) { 

    this.carrito = {
      id:1,
      total: 32000,
      cantidad: 2,
      libros: [
        {
          "id": 1,
          "titulo": "El Aleph",
          "autor": "Jorge Luis Borges",
          "descripcion": "Una colección de cuentos que exploran conceptos de infinito, realidad y tiempo.",
          "precio": 12000,
          "portada": "https://dcdn.mitiendanube.com/stores/004/088/117/products/526276-adb839557331a6c0bd17273545748038-1024-1024.webp",
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
          "precio": 20000,
          "portada": "https://dcdn.mitiendanube.com/stores/004/088/117/products/619059-83dc581c0844c8b9d617274576553916-1024-1024.webp",
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
        }
      ]
    }

  }



  obtenerCarro():Carro | undefined{
    // return this.http.get<Carro>(`${this.baseUrl}/${carroId}`)
    return this.carrito
  }

  // asignarLibro(carroId:number,libroId:number){
  //   const body = {carroId:carroId, libroId:libroId}
  //   return this.http.post<void>(`${this.baseUrl}/add-libro-carro`,body)
  // }

  // eliminarLibro(carrId:number,libroId:number){
  //   return this.http.delete(`${this.baseUrl}/${carrId}/deleteLibro/${libroId}`)
  // }

}
