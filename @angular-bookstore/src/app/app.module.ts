import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FooterComponent } from './footer/footer.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PanelAdministrativoComponent } from './panel-administrativo/panel-administrativo.component';
import {HttpClientModule} from '@angular/common/http';
import { ListFavoritosComponent } from './list-favoritos/list-favoritos.component'

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    LibroDetalleComponent,
    ListaLibrosComponent,
    CategoriaComponent,
    PanelAdministrativoComponent,
    ListFavoritosComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,      //formularios de tipo plantilla
    ReactiveFormsModule,    //formularios de tipo reactivo
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
