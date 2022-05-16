import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios-service.service';
import { VariablesGlobalesService } from 'src/app/variables-globales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  });

  constructor(private usuarioService: UsuariosService, private router: Router, private global: VariablesGlobalesService) {
    this.global.usuario = new Usuarios();
  }

  ngOnInit(): void {
  }

  linklogin(){

    if(this.form.get('usuario')?.value?.length > 0 || this.form.get('contrasena')?.value?.length > 0) {

      let credenciales: string[] = [
        this.form.get('usuario')?.value,
        this.form.get('contrasena')?.value,
      ];

      this.usuarioService.login(credenciales).subscribe(usuario => {
        this.global.usuario = usuario;

        if(usuario?.id > 0)
          this.router.navigate(['ingresosysalidas']);
        else
          alert('Usuario o contraseña invalida');
      });
    }
  }

}
