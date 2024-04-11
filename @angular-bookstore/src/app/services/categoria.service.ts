import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/interfaces/categoria.interface';



@Injectable({
  providedIn: 'root'
})


export class CategoriaService {

  private baseUrl = 'http://localhost:3001/api/categorias'

  constructor(private httpCliente: HttpClient){}


  obtenerCategorias():Observable<Categoria[]>{
    return this.httpCliente.get<Categoria[]>(this.baseUrl)
  }


  obtenerCategoria(id:number): Observable<Categoria> {
    return this.httpCliente.get<Categoria>(`${this.baseUrl}/${id}`)
  }
  



}
