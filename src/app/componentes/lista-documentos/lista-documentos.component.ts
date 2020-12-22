import { Component, OnInit } from '@angular/core';
import { ContratoDocumentoDato } from '../../interfaces/ContratoDocumentoDato';
import { ListaDocumentosService } from './lista-documentos.service';
import { Router } from '@angular/router';
import { Contrato } from '../../interfaces/Contrato';

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.css']
})
export class ListaDocumentosComponent implements OnInit {

  // resultadoLista: ContratoDocumentoDato[];

  // resultadoLista: ContratoDocumentoDato[];

  resultadoListaContrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/obras_img.png';

  constructor(
    private listaDocumentoService: ListaDocumentosService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.listaDocumentoService.getDocumento().subscribe((data: any) => {
    //   this.resultadoLista = data;
    //   console.log(data);
    // })

    // this.listaDocumentoService.getDocumento().subscribe((data: any) => {
    //   this.resultadoLista = data;
    //   console.log(data);
    // })
  
  this.listaDocumentoService.getContrato().subscribe((data: any) => {
    this.resultadoListaContrato = data;
    console.log(data);
  })

  }

  verDocumentos(){
  console.log('Ver documentos');
  this.router.navigate(['/documentos'])
  }


}
