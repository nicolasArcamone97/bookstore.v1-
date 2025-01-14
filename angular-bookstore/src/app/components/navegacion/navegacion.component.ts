import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
// import { Categoria } from '../../interfaces/categoria.interface';
import { Router } from '@angular/router';
import { Categoria } from 'src/interfaces/categoria.interface';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent  implements OnInit {

  mostrarNavegacion: boolean = true;

  listCategorias?: Categoria[]

  constructor( private serviceCategoria: CategoriaService,
               private router: Router){}

  ngOnInit(): void {
    this.obtenerCategorias()
  }


  obtenerCategorias(){
    this.listCategorias = this.serviceCategoria.obtenerCategorias()
  }






}
