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


  constructor(private http:HttpClient,
              private userService: UsuarioService
  ) { }



  obtenerCarro(carroId:number):Observable<Carro>{
    return this.http.get<Carro>(`${this.baseUrl}/${carroId}`)
  }

  asignarLibro(carroId:number,libroId:number){
    const body = {carroId:carroId, libroId:libroId}
    return this.http.post<void>(`${this.baseUrl}/add-libro-carro`,body)
  }

  eliminarLibro(carrId:number,libroId:number){
    return this.http.delete(`${this.baseUrl}/${carrId}/deleteLibro/${libroId}`)
  }

}
