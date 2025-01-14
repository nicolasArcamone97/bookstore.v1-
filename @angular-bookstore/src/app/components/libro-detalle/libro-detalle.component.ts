import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/interfaces/libro.interface';
import { Usuario } from 'src/interfaces/usuari.interface';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carro } from 'src/interfaces/carro.interface';
import { CarritoService } from 'src/app/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro-detalle',
  templateUrl: './libro-detalle.component.html',
  styleUrls: ['./libro-detalle.component.css']
})
export class LibroDetalleComponent implements OnInit {
  
  libroSeleccionado?: Libro

  usuarioActivo?: Usuario

  carroActivo?: Carro

 constructor(private _route: ActivatedRoute,
            private _serviceLibro: LibrosService,
            private serviceCarrito: CarritoService){}

 ngOnInit(): void {
    this.obtenerLibroUrl()
  }


  obtenerLibroUrl(){
    this._route.params.subscribe(params => {
      this.libroSeleccionado = this._serviceLibro.obtenerLibro(Number(params['id']))
    })
  }

  // agregarAlCarro(carroId:number, libroId:number){
  //   this.serviceCarrito.asignarLibro(carroId, libroId).subscribe(  () => {})
  //   Swal.fire({
  //     text: 'Tu libro fue agregado al carrito',
  //     icon: 'success',
  //     confirmButtonText: 'Aceptar'
  //   });

  // }








 

}
