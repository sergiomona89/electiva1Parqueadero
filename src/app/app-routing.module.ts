import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroIngresosComponent } from './componentes/registro-ingresos/registro-ingresos.component';
import { RegistroVehiculosComponent } from './componentes/registro-vehiculos/registro-vehiculos.component';

const routes: Routes = [
  {path: 'ingresosysalidas', component: RegistroIngresosComponent},
  {path: '', component: RegistroIngresosComponent},
  {path: 'registrovehiculos', component: RegistroVehiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
