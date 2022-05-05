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
            placa: 'ABC123',
            propietario: 'Diego M',
            tipo: TipoVehiculo.Carro
        }
    ];
    public zonasReg: Zonas[] = [
        {
            numero: 1,
            cantidad: 20,
            disponibles: 19,
            tipo: TipoVehiculo.Carro
        },
        {
            numero: 2,
            cantidad: 20,
            disponibles: 20,
            tipo: TipoVehiculo.Moto
        },
        {
            numero: 3,
            cantidad: 15,
            disponibles: 15,
            tipo: TipoVehiculo.Moto
        },
        {
            numero: 4,
            cantidad: 15,
            disponibles: 15,
            tipo: TipoVehiculo.Carro
        }
    ];
    public resgistros: Vehiculo_Zona[] = [
        {
            placa: 'ABC123',
            zona: 1
        }
    ];
}