import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-c-a-seguimiento1',
  templateUrl: './imagenes-c-a-seguimiento1.component.html',
  styleUrls: ['./imagenes-c-a-seguimiento1.component.css']
})
export class ImagenesCASeguimiento1Component implements OnInit {

  contratoAlmacenado = null;

  constructor() { }

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
  }

}
