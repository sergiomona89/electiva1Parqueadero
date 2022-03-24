import { Component, OnInit } from '@angular/core';
import { Zonas } from './../../models/zona.model';
import { GlobalController } from './../../models/global';
import { Vehiculos } from './../../models/vehiculos.models'

@Component({
  selector: 'app-registro-ingresos',
  templateUrl: './registro-ingresos.component.html',
  styleUrls: ['./registro-ingresos.component.css']
})
export class RegistroIngresosComponent implements OnInit {

  public vehiculosReg: Vehiculos[] = [];
  public zonasRegistradas: Zonas[] = [];

  constructor(private variablesGlobales: GlobalController) {
    this.vehiculosReg = this.variablesGlobales.vehiculosReg;
    this.zonasRegistradas = this.variablesGlobales.zonasReg;
  }

  ngOnInit(): void {
    console.log(this.zonasRegistradas);
  }

}
