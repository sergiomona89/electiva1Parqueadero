export class Usuarios {
    constructor(
        public id: number = 0,
		public cedula: string = '',
		public nombre: string = '',
		public correo: string = '',
        public usuario: string = '',
		public contrasena: string = '',
    ) {}
}
