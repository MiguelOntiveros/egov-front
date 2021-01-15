import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { ConfiguracionWeb } from '../../interfaces/ConfiguracionWeb';
import { ContratoReferencia } from '../../interfaces/ContratoReferencias';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  contrato = null;
  configuracion: ConfiguracionWeb = {};
  contratoReferencia: ContratoReferencia[];

  constructor(private router: Router, private inicio: InicioService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // obtiene el storage llamado contrato
    var datos = localStorage.getItem('contrato');
    this.contrato = JSON.parse(datos);
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado categoría
      var clave = params['categoria'];
      this.getConfiguracion(clave);
      console.log(clave);
    });

    const area = this.contrato['area'];
    const tipo = this.contrato['tipo'];
    const categoria = this.contrato['categoria'];
    const folio = this.contrato['folio'];
    const revision = this.contrato['revision'];

    if (this.contrato !== "undefined" || this.contrato !== null) {
      this.getDocumentos(area, tipo, categoria, folio, revision);
      console.log('Area:', area);
      console.log('Tipo:', tipo);
      console.log('Categoria:', categoria);
      console.log('Folio:', folio);
      console.log('Revision:', revision);
    } else {
      console.error('No hay datos', []);
    }

  }

  getConfiguracion(clave) {
    this.inicio.getConfiguracion(clave).subscribe((data: any) => {
      this.configuracion = data;
    });
  }

  getDocumentos(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentos(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoReferencia = data;
    });
  }

  verSeguimiento() {
    this.router.navigate(['/seguimientos']);
    console.log('-> VER SEGUIMIENTO');
  }

  /*
  Pagina oficial
  https://www.npmjs.com/package/pdfmake-wrapper
  */

  abrirAnexosOficiales() {
    console.log('Anexos Oficiales abierto');
    this.router.navigate(['/anexos-oficiales']);
  }

  irInicio() {
    this.router.navigate(['/inicio']);
  }

}
