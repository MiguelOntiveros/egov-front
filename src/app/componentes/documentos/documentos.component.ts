import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  montoContrato = '2,500,000';
  fechaContratoCreado = '24/05/2019';
  estatusContrato = 'EN REVISIÓN' ;
  responsableContrato = 'LIC. GONZALO GONZALEZ MORENO';

  repLegalContrato = [{nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},];

  sociosContrato = [
    {nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},
    {nombre: 'VICTOR VILLAREAL ESPINOZA'}
  ];

  documentos = [
    {nombre: 'Ficha Tecnica'}, {nombre: 'Documentos Padrón'},
    {nombre: 'Anexos Oficiales'}, {nombre: 'Contratos y Anexos'}
  ];

  contrato= null;

  constructor(private router: Router) { 
      var datos = localStorage.getItem("data")
      this.contrato = datos;
      console.log(datos);
  }

  ngOnInit(): void {
    var datos = localStorage.getItem("data");
    this.contrato = JSON.parse(datos);
    console.log(datos);
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
