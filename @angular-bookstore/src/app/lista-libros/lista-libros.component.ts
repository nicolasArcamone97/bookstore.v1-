import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Router } from '@angular/router';
import { Libro } from '../libro.interfaz';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent {

  // lista vacia de libros, deberia tener asignado el tipo Libro pero no esta desarrollado
  libros: Libro[] = []


  constructor( private _serviceLibros : LibrosService,
                private router: Router){
    // this.obtenerLibros()      //llama el metodo para obtener los libros cuando se inicia, de esta forma no uso el OnInit
  }


  // lo usamos para realizar una accion de inicializacion una vez que el componente ha sido inicializado en angular osea si quieres visualizar algo ni bien inicias un compopentne 
  // deberiamos usar ngOnInit()
  ngOnInit(): void {
    this.obtenerLibros()
  }

  
  // opbtengo los libros de un servicio 
  obtenerLibros(){
    this.libros = this._serviceLibros.obtenerLibros()
  }


  navegarLibro(libroId: number){
    this.router.navigate(['/libro', libroId])
  }


}
