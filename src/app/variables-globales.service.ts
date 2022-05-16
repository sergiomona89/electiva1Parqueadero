import { Injectable } from '@angular/core';
import { Usuarios } from './models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesService {

  public dominioNodeJs: string = 'http://localhost:3000'
  public dominioNetCore = 'https://localhost:7071'
  public usuario:Usuarios = new Usuarios();

  constructor() { }
}
