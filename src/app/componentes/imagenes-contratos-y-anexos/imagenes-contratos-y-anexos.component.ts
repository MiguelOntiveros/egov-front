import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imagenes-contratos-y-anexos',
  templateUrl: './imagenes-contratos-y-anexos.component.html',
  styleUrls: ['./imagenes-contratos-y-anexos.component.css']
})
export class ImagenesContratosYAnexosComponent implements OnInit {

  contrato = null;
  documento: string;
  ids: number;

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
      this.getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision)
    });
  }

  getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.ids = data;
    });
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.documento = data;
    });
  }

  verQr() {
    this.router.navigate(['/imagenes-c-a-qr']);
  }

  verSeguimiento1() {
    this.router.navigate(['/imagenes-c-a-seguimiento1']);
  }
}
