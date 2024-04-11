import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
// import { Categoria } from '../../interfaces/categoria.interface';
import { Router } from '@angular/router';
import { Usuario } from 'src/interfaces/usuari.interface';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent  implements OnInit {

  mostrarNavegacion: boolean = true;


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
  }


}
