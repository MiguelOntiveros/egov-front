import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-anexos-oficiales-todo',
  templateUrl: './anexos-oficiales-todo.component.html',
  styleUrls: ['./anexos-oficiales-todo.component.css']
})
export class AnexosOficialesTodoComponent implements OnInit {

  contrato = null;
  documento: string;
  ids: number;

  mensaje: string;

  constructor(
    private inicioService: InicioService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
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

      this.getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision);
    });
  }

  getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision) {
    this.inicioService.getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {

      this.spinner.show();

        if(data.length <= 0){

            this.spinner.hide();

            this.mensaje = 'No hay imagenes disponibles para mostrar';
            console.log(data);

        }else if(data.length > 0){

            this.spinner.hide();

            this.mensaje = '';
            this.ids = data;
            console.log(data);

        }
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
