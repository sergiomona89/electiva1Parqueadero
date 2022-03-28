import { Injectable } from "@angular/core";
import { TipoVehiculo } from "./tipoVehiculos.enum";
import { Vehiculos } from "./vehiculos.models";
import { Vehiculo_Zona } from "./vehiculo_zona.models";
import { Zonas } from "./zona.model";

@Injectable({   providedIn: 'root'})
export class GlobalController {
    constructor () {}

    public vehiculosReg: Vehiculos[] = [
        {
            Placa: 'ABC123',
            Propietario: 'Diego M',
            Tipo: TipoVehiculo.Carro
        }
    ];
    public zonasReg: Zonas[] = [
        {
            Numero: 1,
            Cantidad: 20,
            Disponibles: 19,
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
    public resgistros: Vehiculo_Zona[] = [
        {
            Placa: 'ABC123',
            Zona: 1
        }
    ];
}