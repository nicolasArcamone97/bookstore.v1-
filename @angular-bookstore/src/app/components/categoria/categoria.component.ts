import { Component, OnInit } from '@angular/core';

import { CategoriaService } from '../../services/categoria.service';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/interfaces/libro.interface';
import { Categoria } from 'src/interfaces/categoria.interface';
import { Usuario } from 'src/interfaces/usuari.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{

  usuarioActivo?: Usuario

  categoria?: Categoria

  librosCategoria?: Libro[]

  constructor(private serviceCategoria: CategoriaService,
              private serviceUsuario: UsuarioService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.obtenerCategoria(params['id'])
    })
    this.obtenerUsuario()
  }

  obtenerCategoria(id:number){
    return this.serviceCategoria.obtenerCategoria(id).subscribe( data => {
      this.categoria = data
    })
  }

  obtenerUsuario(){
    this.serviceUsuario.getUser().subscribe( data => {
      this.usuarioActivo = data
    })
  }


  agregarFavoritos(usuarioId:number, libroId:number){
    this.serviceUsuario.asignarLibro(usuarioId, libroId).subscribe({
    })
  }



}
