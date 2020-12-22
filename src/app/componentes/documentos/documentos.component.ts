import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  montoContrato = '2,500,000';
  fechaContratoCreado = '24/05/2019';
  estatusContrato = 'En revisión' ;
  responsableContrato = 'LIC. GONZALO GONZALEZ MORENO';

  repLegalContrato = [{nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},];

  sociosContrato = [
    {nombre: 'JOSÉ ANTONIO LÓPEZ GARZA'},
    // {nombre: 'VICTOR VILLAREAL ESPINOZA'}
  ];

  documentos = [
    {nombre: 'Ficha Tecnica'}, {nombre: 'Documentos Padrón'},
    {nombre: 'Anexos Oficiales'}, {nombre: 'Contratos y Anexos'}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}

abrirDocumentosPadron(){
  console.log('Documentos Padron abierto');
}

abrirAnexosOficiales(){
  console.log('Anexos Oficiales abierto');
}

abrirContratosAnexos(){
  console.log('Contratos y Anexos abierto');
}



}