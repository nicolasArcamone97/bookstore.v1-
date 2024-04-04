import { Injectable } from '@angular/core';
import { Libro } from '../libro.interfaz';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private baseUrl = 'http://localhost:3001/api/libro'

    
  constructor(private httpClient:HttpClient) {}


  public obtenerLibros(): Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.baseUrl)
  }

  public obtenerLibro(libroId:number): Observable<Libro>{
    return this.httpClient.get<Libro>(`${this.baseUrl}/${libroId}`)
  }

  public crearLibro(libro:Libro): Observable<void> {
    console.log(libro)
    return this.httpClient.post<void>(`${this.baseUrl}`, libro)
  }


}
