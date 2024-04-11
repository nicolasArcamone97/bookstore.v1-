import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Usuario } from 'src/interfaces/usuari.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor(private userService: UsuarioService){
   
  }


}
