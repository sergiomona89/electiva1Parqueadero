import { TipoVehiculo } from './tipoVehiculos.enum';
export class Vehiculos {
constructor(
    public placa: string = "",
    public propietario: string = "",
    public tipo: TipoVehiculo = TipoVehiculo.Carro
) {}

}
