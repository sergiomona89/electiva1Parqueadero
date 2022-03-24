import { TipoVehiculo } from "./tipoVehiculos.enum";

export class Zonas {
    constructor(
        public Numero: number,
        public Cantidad: number,
        public Disponibles: number,
        public Tipo: TipoVehiculo
    ) {}
}