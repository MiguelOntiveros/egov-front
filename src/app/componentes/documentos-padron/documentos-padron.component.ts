import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-documentos-padron',
  templateUrl: './documentos-padron.component.html',
  styleUrls: ['./documentos-padron.component.css']
})
export class DocumentosPadronComponent implements OnInit {

  contrato = null;
  contratoDocumentoImagen: string[];

  constructor(private inicio: InicioService) { }

  ngOnInit(): void {
    var info = localStorage.getItem('contrato');
    this.contrato = JSON.parse(info);
    console.log(this.contratoDocumentoImagen);
    console.log(this.contrato);

    const area = this.contrato['area'];
    const tipo = this.contrato['tipo'];
    const categoria = this.contrato['categoria'];
    const folio = this.contrato['folio'];
    const revision = this.contrato['revision'];

    this.getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision);
  }

  getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoDocumentoImagen = data;
    });
  }

}
