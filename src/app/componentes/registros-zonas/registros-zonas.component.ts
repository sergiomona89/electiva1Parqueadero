import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalController } from 'src/app/models/global';
import { TipoVehiculo } from 'src/app/models/tipoVehiculos.enum';
import { Zonas } from 'src/app/models/zona.model';
import { ZonasService } from 'src/app/services/zonas.service';

@Component({
  selector: 'app-registros-zonas',
  templateUrl: './registros-zonas.component.html',
  styleUrls: ['./registros-zonas.component.css']
})
export class RegistrosZonasComponent implements OnInit {
  public zona: Zonas = new Zonas();
  public successFull: boolean = false;
  public auxTipoVehiculo = TipoVehiculo;
  public listZonas: Zonas[] = [];

  constructor(public variablesGlobales: GlobalController, private zonasService: ZonasService) { }

  ngOnInit(): void {
    this.zonasService.get().subscribe(list => {
      this.listZonas = list;
      this.variablesGlobales.zonasReg = list;
    });
  }

  cargarZona(e: NgForm) {
    if(this.variablesGlobales.zonasReg.some(item => item.numero == this.zona.numero)) {
      alert("El numero de zona ya existe");
      return;
    }

    this.zona.disponibles = this.zona.cantidad;
    this.zonasService.nuevaZona(this.zona).subscribe(list => {
      this.listZonas.push(this.zona);
      this.variablesGlobales.zonasReg = list;
      this.variablesGlobales.zonasReg.push(this.zona);
    });
    
    

    this.clear(e);
    this.successFull = true;
  }

  clear(e: NgForm) {
    this.zona = new Zonas();
    e.reset();
    this.zona.tipo = TipoVehiculo.Carro;
    this.successFull = false;
  }

  successrefresh() {
    this.successFull = false;
  }


}
