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

  
  // lista vacia de libros
  libros?: Libro[] 

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.obtenerUsuario()
   
  }

  // obtener un user id desde el back
  obtenerUsuario(){
     this.usuarioService.getUser().subscribe( (data: Usuario) => {
        this.usuarioActivo = data
     })
  }

  //alamcenar los libros del usuario acitvo
  librosDeUsuario() {
    this.libros = this.usuarioActivo?.libros
    return this.libros
  }

  //eliminar un libro de la lista de libros del usuario
  eliminarDeListaFavoritos(usuarioId:number, libroId:number){
    this.usuarioService.eliminarLibro(usuarioId,libroId).subscribe( () => {
        this.obtenerUsuario()
    })
  }
}
