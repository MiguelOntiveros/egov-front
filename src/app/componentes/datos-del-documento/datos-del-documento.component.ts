import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { Location } from '@angular/common';
import { DatosDelDocumentoService } from './datos-del-documento.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-datos-del-documento',
  templateUrl: './datos-del-documento.component.html',
  styleUrls: ['./datos-del-documento.component.css']
})
export class DatosDelDocumentoComponent implements OnInit {

  contrato1: [];
  datosDelDocumentoArray: [];
  id;

  constructor(
    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private adquisicionesService: AdquisicionesService,
    private datosDelDocumentoService: DatosDelDocumentoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // se obtienen y se muestran en consola los parametros necesarios para hacer funcionar los servicios

      // const contrato1 = localStorage.getItem('contrato1');
      let id = params['id'];
      let clave = params['categoria'];
      let area = params['area'];
      let tipo = params['tipo'];
      let categoria = params['categoria'];
      let folio = params['folio'];
      // let revision = params['revision'];

      console.log('Id:', id);
      console.log('Clave:', clave);
      console.log('Area:', area);
      console.log('Tipo:', tipo);
      console.log('Categoria:', categoria);
      console.log('Folio:', folio);
      // console.log('Revision:', revision);
      this.getDatosDelDocumento(area, tipo, categoria, folio);
    });
  }


  llamarId(){
    this.adquisicionesService.llamarContrato(this.id).subscribe((data: any) => {
      data = localStorage.getItem('contrato1');
      this.contrato1 = data;
    })
    }

  regresarAtras(){
  this.location.back();
  }

  getDatosDelDocumento(area, tipo, categoria, folio){
  this.datosDelDocumentoService.getDatosDelDocumento(area, tipo, categoria, folio).subscribe((data: any) => {
    this.datosDelDocumentoArray = data;    
    console.log(data);
  })
  }
  

}
