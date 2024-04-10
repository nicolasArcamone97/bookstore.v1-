import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/interfaces/usuari.interface';
import { Libro } from 'src/interfaces/libro.interface';

@Component({
  selector: 'app-list-favoritos',
  templateUrl: './list-favoritos.component.html',
  styleUrls: ['./list-favoritos.component.css']
})
export class ListFavoritosComponent implements OnInit{

  // varible vacia tipo user
  usuarioActivo?: Usuario 

  // lista vacia de libros
  libros?: Libro[] 

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuario(1)
   
  }

  // obtener un user id desde el back
  obtenerUsuario(id:number){
     this.usuarioService.obtenerUsuario(id).subscribe( (data: Usuario) => {
        this.usuarioActivo = data
     })
  }

  // obtener los libros del usuario acitvo
  librosDeUsuario() {
    this.libros = this.usuarioActivo?.libros
    return this.libros
  }


  eliminarDeListaFavoritos(usuarioId:number, libroId:number){
    this.usuarioService.eliminarLibro(usuarioId,libroId).subscribe( () => {
        this.obtenerUsuario(usuarioId)
    })
  }
}
