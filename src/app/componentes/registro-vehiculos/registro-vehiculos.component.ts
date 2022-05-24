import { Component, OnInit } from '@angular/core';
import { Vehiculos } from './../../models/vehiculos.models'
import { TipoVehiculo } from './../../models/tipoVehiculos.enum';
import { GlobalController } from './../../models/global';

import { NgForm } from '@angular/forms';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-registro-vehiculos',
  templateUrl: './registro-vehiculos.component.html',
  styleUrls: ['./registro-vehiculos.component.css']
})
export class RegistroVehiculosComponent implements OnInit {

  public vehiculo: Vehiculos = new Vehiculos();
  public tipoVehiculo = TipoVehiculo;
  public successFull: boolean = false;
  public listVehiculos: Vehiculos[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.vehiculosService.get().subscribe(list => {
      this.listVehiculos = list;
    });
  }

  cargarVehiculo(e: NgForm) {
    let idx = this.listVehiculos.findIndex(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase());

    if(idx >= 0) {
      alert("El vehiculo ya está registrado.");
      return;
    }

    this.vehiculo.placa = this.vehiculo.placa.toUpperCase();
    this.vehiculosService.nuevoVehiculo(this.vehiculo).subscribe(vehiculo => {
      this.listVehiculos.push(vehiculo);
    });
    
    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.vehiculo = new Vehiculos();
    e.reset();
    this.successFull = false;
    this.vehiculo.tipo = this.tipoVehiculo.Carro;

  }

  successrefresh() {
    this.successFull = false;
  }

}
