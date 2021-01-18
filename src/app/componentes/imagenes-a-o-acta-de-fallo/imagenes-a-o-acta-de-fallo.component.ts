import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-a-o-acta-de-fallo',
  templateUrl: './imagenes-a-o-acta-de-fallo.component.html',
  styleUrls: ['./imagenes-a-o-acta-de-fallo.component.css']
})
export class ImagenesAOActaDeFalloComponent implements OnInit {

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
