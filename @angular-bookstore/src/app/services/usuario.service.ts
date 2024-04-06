import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/interfaces/usuari.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:3001/api/user'

  constructor(private httpClient: HttpClient) { }


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
