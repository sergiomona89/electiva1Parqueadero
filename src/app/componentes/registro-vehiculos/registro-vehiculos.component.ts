import { Component, OnInit } from '@angular/core';
import { Vehiculos } from './../../models/vehiculos.models'
import { TipoVehiculo } from './../../models/tipoVehiculos.enum';
import { GlobalController } from './../../models/global';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {

  public vehiculo: Vehiculos = new Vehiculos();
  public tipoVehiculo = TipoVehiculo;
  public successFull: boolean = false;


  constructor(public variablesGlobales: GlobalController) { }

  ngOnInit(): void {
  }

  cargarVehiculo(e: NgForm) {
    let idx = this.variablesGlobales.vehiculosReg.findIndex(item => item.Placa.toUpperCase() == this.vehiculo.Placa.toUpperCase());

    if(idx >= 0) {
      alert("El vehiculo ya está registrado.");
      return;
    }
    
    this.vehiculo.Placa = this.vehiculo.Placa.toUpperCase();
    this.variablesGlobales.vehiculosReg.push(this.vehiculo);
    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.vehiculo = new Vehiculos();
    e.reset();
    this.successFull = false;
    this.vehiculo.Tipo = this.tipoVehiculo.Carro;

  }

  successrefresh() {
    this.successFull = false;
  }

}
