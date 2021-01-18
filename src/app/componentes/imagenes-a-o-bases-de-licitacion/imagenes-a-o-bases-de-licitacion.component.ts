import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes-a-o-bases-de-licitacion',
  templateUrl: './imagenes-a-o-bases-de-licitacion.component.html',
  styleUrls: ['./imagenes-a-o-bases-de-licitacion.component.css']
})
export class ImagenesAOBasesDeLicitacionComponent implements OnInit {

  contratoAlmacenado2 = null;

  constructor() { }

  ngOnInit(): void {
   // obtiene el storage llamado contrato
   var contratoOriginal = localStorage.getItem('contrato');
   this.contratoAlmacenado2 = JSON.parse(contratoOriginal);
 
   const area = this.contratoAlmacenado2['area'];
   const tipo = this.contratoAlmacenado2['tipo'];
   const categoria = this.contratoAlmacenado2['categoria'];
   const folio = this.contratoAlmacenado2['folio'];
   const revision = this.contratoAlmacenado2['revision'];
   console.log(this.contratoAlmacenado2);
  }

}
