import { Component, OnInit } from '@angular/core';
import { ContratoOficialImagen } from 'src/app/interfaces/ContratoOficialImagen';
import { ImagenesAnexosOficialesService } from '../imagenes-anexos-oficiales/imagenes-anexos-oficiales.service';

@Component({
  selector: 'app-imagenes-anexos-oficiales',
  templateUrl: './imagenes-anexos-oficiales.component.html',
  styleUrls: ['./imagenes-anexos-oficiales.component.css']
})

export class ImagenesAnexosOficialesComponent implements OnInit {

  contratoAlmacenado = null;
  contratoOficialImagen: ContratoOficialImagen[];
  //ConfiguracionWeb = {};

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
    const page = 1;
    const size = 4;
    console.log(this.contratoOficialImagen);
    this.imagenesAnexas.getDocumentos(page, size).subscribe((data: any) => {
      this.contratoOficialImagen = data;
    });
  }

}
