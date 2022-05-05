import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesGlobalesService {

  public dominio: string = 'http://localhost:3000'

  constructor() { }
}
