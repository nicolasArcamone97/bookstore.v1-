import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.interfaz';
import { CategoriaService } from '../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  categoria?: Categoria

  librosCategoria?: Libro[]

  constructor(private _serviceCategoria: CategoriaService,
              private _route: ActivatedRoute){}

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.categoria = this._serviceCategoria.obtenerCategoria(params['id'])
      this.librosCategoria = this._serviceCategoria.obtenerLibrosCategoria(params['id'])
    })
  }


}
