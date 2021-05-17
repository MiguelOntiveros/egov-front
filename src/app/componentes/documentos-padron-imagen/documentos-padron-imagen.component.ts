import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { InicioService } from '../inicio/inicio.service';
import { Location } from '@angular/common';
import { DocumentosPadronListaService } from '../documentos-padron-lista/documentos-padron-lista.service';

@Component({
  selector: 'app-documentos-padron-imagen',
  templateUrl: './documentos-padron-imagen.component.html',
  styleUrls: ['./documentos-padron-imagen.component.css']
})
export class DocumentosPadronImagenComponent implements OnInit {

  contrato = null;
  documento: string;
  ids: number;

  mensaje: string;

  public state: string = 'inactive';

  constructor(
    private inicio: InicioService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private spinner: NgxSpinnerService,
    private listaDocumentosPadronService: DocumentosPadronListaService
    ) { }

    ngOnInit(): void {
  
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
