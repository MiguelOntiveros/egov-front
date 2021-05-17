import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Contrato } from '../../interfaces/Contrato';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';
import { ContratoReferencia } from '../../interfaces/ContratoReferencias';
import { ContratoGeneralDato } from '../../interfaces/ContratoGeneralDato';

import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { InicioService } from '../inicio/inicio.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-documentos-filtros',
  templateUrl: './documentos-filtros.component.html',
  styleUrls: ['./documentos-filtros.component.css']
})
export class DocumentosFiltrosComponent implements OnInit {


  contrato: Contrato = {};
  configuracion: ConfiguracionWeb = {};
  contratoReferencia: ContratoReferencia = {};
  contratoGeneral : ContratoGeneralDato= {};

  estatusDocumentoFirmado: string;
  estatusDocumentoEnFirmas: string;

  id;
  mensajeNoSeguimiento1 = 'El contrato no tiene seguimiento, el estatus debe ser';
  mensajeNoSeguimiento2 = 'FIRMADO o EN FIRMAS';

  constructor(
    private location: Location,
    private router: Router, 
    private inicio: InicioService, 
    private activatedRoute: ActivatedRoute, 
    private adquisicionesService: AdquisicionesService,
    
   ) { }

   ngOnInit(): void {
     
    // this.activatedRoute.params.subscribe((params: any) => {
    //  let id = params['id'];
    //  console.log(id);
    // })

    let idContrato = localStorage.getItem('idContrato');
    console.log(idContrato);
    let contratoId = JSON.parse(idContrato);
    console.log(contratoId);

    this.llamarContrato(contratoId);

    let info1 = localStorage.getItem('contrato3');
    let info2 = JSON.parse(info1);

    console.log(info2);
    let clave = info2['categoria'];
    let area = info2['area'];
    let tipo = info2['tipo'];
    let categoria = info2['categoria'];
    let folio = info2['folio'];
    let revision = info2['revision'];
    // let tipo = info1['tipo'];
    // let categoria = info1['categoria'];
    // let folio = info1['folio'];
    // let revision = info1['revision'];

    // console.log('Area' + area);
    // console.log('Tipo' + tipo);
    // console.log('Categoria' + categoria);
    // console.log('Folio' + folio);
    // console.log('Revision' + revision);

    this.getSociosYRep(area, tipo, categoria, folio, revision);
    this.getConfiguracion(clave);

  }

  // LLAMAR INFORMACION DEL CONTRATO, AQUI TAMBIEN SE MANIPULA EL ESTADO PARA SABER SI SE TIENE SEGUIMIENTO
  llamarContrato(id) {
    this.adquisicionesService.obtenerContratoCompleto(id).subscribe((data: any) => {
        this.contrato = data;
        this.estatusDocumentoFirmado = 'FIRMADO';
        this.estatusDocumentoEnFirmas = 'EN FIRMAS';
        console.log(data);
    })
  }

  // OBTENER SOCIOS Y REPRESENTANTES LEGALES
  getSociosYRep(area,tipo,categoria,folio,revision){

    this.inicio.getSociosYRep(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoReferencia = data;
      console.log(data);
    });
  }

  // OBTENER RESPONSABLE
  getConfiguracion(clave){
    this.inicio.getConfiguracion(clave).subscribe((data: any) => {
    this.configuracion = data;
    console.log(data);
    });
  }

  abrirAnexosOficiales(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => { 
      // localStorage.setItem('contrato1', JSON.stringify(data));   
    this.router.navigate(['anexos-oficiales-lista', data]);
    })
  }
  
  abrirDocumentosPadron(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => { 
      // localStorage.setItem('contrato1', JSON.stringify(data));   
      this.router.navigate(['documentos-padron-lista', data]);
    })
  }
  
  abrirImagenesContratosAnexos(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => { 
      // localStorage.setItem('contrato1', JSON.stringify(data));   
      this.router.navigate(['contratos-y-anexos-lista', data]);
    })
  }

  verSeguimiento(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => { 
  
        // localStorage.setItem('contrato1', JSON.stringify(data));   
        this.router.navigate(['seguimientos', data]);
    })
  }

  regresar() {
    this.location.back();
    localStorage.removeItem('contrato3');
  }

}