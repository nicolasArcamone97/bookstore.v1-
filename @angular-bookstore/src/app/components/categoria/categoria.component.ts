import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/interfaces/libro.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  categoria?: string

  librosCategoria?: Libro[]

  constructor(private _serviceCategoria: CategoriaService,
              private _route: ActivatedRoute){}

  ngOnInit(): void {
    // this._route.params.subscribe(params => {
    //   this.categoria = this._serviceCategoria.obtenerCategoria(params['id'])
    //   this.librosCategoria = this._serviceCategoria.obtenerLibrosCategoria(params['id'])
    // })
  }


}
