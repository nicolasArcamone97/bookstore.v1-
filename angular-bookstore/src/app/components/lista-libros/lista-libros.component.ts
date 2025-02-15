import { Component, Input, OnInit } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { Router } from '@angular/router';
import { Libro } from 'src/interfaces/libro.interface';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/interfaces/usuari.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carro } from 'src/interfaces/carro.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent {

  // lista vacia de libros, deberia tener asignado el tipo Libro pero no esta desarrollado
  libros: Libro[] = []

  usuarioActivo?: Usuario

  carroActivo?: Carro

  constructor( private _serviceLibros : LibrosService,
              private usuarioService: UsuarioService,
              private carroService: CarritoService,
                private router: Router){}


  // lo usamos para realizar una accion de inicializacion una vez que el componente ha sido inicializado en angular osea si quieres visualizar algo ni bien inicias un compopentne 
  // deberiamos usar ngOnInit()
  ngOnInit(): void {
    this.obtenerLibros()
    this.obtenerCarro()
  }

  
  // opbtengo los libros de un servicio 
  obtenerLibros(): void{
    this.libros = this._serviceLibros.obtenerLibros()
  }


  agregarFavoritos(idUsuario:number,idLibro:number){
    this.usuarioService.asignarLibro(idUsuario , idLibro).subscribe(() => {
    })

    Swal.fire({
      text: 'Tu libro fue agregado a favoritos',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });

  }

  obtenerCarro() {
    this.carroActivo = this.carroService.obtenerCarro()
  }






}
