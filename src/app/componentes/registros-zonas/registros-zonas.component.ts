import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalController } from 'src/app/models/global';
import { TipoVehiculo } from 'src/app/models/tipoVehiculos.enum';
import { Zonas } from 'src/app/models/zona.model';

@Component({
  selector: 'app-registros-zonas',
  templateUrl: './registros-zonas.component.html',
  styleUrls: ['./registros-zonas.component.css']
})
export class RegistrosZonasComponent implements OnInit {
  public zona: Zonas = new Zonas();
  public successFull: boolean = false;
  public auxTipoVehiculo = TipoVehiculo;

  constructor(public variablesGlobales: GlobalController) { }

  ngOnInit(): void {
  }

  cargarZona(e: NgForm) {
    if(this.variablesGlobales.zonasReg.some(item => item.Numero == this.zona.Numero)) {
      alert("El numero de zona ya existe");
      return;
    }

    this.zona.Disponibles = this.zona.Cantidad;
    this.variablesGlobales.zonasReg.push(this.zona);

    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.zona = new Zonas();
    e.reset();
    this.zona.Tipo = TipoVehiculo.Carro;
    this.successFull = false;
  }

  successrefresh() {
    this.successFull = false;
  }


}
