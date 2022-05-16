import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroIngresosComponent } from './componentes/registro-ingresos/registro-ingresos.component';
import { RegistroUsuariosComponent } from './componentes/registro-usuarios/registro-usuarios.component';
import { RegistroVehiculosComponent } from './componentes/registro-vehiculos/registro-vehiculos.component';
import { RegistrosZonasComponent } from './componentes/registros-zonas/registros-zonas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'ingresosysalidas', component: RegistroIngresosComponent},
  {path: 'registrovehiculos', component: RegistroVehiculosComponent},
  {path: 'registroszonas', component: RegistrosZonasComponent},
  {path: 'registrosusuarios', component: RegistroUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
