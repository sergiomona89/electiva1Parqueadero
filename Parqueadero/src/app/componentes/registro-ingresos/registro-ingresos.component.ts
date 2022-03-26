import { Component, OnInit } from '@angular/core';
import { Zonas } from './../../models/zona.model';
import { GlobalController } from './../../models/global';
import { Vehiculos } from './../../models/vehiculos.models'
import { TipoVehiculo } from './../../models/tipoVehiculos.enum';
import { Vehiculo_Zona } from './../../models/vehiculo_zona.models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-ingresos',
  templateUrl: './registro-ingresos.component.html',
  styleUrls: ['./registro-ingresos.component.css']
})
export class RegistroIngresosComponent implements OnInit {

  public vehiculosReg: Vehiculos[] = [];
  public zonasRegistradas: Zonas[] = [];
  public auxTipoVehiculo = TipoVehiculo;
  public vehiculo: Vehiculo_Zona = new Vehiculo_Zona();
  public successFull: boolean = false;

  constructor(private variablesGlobales: GlobalController) {
    this.vehiculosReg = this.variablesGlobales.vehiculosReg;
    this.zonasRegistradas = this.variablesGlobales.zonasReg;
  }

  ngOnInit(): void {
  }

  cargarVehiculo(e: NgForm) {
    let idx = this.variablesGlobales.vehiculosReg.findIndex(item => item.Placa.toUpperCase() == this.vehiculo.Placa.toUpperCase());

    if(idx < 0) {
      alert("El vehiculo no esta registrado.");
      return;
    }

    let idxz = this.zonasRegistradas.findIndex(item => item.Numero == this.vehiculo.Zona);
    if(this.variablesGlobales.vehiculosReg[idx].Tipo != this.zonasRegistradas[idxz].Tipo)  {
      alert("La zona no coincide con el tipo de vehiculo");
      return;
    }

    if(this.zonasRegistradas[idxz].Disponibles < 1)  {
      alert("No hay cupos en esta zona");
      return;
    }

    this.zonasRegistradas[idxz].Disponibles = this.zonasRegistradas[idxz].Disponibles -1; 
    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.vehiculo = new Vehiculo_Zona();
    e.reset();
    this.successFull = false;
  }

  successrefresh() {
    this.successFull = false;
  }

}
