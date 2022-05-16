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
    this.url = this.global.dominioNodeJs + "";
  }

  public nuevoIngreso(vehiculo_zona: Vehiculo_Zona) {
    return this._http.post<number>(this.url + "", vehiculo_zona);
  }

  public nuevaSalida(vehiculo_zona: Vehiculo_Zona) {
    return this._http.put<number>(this.url + "", vehiculo_zona);
  }

  public getVehiculoZona() {
    return this._http.get<Vehiculo_Zona[]>(this.url + "");
  }
}
