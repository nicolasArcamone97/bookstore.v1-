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

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {

   
  }

  

}
