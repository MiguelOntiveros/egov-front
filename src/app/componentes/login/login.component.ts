import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario } from '../../interfaces/Usuario';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje: string;

  loginForm: FormGroup;

  login: Usuario[];

  // IMAGEN CENTRAL DEL LOGIN
  imagenPc = 'assets/imagenes/ValleHermoso/logo_VH_pc.jpg';
  imagenCelular = 'assets/imagenes/ValleHermoso/logo_VH_celular.jpg';

  constructor(private form: FormBuilder, private router: Router, private loginService: LoginService) {

    this.loginForm = this.form.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]

    });
  }

  ngOnInit(): void {
  }

  // INICIA LA SESION DEL USUARIO, VALIDA SI EL USUARIO EXISTE O NO
  loginUser() {
    const { usuario, password } = this.loginForm.value;

    this.loginService.getUsuario(usuario.toUpperCase(), password).subscribe((data: any) => {
      this.login = data;
      if (data === true) {
        this.router.navigate(['/inicio']);
        this.mensaje = 'Bienvenido al sistema';
        console.log('Bienvenido al sistema, credenciales correctas');

      } else if (data === false) {
        this.mensaje = 'Datos incorrectos';
        console.error('No tienes acceso al sistema, credenciales incorrectas');

        setTimeout(() => {
          this.mensaje = ''
        }, 3000);

      }
    })

  }

  validacionUsuario(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  
        control.value?.toLowerCase() === 'blue' 
            ? null : {wrongColor: control.value};
}

}
