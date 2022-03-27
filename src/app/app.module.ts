import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroIngresosComponent } from './componentes/registro-ingresos/registro-ingresos.component';
import { RegistroVehiculosComponent } from './componentes/registro-vehiculos/registro-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroIngresosComponent,
    RegistroVehiculosComponent
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
