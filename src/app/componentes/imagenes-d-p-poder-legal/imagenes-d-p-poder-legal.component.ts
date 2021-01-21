import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-d-p-poder-legal',
  templateUrl: './imagenes-d-p-poder-legal.component.html',
  styleUrls: ['./imagenes-d-p-poder-legal.component.css']
})
export class ImagenesDPPoderLegalComponent implements OnInit {

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
