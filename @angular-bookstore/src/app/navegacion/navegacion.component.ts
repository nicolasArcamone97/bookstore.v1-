import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../categoria.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent  implements OnInit {

  mostrarNavegacion: boolean = true;

  categorias: Categoria[] = [] 


  constructor( private _serviceCategoria: CategoriaService,
               private router: Router){}

  ngOnInit(): void {
    
    this.router.events.subscribe((event) => {
      // Verificar el componente actual
      if (this.router.url.includes('/panel-admin')) {
        this.mostrarNavegacion = false;
      } else {
        this.mostrarNavegacion = true;
      }
    });

    this.obtenerCategorias()
  }

  obtenerCategorias(){
    this.categorias = this._serviceCategoria.obtenerCategorias()
    console.log(this.categorias)
    return this.categorias
  }


}
