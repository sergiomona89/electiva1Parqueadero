import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { VariablesGlobalesService } from 'src/app/variables-globales.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, public global: VariablesGlobalesService) { }

  ngOnInit(): void {
  }

  linkActive(ruta: string): string {
    if(this.router.url.endsWith(ruta) || (ruta == 'ingresosysalidas' && this.router.url == '/')) {
      return 'nav-link active';
    }
    else{
      return 'nav-link';
    }
  }

  linkoutlogin() {
    this.router.navigate(['']);
  }
}
