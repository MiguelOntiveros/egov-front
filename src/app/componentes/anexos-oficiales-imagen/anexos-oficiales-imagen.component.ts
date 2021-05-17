import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-anexos-oficiales-imagen',
  templateUrl: './anexos-oficiales-imagen.component.html',
  styleUrls: ['./anexos-oficiales-imagen.component.css']
})
export class AnexosOficialesImagenComponent implements OnInit {

  id;
  ids: number;
  mensaje: string;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private inicioService: InicioService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // SE OBTIENEN Y SE MUESTRAN EN CONSOLA LOS PARAMETROS NECESARIOS PARA HACER FUNCIONAR LOS SERVICIOS
      // console.log(params);
      // let objetoJSON = JSON.parse(params[0]);

      // console.log(objetoJSON);

      // this.id = params['id'];
      // let clave = params['categoria'];
      // let area = params['area'];
      // let tipo = params['tipo'];
      // let categoria = params['categoria'];
      // let folio = params['folio'];
      // let revision = params['revision'];
      // let documento = params['documento'];

      // console.log('Id:', this.id);
      // console.log('Clave:', clave);
      // console.log('Area:', area);
      // console.log('Tipo:', tipo);
      // console.log('Categoria:', categoria);
      // console.log('Folio:', folio);
      // console.log('Revision:', revision);
      // console.log('Documento', documento);

      // this.getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision, documento);

      // let prueba = localStorage.getItem('contrato2')
      // console.log(prueba);
      // let pruebaJSON = JSON.parse(prueba);
      // console.log(pruebaJSON);

    });


    let getItemStorage = localStorage.getItem('contrato2');

    if( getItemStorage === '[]' ){

      this.spinner.show();

      this.spinner.hide();

      this.mensaje = 'No hay imagenes en esta categoria';
      console.log('No hay imagenes en esta categoria');
      localStorage.removeItem('contrato2');

    } else if( getItemStorage !== '[]' ){

      this.spinner.show();

        this.spinner.hide();
        let obtenerIds = JSON.parse(getItemStorage);
    
        console.log(obtenerIds);

        this.ids = obtenerIds;

        localStorage.removeItem('contrato2');

    }

  // localStorage.removeItem('contrato2');


    // this.id = obtener['id'];
    // let clave = params['categoria'];
    // let area = params['area'];
    // let tipo = params['tipo'];
    // let categoria = params['categoria'];
    // let folio = params['folio'];
    // let revision = params['revision'];
    // let documento = params['documento'];

    // console.log('Id:', this.id);
    // console.log('Clave:', clave);
    // console.log('Area:', area);
    // console.log('Tipo:', tipo);
    // console.log('Categoria:', categoria);
    // console.log('Folio:', folio);
    // console.log('Revision:', revision);
    // console.log('Documento', documento);

    // this.getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision, documento);


  // LO SIGUIENTE ES UNA PRUEBA QUE FUNCIONA PARA VER IMAGENES
  // SI HAY DUDAS DE ESTO, PRIMERO DEBES PREGUNTAR

    // let prueba = localStorage.getItem('contrato2')
    // console.log(prueba);
    // let pruebaJSON = JSON.parse(prueba);
    // console.log(pruebaJSON);

    // FALTA QUE SELECCIONE EL DOCUMENTO POR NOMBRE Y NO POR NUMERO
    // AQUI SE TOMA EL PRIMER OBJETO , LOS OTROS 3 SE DESCARTAN

    // let Prueba = pruebaJSON.forEach(e => console.log(e));

  // let Prueba = pruebaJSON.forEach( function (value) {
  //   value['area']

  //   console.log(value);
  // })

  // for( var i  = 1; i < pruebaJSON.lenght; i++ ){

  //   pruebaJSON[i]['documento'];

  //   console.log(pruebaJSON);
  // }

    // console.log(Prueba);

    // let objetoJSON = pruebaJSON[0];

    // console.log(objetoJSON);

    // let objetoJSON = pruebaJSON[1];
    // let objetoJSON = pruebaJSON[2];
    // let objetoJSON = pruebaJSON[3];
  
    // let area = objetoJSON['area'];
    // let tipo = objetoJSON['tipo'];
    // let categoria = objetoJSON['categoria'];
    // let folio = objetoJSON['folio'];
    // let revision = objetoJSON['revision'];
    // let documento = objetoJSON['documento'];

    // let area = prueba['area']
    // let tipo = prueba['tipo'];
    // let categoria = prueba['categoria'];
    // let folio = prueba['folio'];
    // let revision = prueba['revision'];
    // let documento = prueba['documento']

    // console.log(area, tipo, categoria, folio, revision, documento);

    // this.getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision, documento);

    // INSTRUCCION PARA LIMPIAR O REMOVER EL OBJETO CONTRATO 2 EN EL LOCALSTORAGE
    // localStorage.removeItem('contrato2');

  }

  regresarAtras(){
    this.location.back();
  }

  // getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision, documento) {
  //   this.inicioService.getIdsDocContratosOficial(area, tipo, categoria, folio, revision, documento).subscribe((data: any) => {
  //     this.ids = data;
  //     console.log(data);
  //   });
  // }

  irArriba(){
    window.scrollTo(0, 0)
  }

}
