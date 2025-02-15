import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

import { ListFavoritosComponent } from './components/list-favoritos/list-favoritos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AuhtComponent } from './components/auht/auht.component';

const routes: Routes = [
  { path:'inicio', component: ListaLibrosComponent},
  { path:'libro/:id', component: LibroDetalleComponent},
  { path: 'categoria/:id', component: CategoriaComponent},
  { path: 'favoritos', component: ListFavoritosComponent},
  { path: 'carro', component: CarritoComponent},
  { path: 'inicio-sesion', component: AuhtComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
