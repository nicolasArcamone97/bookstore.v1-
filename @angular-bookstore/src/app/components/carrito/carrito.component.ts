import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carro } from 'src/interfaces/carro.interface';
import { Libro } from 'src/interfaces/libro.interface';
import { Usuario } from 'src/interfaces/usuari.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  libros?:Libro[]

  carroActivo?: Carro
  
  usuarioActivo?: Usuario



  constructor(private carroService:CarritoService,
              private userService:UsuarioService
  ){

  }

  ngOnInit(): void {
    this.obtenerCarro(1)
  }


  obtenerCarro(carroId:number){
    this.carroService.obtenerCarro(carroId).subscribe(data => {
      this.carroActivo = data
      this.libros = data.libros
      this.carroActivo.total = this.libros.reduce((acumulator,elemento) => {
        return acumulator + elemento.precio
      }, 0)
    })

  }


  // obtenerUsuario(){
  //   this.userService.getUser().subscribe(data => {
  //     this.usuarioActivo = data
  //   })
  // }

  eliminarLibro(carroId:number,libroId:number){
    this.carroService.eliminarLibro(carroId,libroId).subscribe(data => {
      this.obtenerCarro(carroId)
    })
  }



}
