import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroIngresosComponent } from './componentes/registro-ingresos/registro-ingresos.component';

const routes: Routes = [
  {path: '', component: RegistroIngresosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
