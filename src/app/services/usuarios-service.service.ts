import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { VariablesGlobalesService } from '../variables-globales.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url: string;

  constructor(private _http: HttpClient, private global: VariablesGlobalesService) {
    this.url = this.global.dominioNetCore + '/api/usuarios';
  }

  public login(credenciales: string[]) {
    return this._http.post<Usuarios>(this.url + "/autenticacionusuario", credenciales);
  }

  public nuevoUsuario(user: Usuarios) {
    return this._http.post<number>(this.url + "/nuevousuario", user);
  }
}
