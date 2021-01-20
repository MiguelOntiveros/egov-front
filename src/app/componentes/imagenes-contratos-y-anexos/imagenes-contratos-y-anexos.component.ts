import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';
import { ContratoAnexoImagen } from '../../interfaces/ContratoAnexoImagen';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagenes-contratos-y-anexos',
  templateUrl: './imagenes-contratos-y-anexos.component.html',
  styleUrls: ['./imagenes-contratos-y-anexos.component.css']
})
export class ImagenesContratosYAnexosComponent implements OnInit {

  contrato = null;
  contratoAnexoImagen: string[];

  constructor(private inicio: InicioService, private router: Router) { }

  ngOnInit(): void {
    var info = localStorage.getItem('contrato');
    this.contrato = JSON.parse(info);
    console.log(this.contratoAnexoImagen);
    console.log(this.contrato);

    const area = this.contrato['area'];
    const tipo = this.contrato['tipo'];
    const categoria = this.contrato['categoria'];
    const folio = this.contrato['folio'];
    const revision = this.contrato['revision'];

    this.getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision);
  }

  verQr() {
    this.router.navigate(['/imagenes-c-a-qr']);
  }

  verSeguimiento1() {
    this.router.navigate(['/imagenes-c-a-seguimiento1']);
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoAnexoImagen = data;
    });
  }

}
