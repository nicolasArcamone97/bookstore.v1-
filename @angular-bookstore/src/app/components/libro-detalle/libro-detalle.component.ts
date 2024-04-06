import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/interfaces/libro.interface';

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
     this._serviceLibro.obtenerLibro(Number(params['id'])).subscribe((data: Libro) => {
        this.libroSeleccionado = data
     })
   })
 }



 

}
