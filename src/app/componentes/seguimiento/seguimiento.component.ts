import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  contratoAlmacenado = null;
  observaciones: string[];

  constructor(private inicio: InicioService, private activateRoute: ActivatedRoute) { }

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
      this.getObservaciones(area, tipo, categoria, folio, revision);
    });
  // obtiene el storage llamado contrato
  var contratoOriginal = localStorage.getItem('contrato');
  this.contratoAlmacenado = JSON.parse(contratoOriginal);

  const area = this.contratoAlmacenado['area'];
  const tipo = this.contratoAlmacenado['tipo'];
  const categoria = this.contratoAlmacenado['categoria'];
  const folio = this.contratoAlmacenado['folio'];
  const revision = this.contratoAlmacenado['revision'];
  console.log(this.contratoAlmacenado);
  this.getObservaciones(area, tipo, categoria, folio, revision);
  }

  getObservaciones(area, tipo, categoria, folio, revision) {
    this.inicio.getObservaciones(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.observaciones = data;
    });
  }
}
