import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contrato } from '../../interfaces/Contrato';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';
import { ContratoReferencia } from '../../interfaces/ContratoReferencias';
import { ContratoGeneralDato } from '../../interfaces/ContratoGeneralDato';

import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { InicioService } from '../inicio/inicio.service';

import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  contrato: Contrato = {};
  configuracion: ConfiguracionWeb = {};
  contratoReferencia: ContratoReferencia = {};
  contratoGeneral : ContratoGeneralDato= {};

  estatusDocumentoFirmado: string;
  estatusDocumentoEnFirmas: string;
  // estatusDocumentoFirmado = 'FIRMADO';

  id;
  mensajeNoSeguimiento1 = 'El contrato no tiene seguimiento, el estatus debe ser';
  mensajeNoSeguimiento2 = 'FIRMADO o EN FIRMAS';

  constructor(
    private router: Router, 
    private inicio: InicioService, 
    private activatedRoute: ActivatedRoute, 
    private adquisicionesService: AdquisicionesService,
    private location: Location,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // se obtienen y se muestran en consola los parametros necesarios para hacer funcionar los servicios
      this.id = params['id'];
      let clave = params['categoria'];
      let area = params['area'];
      let tipo = params['tipo'];
      let categoria = params['categoria'];
      let folio = params['folio'];
      let revision = params['revision'];
      console.log('Id:', this.id);
      console.log('Clave:', clave);
      console.log('Area:', area);
      console.log('Tipo:', tipo);
      console.log('Categoria:', categoria);
      console.log('Folio:', folio);
      console.log('Revision:', revision);
      
      this.spinner.show();

      this.getSociosYRep(area, tipo, categoria, folio, revision);
      this.llamarContrato(this.id);
      this.getConfiguracion(clave);
      
      this.spinner.hide();
    });
  }

  getConfiguracion(clave) {
    this.inicio.getConfiguracion(clave).subscribe((data: any) => {
      this.configuracion = data;
    });
  }

  getValorDelMonto(monto) {
    this.inicio.getValorDelMonto(monto).subscribe((data: any) => {
      this.contratoGeneral = data;
    });
  }

  getSociosYRep(area, tipo, categoria, folio, revision) {
    this.inicio.getSociosYRep(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoReferencia = data;
      console.log(data);
    });
  }

  llamarContrato(id) {
    this.adquisicionesService.obtenerContratoCompleto(id).subscribe((data: any) => {
        this.contrato = data;
        this.estatusDocumentoFirmado = 'FIRMADO';
        this.estatusDocumentoEnFirmas = 'EN FIRMAS';
        console.log(data);
    })
  }
  
  verSeguimiento(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => { 

        // localStorage.setItem('contrato1', JSON.stringify(data));   
        this.router.navigate(['seguimientos', data]);
      
    })
  }

//  abrirDatosDelDocumento(id) {
  
//   this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
    // localStorage.setItem('contrato1', JSON.stringify(data));
//     this.router.navigate(['/datos-del-documento', data]);
//     console.log(data);
//   })
  
// }

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

  regresar() {
    this.location.back();
  }


  // changeOptions() {
  //   this.spinner.show(undefined,
  //     {
  //       type: 'square-spin',
  //       size: 'medium',
  //       bdColor: 'rgba(100,149,237, .8)',
  //       color: 'white',
  //       fullScreen: false
  //     }
  //   );
  //   setTimeout(() => this.spinner.hide(), 5000);
  // }

}
