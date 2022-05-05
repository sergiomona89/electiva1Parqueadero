import { TipoVehiculo } from "./tipoVehiculos.enum";

export class Zonas {
    constructor(
        public numero: number = 0,
        public cantidad: number = 0,
        public disponibles: number = 0,
        public tipo: TipoVehiculo = TipoVehiculo.Carro
    ) {}
}