import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo_Zona } from '../models/vehiculo_zona.models';
import { VariablesGlobalesService } from '../variables-globales.service';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  private url: string;

  constructor(private _http: HttpClient, private global: VariablesGlobalesService) {
    this.url = this.global.dominioNodeJs + "/v1";
  }

  public nuevoIngreso(vehiculo_zona: Vehiculo_Zona) {
    return this._http.post<Vehiculo_Zona>(this.url + "/vehiculos_zonas", vehiculo_zona);
  }

  public nuevaSalida(placa: string) {
    return this._http.delete<any>(this.url + "/vehiculos_zonas/"+placa);
  }

  public getVehiculoZona() {
    return this._http.get<Vehiculo_Zona[]>(this.url + "/vehiculos_zonas");
  }
}
