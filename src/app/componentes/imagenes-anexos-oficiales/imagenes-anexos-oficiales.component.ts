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
  contrato : Contrato[];
  lista : Object = {};

  constructor(private imagenesAnexas: ImagenesAnexosOficialesService) { }

  ngOnInit(): void {
    // obtiene el storage llamado contrato
    var datos = localStorage.getItem('contrato');
    this.contrato = JSON.parse(datos);

    const area = this.contrato['area'];
    const tipo = this.contrato['tipo'];
    const categoria = this.contrato['categoria'];
    const folio = this.contrato['folio'];
    const revision = this.contrato['revision'];

    console.log('Area:', area);
    console.log('Tipo:', tipo);
    console.log('Categoria:', categoria);
    console.log('Folio:', folio);
    console.log('Revision:', revision);
    console.log(this.lista);
  }

  getDocumentos(area, tipo, categoria, folio, revision){
    this.imagenesAnexas.getDocumentos(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.lista = data;
    });
  }

}
