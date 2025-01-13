import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/interfaces/categoria.interface';



@Injectable({
  providedIn: 'root'
})


export class CategoriaService {

  private baseUrl = 'http://localhost:3001/api/categorias'

  listCategorias: Categoria[] = [] 

  constructor(private httpCliente: HttpClient){

    this.listCategorias = [
      {
        "id": 1,
        "nombre": "Cuentos",
        "descripcion": "Narraciones breves y concisas.",
        "libros": [
          {
            "id": 1,
            "titulo": "El Aleph",
            "autor": "Jorge Luis Borges",
            "descripcion": "Una colección de cuentos que exploran conceptos de infinito, realidad y tiempo.",
            "precio": 1500,
            "portada": "https://example.com/el-aleph.jpg",
            "categorias": []
          }
        ]
      },
      {
        "id": 2,
        "nombre": "Filosofía",
        "descripcion": "Obras que exploran conceptos filosóficos y existenciales.",
        "libros": [
          {
            "id": 1,
            "titulo": "El Aleph",
            "autor": "Jorge Luis Borges",
            "descripcion": "Una colección de cuentos que exploran conceptos de infinito, realidad y tiempo.",
            "precio": 1500,
            "portada": "https://example.com/el-aleph.jpg",
            "categorias": []
          }
        ]
      }
      
    ]
    
  }




  obtenerCategorias(){
    return this.listCategorias
  }


  obtenerCategoria(id:number){
    const categoriaEncontrada = this.listCategorias.find( cate => cate.id === id
    )
    return categoriaEncontrada
  }
  



}
