import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { ImagenesAnexosOficialesService } from '../imagenes-anexos-oficiales/imagenes-anexos-oficiales.service';

@Component({
  selector: 'app-imagenes-anexos-oficiales',
  templateUrl: './imagenes-anexos-oficiales.component.html',
  styleUrls: ['./imagenes-anexos-oficiales.component.css']
})

export class ImagenesAnexosOficialesComponent implements OnInit {

  //documentos: String[];
  contratoAlmacenado = null;
  lista: string;

  constructor(private imagenesAnexas: ImagenesAnexosOficialesService) { }

  ngOnInit(): void {
    // obtiene el storage llamado contrato
    var contratoOriginal = localStorage.getItem('contrato');
    this.contratoAlmacenado = JSON.parse(contratoOriginal);

    const area = this.contratoAlmacenado['area'];
    const tipo = this.contratoAlmacenado['tipo'];
    const categoria = this.contratoAlmacenado['categoria'];
    const folio = this.contratoAlmacenado['folio'];
    const revision = this.contratoAlmacenado['revision'];
    this.getDocumentos(area, tipo, categoria, folio, revision);
    console.log(this.contratoAlmacenado);
  }

  getDocumentos(area, tipo, categoria, folio, revision){
    this.imagenesAnexas.getDocumentos(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.lista = data;
    });
  }

}
