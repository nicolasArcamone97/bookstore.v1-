import { Component, Input, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { Libro } from 'src/interfaces/libro.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/interfaces/usuari.interface';



@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent {

  // lista vacia de libros, deberia tener asignado el tipo Libro pero no esta desarrollado
  libros: Libro[] = []

  usuarioActivo?: Usuario

  constructor( private _serviceLibros : LibrosService,
              private usuarioService: UsuarioService,
                private router: Router){
    // this.obtenerLibros()      //llama el metodo para obtener los libros cuando se inicia, de esta forma no uso el OnInit
  }


  // lo usamos para realizar una accion de inicializacion una vez que el componente ha sido inicializado en angular osea si quieres visualizar algo ni bien inicias un compopentne 
  // deberiamos usar ngOnInit()
  ngOnInit(): void {
    this.obtenerLibros()
    this.obtenerUsuario()
  }

  
  // opbtengo los libros de un servicio 
  obtenerLibros(){
    this._serviceLibros.obtenerLibros().subscribe(data => {
      this.libros = data
    })
  }


  agregarFavoritos(idUsuario:number,idLibro:number){
    this.usuarioService.asignarLibro(idUsuario , idLibro).subscribe(() => {
    })
  }



  // obtener usuario por id 
  obtenerUsuario(){
    this.usuarioService.getUser().subscribe((data: Usuario) => {
      this.usuarioActivo = data
    })
  }



}
