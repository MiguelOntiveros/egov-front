import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentosPadronListaService } from './documentos-padron-lista.service';
import { InicioService } from '../inicio/inicio.service';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contrato } from '../../interfaces/Contrato';
import { ContratoDocumentoImagen } from '../../interfaces/ContratoDocumentoImagen';
import { ContratoAnexoImagen } from '../../interfaces/ContratoAnexoImagen';

@Component({
  selector: 'app-documentos-padron-lista',
  templateUrl: './documentos-padron-lista.component.html',
  styleUrls: ['./documentos-padron-lista.component.css']
})
export class DocumentosPadronListaComponent implements OnInit {

  contrato: Contrato = {};

  // prueba60: ContratoAnexoImagen = {};

  // prueba: ContratoAnexo = {};
  // ejemplo1: ContratoDocumentoImagen[];

  // @Input('arrayPrueba') arrayPrueba;

  listaOpcion = [];

  mensaje: string = '';

  id;
  id2;

  

  // pruebaObjeto: [];

  constructor(
  private location: Location,
  private router: Router,
  private listaDocumentosPadronService: DocumentosPadronListaService,
  private activatedRoute: ActivatedRoute,
  private adquisicionesService: AdquisicionesService,
  private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {

  this.activatedRoute.params.subscribe((params) => {
  // SE OBTIENEN Y SE MUESTRAN EN CONSOLA LOS PARAMETROS NECESARIOS PARA HACER FUNCIONAR LOS SERVICIOS

  this.id = params['id'];
  let clave = params['categoria'];
  let area = params['area'];
  let tipo = params['tipo'];
  let categoria = params['categoria'];
  let folio = params['folio'];
  let revision = params['revision'];

  console.log('Id:', this.id);
  console.log('Clave:', clave);
  // console.log('Area:', area);
  // console.log('Tipo:', tipo);
  // console.log('Categoria:', categoria);
  // console.log('Folio:', folio);
  // console.log('Revision:', revision);

  this.obtenerListaOpciones(area, tipo, categoria, folio, revision);
  // this.verImagenes(this.area, this.tipo, this.categoria, this.folio, this.revision, 'ACTA CONSTITUTIVA');
  this.llamarId(this.id);
    })
  }

  llamarId(id){
  this.adquisicionesService.obtenerContratoCompleto(id).subscribe((data: any) => {
    // localStorage.setItem('contrato1', JSON.stringify(data));
    // {}
    this.contrato = data;
    console.log(data);
  })
  }

  verTodasLasImagenes(){
  this.adquisicionesService.llamarContrato(this.id).subscribe((data: any) => {
    this.router.navigate(['/documentos-padron-todo', data]);
  })
  }

  regresarAtras(){
    this.location.back();
  }

  obtenerListaOpciones(area,tipo,categoria,folio, revision){
  this.listaDocumentosPadronService.getListaDocumentosPadron(area,tipo,categoria,folio,revision).subscribe((data: any) => {
    // console.log(area, tipo, categoria, folio, revision);
    console.log(data);
    
    this.spinner.show();
    
  if(data.length <= 0){

      this.spinner.hide();
      this.mensaje = 'Sin lista de opciones';
      console.log('No hay lista de botones para mostrar imagenes');
      console.log(data);
    
    
  }else if(data.length > 0){

      this.spinner.hide();
      this.listaOpcion = data;
      this.mensaje = '';

    console.log(data);
    
  }

    // this.listaOpcion = data;
  });
  }

  verImagenes(documento){
    
    this.activatedRoute.params.subscribe((params) => {
  
      this.id2 = params['id'];
      let area = params['area'];
      let tipo = params['tipo'];
      let categoria = params['categoria'];
      let folio = params['folio'];
      let revision = params['revision'];
  
      console.log(area);
      console.log(tipo);
      console.log(categoria);
      console.log(folio);
      console.log(revision);
  
      this.listaDocumentosPadronService.getIdsDocumentosPadron(area, tipo, categoria, folio, revision, documento).subscribe((data: any ) => {
        localStorage.setItem('contrato2', JSON.stringify(data));
        this.router.navigate(['/documentos-padron-imagen'], data);
        console.log(data);
      });
    })
    }
  

}
