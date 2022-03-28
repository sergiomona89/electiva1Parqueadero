import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RegistroIngresosComponent } from './componentes/registro-ingresos/registro-ingresos.component';
import { RegistroVehiculosComponent } from './componentes/registro-vehiculos/registro-vehiculos.component';
import { RegistrosZonasComponent } from './componentes/registros-zonas/registros-zonas.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroIngresosComponent,
    RegistroVehiculosComponent,
    MenuComponent,
    RegistrosZonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
