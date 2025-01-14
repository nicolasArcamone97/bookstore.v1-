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

  listCategorias?: Categoria[]
  librosCategoria?: Libro[]

  constructor(private serviceCategoria: CategoriaService,
              private serviceUsuario: UsuarioService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.categoria = this.serviceCategoria.obtenerCategoria(params['id'])
    // })
   this.obtenerCategorias()
  }

  obtenerCategorias(){
    this.listCategorias = this.serviceCategoria.obtenerCategorias()
    console.log(this.listCategorias)
  }
 

  agregarFavoritos(usuarioId:number, libroId:number){
    this.serviceUsuario.asignarLibro(usuarioId, libroId).subscribe({
    })
  }



}
