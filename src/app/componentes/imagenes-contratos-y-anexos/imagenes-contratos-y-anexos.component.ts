import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';
import { ContratoAnexoImagen } from '../../interfaces/ContratoAnexoImagen';

@Component({
  selector: 'app-imagenes-contratos-y-anexos',
  templateUrl: './imagenes-contratos-y-anexos.component.html',
  styleUrls: ['./imagenes-contratos-y-anexos.component.css']
})
export class ImagenesContratosYAnexosComponent implements OnInit {

  contrato = null;
  contratoAnexoImagen: string[];

  constructor(private inicio: InicioService) { }

  ngOnInit(): void {
    var datos = localStorage.getItem('contrato');
    this.contrato = JSON.parse(datos);
    
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoAnexoImagen = data;
    });
  }

}
