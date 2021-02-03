import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrato } from '../../interfaces/Contrato';
import { InicioService } from '../inicio/inicio.service';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';
import { ContratoReferencia } from '../../interfaces/ContratoReferencias';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  contrato: Contrato = {};
  configuracion: ConfiguracionWeb = {};
  contratoReferencia: ContratoReferencia = {};

  constructor(private router: Router, private inicio: InicioService, private activateRoute: ActivatedRoute, private adquisicionesService: AdquisicionesService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // se obtienen los parametros
      var id = params['id'];
      var clave = params['categoria'];
      var area = params['area'];
      var tipo = params['tipo'];
      var categoria = params['categoria'];
      var folio = params['folio'];
      var revision = params['revision'];
      console.log('Id:', id);
      console.log('Clave:', clave);
      console.log('Area:', area);
      console.log('Tipo:', tipo);
      console.log('Categoria:', categoria);
      console.log('Folio:', folio);
      console.log('Revision:', revision);
      this.getConfiguracion(clave);
      this.getSociosYRep(area, tipo, categoria, folio, revision);
      this.llamarContrato(id);
    });
  }

  getConfiguracion(clave) {
    this.inicio.getConfiguracion(clave).subscribe((data: any) => {
      this.configuracion = data;
    });
  }

  getSociosYRep(area, tipo, categoria, folio, revision) {
    this.inicio.getSociosYRep(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoReferencia = data;
    });
  }

  llamarContrato(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
      this.contrato = data;
    })
  }
  
  verSeguimiento() {
    this.router.navigate(['/seguimientos']);
  }

  /*
  Pagina oficial
  https://www.npmjs.com/package/pdfmake-wrapper
  */

  abrirAnexosOficiales() {
    this.router.navigate(['/anexos-oficiales']);
  }

  abrirDocumentosPadron() {
    this.router.navigate(['/documentos-padron']);
  }

  abrirFichaTecnica() {
    this.router.navigate(['/ficha-tecnica']);
  }

  abrirImagenesContratosAnexos() {
    this.router.navigate(['/imagenes-contratos-y-anexos']);
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }

}
