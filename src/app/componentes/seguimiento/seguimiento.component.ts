import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  contratoAlmacenado = null;
  observaciones: string[];

  constructor(private inicio: InicioService) { }

  ngOnInit(): void {
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
    this.inicio.getOservaciones(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.observaciones = data;
    });
  }
}
