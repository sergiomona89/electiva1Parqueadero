import { Injectable } from "@angular/core";
import { TipoVehiculo } from "./tipoVehiculos.enum";
import { Vehiculos } from "./vehiculos.models";
import { Zonas } from "./zona.model";

@Injectable({   providedIn: 'root'})
export class GlobalController {
    constructor () {}

    public vehiculosReg: Vehiculos[] = [
        {
            Placa: 'PIW72D',
            Propietario: 'Diego M',
            Tipo: TipoVehiculo.Moto
        }
    ];
    public zonasReg: Zonas[] = [
        {
            Numero: 1,
            Cantidad: 20,
            Disponibles: 20,
            Tipo: TipoVehiculo.Carro
        },
        {
            Numero: 2,
            Cantidad: 20,
            Disponibles: 20,
            Tipo: TipoVehiculo.Moto
        },
        {
            Numero: 3,
            Cantidad: 15,
            Disponibles: 15,
            Tipo: TipoVehiculo.Moto
        },
        {
            Numero: 4,
            Cantidad: 15,
            Disponibles: 15,
            Tipo: TipoVehiculo.Carro
        }
    ];
}