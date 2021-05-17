import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { ContratosYAnexosListaService } from './contratos-y-anexos-lista.service';
import { Location } from '@angular/common'; 
import { NgxSpinnerService } from 'ngx-spinner';
import { Contrato } from '../../interfaces/Contrato';
@Component({
  selector: 'app-contratos-y-anexos-lista',
  templateUrl: './contratos-y-anexos-lista.component.html',
  styleUrls: ['./contratos-y-anexos-lista.component.css']
})
export class ContratosYAnexosListaComponent implements OnInit {

  contrato: Contrato = {};

  listaOpcion = [];

  mensaje: string = '';

  id;
  id2;

  constructor(
  private location: Location,
  private router: Router,
  private listaContratosyAnexos: ContratosYAnexosListaService,
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
  console.log('Area:', area);
  console.log('Tipo:', tipo);
  console.log('Categoria:', categoria);
  console.log('Folio:', folio);
  console.log('Revision:', revision);

  this.obtenerListaOpciones(area, tipo, categoria, folio, revision);
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
  this.listaContratosyAnexos.getListaContratosAnexos(area,tipo,categoria,folio,revision).subscribe((data: any) => {

  this.spinner.show();

  if(data.length <= 0){

  this.spinner.hide();

  this.mensaje = 'Sin lista de opciones'
  console.log('No hay lista de botones para mostrar imagenes');
  console.log(data);

  }else if(data.length > 0){

  this.spinner.hide();

  this.mensaje = '';
  this.listaOpcion = data;
  console.log(data);

  }

    // console.log(area, tipo, categoria, folio, revision);
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
  
      this.listaContratosyAnexos.getIdsContratosAnexos(area, tipo, categoria, folio, revision, documento).subscribe((data: any ) => {
        localStorage.setItem('contrato2', JSON.stringify(data));
        this.router.navigate(['/contratos-y-anexos-imagen'], data);
        console.log(data);

      });
    })
    }


}
