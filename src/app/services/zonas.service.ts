import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Zonas } from '../models/zona.model';
import { VariablesGlobalesService } from './variables-globales.service';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  private url: string;

  constructor(private _http: HttpClient, private global: VariablesGlobalesService) {
    this.url = this.global.dominio + "";
  }

  public get() {
    return this._http.get<Zonas[]>(this.url + "");
  }

  public nuevaZona(zona: Zonas) {
    return this._http.post<number>(this.url + "", zona);
  }

  public modificarZona(zona: Zonas) {
    return this._http.put<number>(this.url + "", zona);
  }

  public eliminarZona(id: number) {
    return this._http.delete<number>(this.url + ""+id);
  }
}