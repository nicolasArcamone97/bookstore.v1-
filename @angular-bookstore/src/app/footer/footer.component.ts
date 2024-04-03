import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  mostrarFooter: boolean = true

  constructor( private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // Verificar el componente actual
      if (this.router.url.includes('/panel-admin')) {
        this.mostrarFooter = false;
      } else {
        this.mostrarFooter = true;
      }
    });
  }


}
