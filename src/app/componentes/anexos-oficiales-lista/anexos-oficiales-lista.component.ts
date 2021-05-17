import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { AnexosOficialesListaService } from './anexos-oficiales-lista.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contrato } from '../../interfaces/Contrato';

@Component({
  selector: 'app-anexos-oficiales-lista',
  templateUrl: './anexos-oficiales-lista.component.html',
  styleUrls: ['./anexos-oficiales-lista.component.css']
})
export class AnexosOficialesListaComponent implements OnInit {

  contrato: Contrato = {};
  listaOpcion = [];

  verImagenesArray = [];

  mensaje: string = '';

  id;
  // area;
  // tipo;
  // categoria;
  // folio;
  // revision;

  id2;

  constructor(
  private location: Location,
  private router: Router,
  private listaAnexosOficialesService: AnexosOficialesListaService,
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

  // console.log('Id:', this.id);
  // console.log('Clave:', clave);
  // console.log('Area:', area);
  // console.log('Tipo:', tipo);
  // console.log('Categoria:', categoria);
  // console.log('Folio:', folio);
  // console.log('Revision:', revision);

   this.obtenerListaOpciones(area, tipo, categoria, folio, revision);
  //  this.verImagenes(area, tipo , categoria, folio, revision);
  this.llamarId(this.id);
})

}

llamarId(id){
this.adquisicionesService.obtenerContratoCompleto(id).subscribe((data: any) => {
// localStorage.setItem('contrato1', JSON.stringify(data));
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
    this.listaAnexosOficialesService.getListaAnexosOficiales(area,tipo,categoria,folio,revision).subscribe((data: any) => {
      
      this.spinner.show();
  
    if(data.length <= 0){

        this.spinner.hide();

        this.mensaje = 'Sin lista de opciones';
        console.log('No hay lista de botones para mostrar imagenes');
        console.log(data);

    }else if(data.length > 0){

        this.spinner.hide();

        this.mensaje = '';
        this.listaOpcion = data;
        console.log(data);
      
    }

    // localStorage.setItem('contrato2', JSON.stringify(this.listaOpcion));

  })
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

    this.listaAnexosOficialesService.getIdsAnexosOficiales(area, tipo, categoria, folio, revision, documento).subscribe((data: any ) => {
      localStorage.setItem('contrato2', JSON.stringify(data));
      this.router.navigate(['/anexos-oficiales-imagen'], data);
      console.log(data);
 

    });
  })
  }

}


 // verImagenes(area,tipo,categoria,folio,revision){
    // this.listaAnexosOficialesService.getListaAnexosOficiales(area, tipo, categoria, folio, revision).subscribe((data: any) => {
    // // localStorage.setItem('contrato2', JSON.stringify(data));
    // this.router.navigate(['/anexos-oficiales-imagen'], data);
    // });

  // this.activatedRoute.params.subscribe((params) => {

  //   this.id2 = params['id'];
  //   let area = params['area'];
  //   let tipo = params['tipo'];
  //   let categoria = params['categoria'];
  //   let folio = params['folio'];
  //   let revision = params['revision'];

  //   console.log(area);
  //   console.log(tipo);
  //   console.log(categoria);
  //   console.log(folio);
  //   console.log(revision);

  //   this.listaAnexosOficialesService.getListaAnexosOficiales(area, tipo, categoria, folio, revision).subscribe((data: any ) => {
  //     this.router.navigate(['/anexos-oficiales-imagen'], data);
  //     console.log(data);
  //   });

  // })
  // }



// let area = this.area;
    // let tipo = this.tipo;
    // let categoria = this.categoria;
    // let folio = this.folio;
    // let revision = this.revision;

  // this.listaAnexosOficialesService.getIdsAnexosOficiales(area, tipo, categoria, folio, revision, documento).subscribe((data: any) => {
  //   this.router.navigate(['/anexos-oficiales-imagen', data]);
  //   console.log(data);
  // })