import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../libro.interfaz';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {
  
  libroSeleccionado?: Libro


 constructor(private _route: ActivatedRoute,
            private _serviceLibro: LibrosService){}

 ngOnInit(): void {
   this._route.params.subscribe(params => {
    this.libroSeleccionado = this._serviceLibro.obtenerLibro(params['id'])
    console.log(this.libroSeleccionado)
   })
 }


}
