import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Contrato } from '../../interfaces/Contrato';
import { ContratoGeneral } from '../../interfaces/ContratoGeneral';
import { AdquisicionesService } from './adquisiciones.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-adquisiciones',
  templateUrl: './adquisiciones.component.html',
  styleUrls: ['./adquisiciones.component.css']
})
export class AdquisicionesComponent implements OnInit {

  mensaje: string;
  contratos: Contrato[];
  contratos2: Contrato[];
  general: ContratoGeneral[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(
    private adquisicionesService: AdquisicionesService, 
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      var numero = params['numero'];
      //console.log(numero);
      this.getContratos(numero);
    });
  }

  getContratos(numero){
    this.adquisicionesService.getContratos(numero).subscribe((data: any) => {
      
      this.spinner.show();

      if(data.length <= 0){

        this.mensaje = 'No se encontraron resultados';
        this.spinner.hide();

      }else if(data.length > 0){

        this.spinner.hide();
        this.contratos = data;
        this.mensaje = '';
     
      }
    })
  }

  getValorDelMonto(area,tipo,categoria,folio,revision){
    this.adquisicionesService.getValorDelMonto(area,tipo,categoria,folio,revision).subscribe((data: any) => {
      this.general = data;
    })
  }

  getDescripcionDelContrato(tipo,categoria){
    this.adquisicionesService.getDescripcionDelContrato(tipo,categoria).subscribe((data: any) => {
      this.general = data;
      //console.log(data);
    })
  }

  llamarContrato(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
    //primero se setea el contrato que se seleccionó
    // localStorage.setItem('contrato1', JSON.stringify(data));
    this.router.navigate(['documentos', data]);
   // console.log(data);
    })
  }

  abrirFiltros(){
    console.log('Filtros abiertos');
    this.router.navigate(['/filtros']);
  }
}
