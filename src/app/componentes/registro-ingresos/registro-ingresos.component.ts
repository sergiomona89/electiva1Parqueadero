import { Component, OnInit } from '@angular/core';
import { Zonas } from './../../models/zona.model';
import { GlobalController } from './../../models/global';
import { Vehiculos } from './../../models/vehiculos.models'
import { TipoVehiculo } from './../../models/tipoVehiculos.enum';
import { Vehiculo_Zona } from './../../models/vehiculo_zona.models';
import { NgForm } from '@angular/forms';
import { IngresosService } from 'src/app/services/ingresos.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-registro-ingresos',
  templateUrl: './registro-ingresos.component.html',
  styleUrls: ['./registro-ingresos.component.css']
})
export class RegistroIngresosComponent implements OnInit {

  //public vehiculosReg: Vehiculos[] = [];
  //public zonasRegistradas: Zonas[] = [];
  public auxTipoVehiculo = TipoVehiculo;
  public vehiculo: Vehiculo_Zona = new Vehiculo_Zona();
  public successFull: boolean = false;
  public salida: boolean = false;
  public listVehiculoZona: Vehiculo_Zona[] = [];
  public listVehiculos: Vehiculos[] = [];

  constructor(public variablesGlobales: GlobalController, private ingresosService: IngresosService, private vehiculosService: VehiculosService) {
    //this.vehiculosReg = this.variablesGlobales.vehiculosReg;
    //this.zonasRegistradas = this.variablesGlobales.zonasReg;
  }

  ngOnInit(): void {
    this.ingresosService.getVehiculoZona().subscribe(list => {
      this.listVehiculoZona = list
    });
    this.vehiculosService.get().subscribe(list => {
      this.listVehiculos = list;
    });
  }

  cargarVehiculo(e: NgForm) {
    let idx = this.listVehiculos.findIndex(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase());

    if(idx < 0) {
      alert("El vehiculo no esta registrado.");
      return;
    }

    if(!this.salida) {
      let idxz = this.variablesGlobales.zonasReg.findIndex(item => item.numero == this.vehiculo.zona);
      
      if(this.listVehiculoZona.some(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase())) {
        alert("El vehiculo ya tiene un registro de ingreso.");
        return;
      }

      if(this.listVehiculos[idx].tipo != this.variablesGlobales.zonasReg[idxz].tipo)  {
        alert("La zona no coincide con el tipo de vehiculo.");
        return;
      }
  
      if(this.variablesGlobales.zonasReg[idxz].disponibles < 1)  {
        alert("No hay cupos en esta zona.");
        return;
      }

      //this.variablesGlobales.resgistros.push(this.vehiculo);
      
      this.ingresosService.nuevoIngreso(this.vehiculo).subscribe(result => {
        this.listVehiculoZona.push(this.vehiculo);
        this.variablesGlobales.zonasReg[idxz].disponibles --;
      });

      
    }
    else {
      let idxR = this.listVehiculoZona.findIndex(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase());
      if(idxR < 0) {
        alert("El vehiculo no tiene un registro de ingreso.");
        return;
      }
      
      let idz = this.variablesGlobales.zonasReg.findIndex(item => item.numero == this.listVehiculoZona[idxR].zona);
      this.variablesGlobales.zonasReg[idz].disponibles ++;

      this.ingresosService.nuevaSalida(this.vehiculo).subscribe(result => {
        this.listVehiculoZona.splice(idxR, 1);
      });
      
    }
    
    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.vehiculo = new Vehiculo_Zona();
    e.reset();
    this.salida = false;
    this.successFull = false;
  }

  successrefresh() {
    this.successFull = false;
  }

}
