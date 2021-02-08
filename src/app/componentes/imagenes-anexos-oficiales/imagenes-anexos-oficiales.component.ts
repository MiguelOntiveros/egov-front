import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-imagenes-anexos-oficiales',
  templateUrl: './imagenes-anexos-oficiales.component.html',
  styleUrls: ['./imagenes-anexos-oficiales.component.css']
})

export class ImagenesAnexosOficialesComponent implements OnInit {

  contratoAlmacenado = null;
  documento: string;

  constructor(private router: Router, private inicio: InicioService, private activateRoute: ActivatedRoute) { }

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
      this.getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision)
    });
  }

  getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.documento = data;
    });
  }

  verBasesDeLicitacion() {
    this.router.navigate(['/imagenes-a-o-bases-de-licitacion']);
  }

  verProcedimientoAdjudicacion() {
    this.router.navigate(['/imagenes-a-o-procedimiento-de-adjudicacion']);
  }

  verOrigenRecursos() {
    this.router.navigate(['/imagenes-a-o-oficio-de-origen-de-los-recursos']);
  }

  verActaFallo() {
    this.router.navigate(['/imagenes-a-o-acta-de-fallo']);
  }

}
