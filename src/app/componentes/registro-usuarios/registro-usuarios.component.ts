import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios-service.service';
import { VariablesGlobalesService } from 'src/app/variables-globales.service';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})
export class RegistroUsuariosComponent implements OnInit {

  form = new FormGroup({
    nombre: new FormControl(''),
    cedula: new FormControl(''),
    correo: new FormControl(''),
    usuario: new FormControl(''),
    contrasena: new FormControl(''),
  });

  constructor(private usuariosService: UsuariosService, private router: Router, private global: VariablesGlobalesService) { }

  ngOnInit(): void {
  }

  submit() {
    if(this.form.invalid) {
      alert("Debe llenar todos los campos");
      return;
    }

    let nuevoUsuario: Usuarios = new Usuarios();
    nuevoUsuario.cedula = this.form.get('cedula')?.value;
    nuevoUsuario.nombre = this.form.get('nombre')?.value;
    nuevoUsuario.correo = this.form.get('correo')?.value;
    nuevoUsuario.correo = this.form.get('usuario')?.value;
    nuevoUsuario.contrasena = this.form.get('contrasena')?.value;

    this.usuariosService.nuevoUsuario(nuevoUsuario).subscribe(id => {
      if(id > 0) {
        alert("Registro satisfactorio");
        nuevoUsuario.id = id;
        this.global.usuario = nuevoUsuario;
        this.router.navigate(['ingresosysalidas']);
      }
    });
  }
}
