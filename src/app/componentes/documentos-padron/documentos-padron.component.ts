import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-documentos-padron',
  templateUrl: './documentos-padron.component.html',
  styleUrls: ['./documentos-padron.component.css']
})
export class DocumentosPadronComponent implements OnInit {

  contrato = null;
  documento: string;
  ids:number;

  constructor(private inicio: InicioService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // se obtienen y se muestran en consola los parametros necesarios para hacer funcionar los servicios
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
      this.getIdsDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision)
    });
  }

  getIdsDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getIdsDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.ids = data;
      console.log('Método:', data);
    });
  }

  getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.documento = data;
    });
  }
  verActaConstitutiva() {
    this.router.navigate(['/imagenes-d-p-acta-constitutiva']);
  }

  verAltaHacienda() {
    this.router.navigate(['/imagenes-d-p-alta-hacienda']);
  }

  verComprobanteDomicilio() {
    this.router.navigate(['/imagenes-d-p-comprobante-domicilio']);
  }

  verUbicacion() {
    this.router.navigate(['/imagenes-d-p-ubicacion-domicilio']);
  }

  verIdentificacion() {
    this.router.navigate(['/imagenes-d-p-identificacion-oficial']);
  }

  verPoderLegal() {
    this.router.navigate(['/imagenes-d-p-poder-legal']);
  }

}
