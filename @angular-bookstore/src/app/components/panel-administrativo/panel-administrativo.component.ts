import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LibrosService } from '../../services/libros.service';
import { Libro } from 'src/interfaces/libro.interface';

@Component({
  selector: 'app-panel-administrativo',
  templateUrl: './panel-administrativo.component.html',
  styleUrls: ['./panel-administrativo.component.css']
})
export class PanelAdministrativoComponent implements OnInit {

  // emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  formularioCreacion:FormGroup

  libros?: Libro[]


  libro?: Libro

  constructor(private form:FormBuilder, 
              private _serviceLibros: LibrosService){
                
                this.formularioCreacion = this.form.group({
                  titulo: ['', [Validators.required]],
                  autor: ['', [Validators.required]],
                  descripcion:['', Validators.required],
                  precio: ['', Validators.required, Validators.min(1)],
                  portada: ['', Validators.required]
                })
              
                // Suscribirse a los cambios del formulario y actualizar la variable libro
                this.formularioCreacion.valueChanges.subscribe((data: Libro) => {
                  this.libro = data;
                });
              
              
              }


  ngOnInit(): void {



    // como subscribir al formulario entero
    // this.formularioCreacion.valueChanges.subscribe( valor => {
    //   this.libro = valor
    // })

    

    // obtener lo que el usuario pone por el campo
    // pach sirve para pachear una parte del formulario
    // this.formularioCreacion.patchValue({
    //   nombre:this.user.nombre,
    //   edad: this.user.edad,
    //   email: this.user.email,

    // })

    // fijar lo que el usuario puso por campo
    // this.formularioCreacion.get('nombre')?.disable()
    // this.formularioCreacion.get('edad')?.disable()
    // this.formularioCreacion.get('email')?.disable()
  }
  


  hasErrors(controlName: string, error: string){
    // pasamos por parametro el nombre del control y el tipo de error, required, email, min etc
    // y verificamos si el campo del control name fue presionado
    return this.formularioCreacion.get(controlName)?.hasError(error) && this.formularioCreacion.get(controlName)?.touched
  }

  enviar() {
      // const libro: Libro = {
    //   id: 0, // Debes definir cómo manejar la asignación del id, aquí he puesto un valor inicial de 0
    //   titulo: this.formularioCreacion.get('titulo')?.value,
    //   autor: this.formularioCreacion.get('autor')?.value,
    //   descripcion: this.formularioCreacion.get('descripcion')?.value,
    //   portada: this.formularioCreacion.get('portada')?.value,
    //   precio: this.formularioCreacion.get('precio')?.value
    // };



    // Verificar si el formulario es válido antes de enviar
    if (this.formularioCreacion.valid && this.libro) {
      this._serviceLibros.crearLibro(this.libro).subscribe(() => {
        console.log('Libro agregado correctamente');
      });
    }
  }

   




}
