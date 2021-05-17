import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contratos-y-anexos-imagen',
  templateUrl: './contratos-y-anexos-imagen.component.html',
  styleUrls: ['./contratos-y-anexos-imagen.component.css']
})
export class ContratosYAnexosImagenComponent implements OnInit {

  ids;
  mensaje: string;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private inicioService: InicioService,
    private spinner: NgxSpinnerService
  ) { 
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
    });

    let getItemStorage = localStorage.getItem('contrato2');

    if( getItemStorage === '[]' ){

      this.spinner.show();
        
      
      this.mensaje = 'No hay imagenes en esta categoría';
      console.log('No hay imagenes en esta categoría');
      localStorage.removeItem('contrato2');

      this.spinner.hide();

    } else if( getItemStorage !== '[]' ){
    
      this.spinner.show();
        
      let obtenerIds = JSON.parse(getItemStorage);
      
      console.log(obtenerIds);
      
      this.ids = obtenerIds;
      
      localStorage.removeItem('contrato2');
      
      this.spinner.hide();

    }

  }

  regresarAtras(){
    this.location.back();
  }

  irArriba(){
    window.scrollTo(0, 0);
  }

}
