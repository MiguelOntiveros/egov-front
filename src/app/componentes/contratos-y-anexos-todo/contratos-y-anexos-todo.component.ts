import { Component, OnInit } from '@angular/core';
import { InicioService } from '../inicio/inicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contratos-y-anexos-todo',
  templateUrl: './contratos-y-anexos-todo.component.html',
  styleUrls: ['./contratos-y-anexos-todo.component.css']
})
export class ContratosYAnexosTodoComponent implements OnInit {

  contrato = null;
  documento: string;
  ids: number;

  mensaje: string;

  constructor(
    private inicio: InicioService, 
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private location: Location,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // se obtienen y se muestran en consola los parametros necesarios para hacer funcionar los servicios
      let id = params['id'];
      let clave = params['categoria'];
      let area = params['area'];
      let tipo = params['tipo'];
      let categoria = params['categoria'];
      let folio = params['folio'];
      let revision = params['revision'];

      console.log('Id:', id);
      console.log('Clave:', clave);
      console.log('Area:', area);
      console.log('Tipo:', tipo);
      console.log('Categoria:', categoria);
      console.log('Folio:', folio);
      console.log('Revision:', revision);
      this.getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision)
    });
  }

  getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {

    this.spinner.show();

    if(data.length <= 0){

      this.spinner.hide();

      this.mensaje = 'No hay imagenes disponibles para mostrar';
      console.log(data);

    console.log(data);
    }else if(data.length > 0){

        this.spinner.hide();

        this.mensaje = '';
        this.ids = data;
        console.log(data);

    }

      // this.ids = data;
      // console.log(data);

      // let prueba = JSON.stringify(data);
      // console.log(prueba);
    });
  }

  // getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
  //   this.inicio.getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
  //     this.documento = data;
  //     console.log(data);
  //   });
  // }

  regresarAtras(){
    this.location.back();
  }  

  irArriba(){
    window.scrollTo(0, 0)
  }
  
}
