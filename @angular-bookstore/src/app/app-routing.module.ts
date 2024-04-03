import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';

const routes: Routes = [
  { path:'inicio', component: ListaLibrosComponent},
  { path:'libro/:id', component: LibroDetalleComponent},
  { path: 'categoria/:id', component: CategoriaComponent},
  { path: 'panel-admin', component: PanelAdministrativoComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
