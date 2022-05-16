import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { VariablesGlobalesService } from './variables-globales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parqueadero';

  constructor(public global: VariablesGlobalesService, private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      
      console.log(val instanceof NavigationEnd);

      if(val instanceof NavigationEnd) {
        if(this.global.usuario?.id == 0 && val.url != '/' && val.url != '/registrosusuarios') {
          this.router.navigate(['']);
        }
      }
  });
  }
}
