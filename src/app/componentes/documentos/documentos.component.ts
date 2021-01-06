import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  contrato= null;
  configuracion : ConfiguracionWeb[];

  constructor(private router: Router, private inicio: InicioService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
   // obtiene el storage llamado contrato
   var datos = localStorage.getItem('contrato');
   this.contrato = JSON.parse(datos);
   this.activateRoute.params.subscribe((params) => {
   // obtiene el parametro llamado categoría
   var clave = params['categoria'];
   this.inicio.getConfiguracion(clave).subscribe((config: any) => {
    this.configuracion = config;
  });
   console.log(clave);
   console.log(this.inicio.getConfiguracion(clave));
  });
  }

  getConfiguracion(clave) {
    this.inicio.getConfiguracion(clave).subscribe((config: any) => {
      this.configuracion = config;
    });
  }
  
  verSeguimiento(){
    this.router.navigate(['/seguimientos']);
    console.log('-> VER SEGUIMIENTO');
  }

  /*
  Pagina oficial
  https://www.npmjs.com/package/pdfmake-wrapper
  */

 abrirFichaTecnica(){
  console.log('Ficha Técnica abierto');
  this.router.navigate(['/seguimientos']);
}

abrirDocumentosPadron(){
  console.log('Documentos Padron abierto');
  this.router.navigate(['/seguimientos']);
}

abrirAnexosOficiales(){
  console.log('Anexos Oficiales abierto');
  this.router.navigate(['/seguimientos']);
}

abrirContratosAnexos(){
  console.log('Contratos y Anexos abierto');
  this.router.navigate(['/seguimientos']);
}

irInicio(){
  this.router.navigate(['/inicio']);
}

}
