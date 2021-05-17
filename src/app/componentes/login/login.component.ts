import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Usuario } from '../../interfaces/Usuario';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpEventType } from '@angular/common/http';

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
  // imagenPc = 'assets/imagenes/ValleHermoso/logo_VH_pc.jpg';
  imagenCelular = 'assets/imagenes/ValleHermoso/logo_VH_celular.jpg';

  constructor(
    private form: FormBuilder, 
    private router: Router, 
    private loginService: LoginService,
    private spinner: NgxSpinnerService
    ) {

    this.loginForm = this.form.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]]

    });
  }

  ngOnInit(): void {
  }

  // INICIA LA SESION DEL USUARIO, VALIDA SI EL USUARIO EXISTE O NO
  loginUser() {
    // LO SIGUIENTE SIRVE PARA OBTENER LOS VALORES DE FORM LOGIN
    const { usuario, password } = this.loginForm.value;
    // this.spinner.show();
    
    this.loginService.getUsuario(usuario.toUpperCase(), password).subscribe((data: any) => {
      

      // EN CASO DE QUE EL USUARIO Y PASSWORD CONCIDAN CON LA BASE DE DATOS
      if (data === true) {
        // this.spinner.hide();

          this.router.navigate(['./inicio']);
          console.log('Bienvenido al sistema, credenciales correctas');
          this.mensaje = 'Bienvenido al sistema';

      } else if (data === false) {
        // this.spinner.hide();
        // EN CASO DE QUE EL USUARIO Y PASSWORD -NO- CONCIDAN CON LA BASE DE DATOS
        this.mensaje = 'Datos incorrectos';
        console.error('No tienes acceso al sistema, credenciales incorrectas');
      }
    })
  }

}


// loginUser() {
//   const { usuario, password } = this.loginForm.value;

//   this.spinner.show()

//   this.loginService.getUsuario(usuario.toUpperCase(), password).subscribe((data: any) => {
//      if(data.type === HttpEventType.DownloadProgress){
//          console.log(data.loaded);
//          console.log(data.total);
//      }

//       this.login = data;
//       if (data === true) {
        
//         this.spinner.hide();
    
//         this.router.navigate(['./inicio']);
//         this.mensaje = 'Bienvenido al sistema';
//         console.log('Bienvenido al sistema, credenciales correctas');
    
//       } else if (data === false) {
        
//           this.spinner.hide();
    
//         this.mensaje = 'Datos incorrectos';
//         console.error('No tienes acceso al sistema, credenciales incorrectas');
    
//         setTimeout(() => {
//           this.mensaje = ''
//         }, 3000);
    
//       }
//     })


// }

 
    // if(data.type === HttpEventType.DownloadProgress){
    //   data.loaded === this.spinner.hide();
    //     //  console.log('segundos', data.loaded);
    //     //  console.log(data.url);
    //  }

    //  if(data.type === HttpEventType.UploadProgress){
    //   console.log(data.loaded);
    //   console.log(data.url);
    //  }

    //  if(data.type === HttpEventType.Response){
    //     console.log(data.body);
    //  }