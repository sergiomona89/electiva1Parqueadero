import { TipoVehiculo } from "./tipoVehiculos.enum";

export class Zonas {
    constructor(
        public Numero: number = 0,
        public Cantidad: number = 0,
        public Disponibles: number = 0,
        public Tipo: TipoVehiculo = TipoVehiculo.Carro
    ) {}
}