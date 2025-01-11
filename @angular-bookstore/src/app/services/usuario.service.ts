import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/interfaces/usuari.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:3001/api/user'

  usuario?: Usuario

  
  
  constructor(private httpClient: HttpClient) { }

  


  //funcion para implementar en todos los componentes el mismo usuario de forma estatica hasta seguir avanzando 
  // en vez de que todas tengan que usar obtenerUsuario(id), recibiran ya el usuario con el id definido
  getUser(){
    return this.obtenerUsuario(1)
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`)
  }

  obtenerUsuario(id:number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`)
  }

  asignarLibro(usuarioId:number, libroId:number):Observable<void>{
    const body = {usuarioId: usuarioId, libroId: libroId}
    console.log(body)
    return this.httpClient.post<void>(`${this.baseUrl}/add-libro-user`, body)
  }

  eliminarLibro(usuarioId:number, libroId:number): Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${usuarioId}/libro/${libroId}`)
  }

}
