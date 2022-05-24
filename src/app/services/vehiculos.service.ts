import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculos } from '../models/vehiculos.models';
import { VariablesGlobalesService } from '../variables-globales.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url: string;

  constructor(private _http: HttpClient, private global: VariablesGlobalesService) {
    this.url = this.global.dominioNodeJs + "/v1";
  }

  public get() {
    return this._http.get<Vehiculos[]>(this.url + "/vehiculos");
  }

  public nuevoVehiculo(vehiculo: Vehiculos) {
    return this._http.post<number>(this.url + "/vehiculos", vehiculo);
  }

  public modificarVehiculo(vehiculo: Vehiculos) {
    return this._http.put<number>(this.url + "", vehiculo);
  }

  public eliminarVehiculo(id: number) {
    return this._http.delete<number>(this.url + ""+id);
  }
}
