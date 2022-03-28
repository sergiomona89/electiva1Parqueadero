import { TipoVehiculo } from './tipoVehiculos.enum';
export class Vehiculos {
constructor(
    public Placa: string = "",
    public Propietario: string = "",
    public Tipo: TipoVehiculo = TipoVehiculo.Carro
) {}

}
