import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InicioService } from '../inicio/inicio.service';
import { SeguimientoService } from './seguimiento.service';
import { ContratoSeguimientoCorreo } from '../../interfaces/ContratoSeguimientoCorreo';
import { Seguimiento } from '../../interfaces/Seguimiento';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {

  // contratoAlmacenado = null;

  listaOpcion: [];

  responsable: [];
  fecha: [];
  hora: [];
  observaciones: [];
  
  informacionSeguimiento: Seguimiento[];

  id: number;
  ids;


  responsableTexto: string;

  constructor(
    private inicio: InicioService,
    private activateRoute: ActivatedRoute, 
    private seguimientoService: SeguimientoService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // se obtienen y se muestran en consola los parametros necesarios para hacer funcionar los servicios
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
      // this.getObservaciones(area, tipo, categoria, folio, revision);
      // this.getFecha(area, tipo, categoria, folio, revision);
      // this.getHora(area,tipo,categoria,folio,revision);
      
      this.spinner.show();

      this.getResponsable(area, tipo, categoria, folio, revision);
      this.getInformacionSeguimiento(area, tipo, categoria, folio, revision);
      this.getImagenesSeguimiento(area, tipo, categoria, folio, revision);
      this.responsableTexto = 'Responsable:';
      this.spinner.hide();
      
    });
  
  }

  // getObservaciones(area, tipo, categoria, folio, revision) {
  //   this.inicio.getObservaciones(area, tipo, categoria, folio, revision).subscribe((data: any) => {
  //     this.observaciones = data;
      
  //   });
  // }

  // FUNCION PARA OBTENER LOS NOMBRES DE LOS RESPONSABLES
  getResponsable(area, tipo, categoria, folio, revision){
    this.seguimientoService.getResponsable(area, tipo, categoria, folio, revision).subscribe((data: any) =>{
      // ESTE METODO ES PARA CONVERTIR EL OBJETO JSON A UN ARRAY JSON {} => []
      data = Object.keys(data).map(e => data[e]);
      console.log(data);
      this.responsable = data;
    });
  }

  // getFecha(area, tipo, categoria, folio, revision){
  //   this.seguimientoService.getFecha(area, tipo, categoria, folio, revision).subscribe((data: any) => {
  //     // ESTE METODO ES PARA CONVERTIR EL OBJETO JSON A UN ARRAY JSON {} => []
  //     data = Object.keys(data).map(e => data[e]);
  //     console.log(data);
  //     this.fecha = data;
  //   });
  // }

  // getHora(area, tipo, categoria, folio, revision){
  //   this.seguimientoService.getHora(area, tipo, categoria, folio, revision).subscribe((data: any) =>{
  //   // ESTE METODO ES PARA CONVERTIR EL OBJETO JSON A UN ARRAY JSON {} => []
  //   data = Object.keys(data).map(e => data[e]);
  //   console.log(data);
  //   this.hora = data;
  //   });
  // }

  // getObservaciones(area, tipo, categoria, folio, revision){
  //   this.seguimientoService.getObservaciones(area, tipo, categoria, folio, revision).subscribe((data: any) => {
  //     data = Object.keys(data).map(e => data[e]);
  //     console.log(data);
  //     this.observaciones = data;
  //   })
  // }

  // FUNCION PARA OBTENER LOS DATOS DEL SEGUIMIENTO, COMO POR EJEMPLO, LA HORA, LA FECHA, LAS OBSERVACIONES.
  getInformacionSeguimiento(area, tipo, categoria, folio, revision){
    this.seguimientoService.getInformacionSeguimiento(area, tipo, categoria, folio, revision).subscribe((data: any) => {

      this.informacionSeguimiento = data;
      console.log(data);
      
    })
  }
  
  // FUNCION PARA OBTENER LAS IMAGENES DEL SEGUIMIENTO
  getImagenesSeguimiento(area, tipo, categoria, folio, revision){
    this.seguimientoService.getImagenesSeguimiento(area, tipo, categoria, folio, revision).subscribe((data: any) => {

      this.ids = data;
      console.log(data);
    })
  }




  // getHora(area, tipo, categoria, folio, revision){
  //   this.seguimientoService.getFecha(area,tipo,categoria,folio,revision).subscribe((data: any))
  // }  


  // EJEMPLO FUNCIONANDO EN LA VISTA / EL COMPONENTE
  // getPrueba(area,tipo,categoria,folio,revision){
  //   this.seguimientoService.getPrueba(area,tipo,categoria,folio,revision).subscribe((data: any) => {
  //   this.listaOpcion = data;
  //     console.log(data);

  //   })
  // }

  // getHora(area,tipo,categoria,folio,revision){
  //   this.seguimientoService.getHora(area,tipo,categoria,folio,revision).subscribe((data: any) =>{
  //   this.hora = data;
  //   console.log(this.hora);
  //   })
  // }








  // obtiene el storage llamado contrato
  // var contratoOriginal = localStorage.getItem('contrato1');
  
  // this.contratoAlmacenado = JSON.parse(contratoOriginal);

  // const area = this.contratoAlmacenado['area'];
  // const tipo = this.contratoAlmacenado['tipo'];
  // const categoria = this.contratoAlmacenado['categoria'];
  // const folio = this.contratoAlmacenado['folio'];
  // const revision = this.contratoAlmacenado['revision'];
  // console.log(this.contratoAlmacenado);
  // this.getObservaciones(area, tipo, categoria, folio, revision);

}
