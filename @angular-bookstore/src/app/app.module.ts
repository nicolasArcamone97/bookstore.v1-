import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { LibroDetalleComponent } from './components/libro-detalle/libro-detalle.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import {HttpClientModule} from '@angular/common/http';
import { ListFavoritosComponent } from './components/list-favoritos/list-favoritos.component';
import { CarritoComponent } from './components/carrito/carrito.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuhtComponent } from './components/auht/auht.component'



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    FooterComponent,
    LibroDetalleComponent,
    ListaLibrosComponent,
    CategoriaComponent,
    ListFavoritosComponent,
    CarritoComponent,
    AuhtComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,      //formularios de tipo plantilla
    ReactiveFormsModule,    //formularios de tipo reactivo
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
