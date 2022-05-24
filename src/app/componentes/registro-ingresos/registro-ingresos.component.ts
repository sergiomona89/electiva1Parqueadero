import { Component, OnInit } from '@angular/core';
import { Zonas } from './../../models/zona.model';
import { Vehiculos } from './../../models/vehiculos.models'
import { TipoVehiculo } from './../../models/tipoVehiculos.enum';
import { Vehiculo_Zona } from './../../models/vehiculo_zona.models';
import { NgForm } from '@angular/forms';
import { IngresosService } from 'src/app/services/ingresos.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ZonasService } from 'src/app/services/zonas.service';

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
  public listZonas: Zonas[] = [];

  constructor(private ingresosService: IngresosService, private vehiculosService: VehiculosService, private zonasService: ZonasService) {
    //this.vehiculosReg = this.variablesGlobales.vehiculosReg;
    //this.zonasRegistradas = this.variablesGlobales.zonasReg;
  }

  ngOnInit(): void {
    this.ingresosService.getVehiculoZona().subscribe(list => {
      this.listVehiculoZona = list;
    });

    this.vehiculosService.get().subscribe(list => {
      this.listVehiculos = list;
    });

    this.zonasService.get().subscribe(list => {
      this.listZonas = list;
    });
  }

  cargarVehiculo(e: NgForm) {
    let idx = this.listVehiculos.findIndex(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase());

    if(idx < 0) {
      alert("El vehiculo no esta registrado.");
      return;
    }

    if(!this.salida) {
      let idxz = this.listZonas.findIndex(item => item.numero == this.vehiculo.zona);
      
      if(this.listVehiculoZona.some(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase())) {
        alert("El vehiculo ya tiene un registro de ingreso.");
        return;
      }

      if(this.listVehiculos[idx].tipo != this.listZonas[idxz].tipo)  {
        alert("La zona no coincide con el tipo de vehiculo.");
        return;
      }
  
      if(this.listZonas[idxz].disponibles < 1)  {
        alert("No hay cupos en esta zona.");
        return;
      }

      //this.variablesGlobales.resgistros.push(this.vehiculo);
      
      this.ingresosService.nuevoIngreso(this.vehiculo).subscribe(vehiculo => {
        this.listZonas[idxz].disponibles --;
        this.listVehiculoZona.push(vehiculo);
      });
      
    }
    else {
      let idxR = this.listVehiculoZona.findIndex(item => item.placa.toUpperCase() == this.vehiculo.placa.toUpperCase());
      if(idxR < 0) {
        alert("El vehiculo no tiene un registro de ingreso.");
        return;
      }

      this.ingresosService.nuevaSalida(this.vehiculo.placa).subscribe(result => {
        let idz = this.listZonas.findIndex(item => item.numero == this.listVehiculoZona[idxR].zona);
        this.listZonas[idz].disponibles ++;
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
