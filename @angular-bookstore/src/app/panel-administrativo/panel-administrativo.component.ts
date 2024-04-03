import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../libro.interfaz';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.css']
})
export class PanelAdministrativoComponent {
  
  emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  nombre = new FormControl('', [Validators.required, Validators.minLength(3)])

  edad = new FormControl('', [Validators.required, Validators.min(18)])
  
  email = new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)])



  constructor(private _form:FormBuilder, 
              private _serviceLibros: LibrosService){}


  





}
