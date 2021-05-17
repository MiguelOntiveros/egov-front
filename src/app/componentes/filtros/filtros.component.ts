import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location, DatePipe } from '@angular/common';
import { FiltrosService } from './filtros.service';
import { Contrato } from '../../interfaces/Contrato';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  filtrosForm: FormGroup;

  contrato: Contrato[];

  mensajeError: string = '';

  // VARIABLES DE ORDEN
  ordenValor: string;
  orden: boolean = false;

  // RANGOS DE MONTOS
  menorMayor;
  mayorMenor;

  // SOCIOS Y REPRESENTANTES DE LOS CONTRATOS
  socios: string;
  representante: string;

  // ESTAS VARIABLES SE UTILIZAN PARA MANIPULAR LAS FECHAS, CAMBIARLSE EL FORMATO Y VALIDAR SU RESULTADO
  fechaConvertidaInicio: any;
  fechaConvertidaFin: any;

  // MENSAJE EN CASO DE QUE ALGUNA FECHA SEA INTRODUCIDA PERO LA OTRA NO
  mensajeFecha: any;

  verMasInformacion: boolean;
  verMenosInformacion: boolean;
  opcionMensaje: string = 'Ver mas información';

  ordenOpciones = ['De menor a mayor', 'De mayor a menor'];
  isSubmitted = false;

  listaResultadoTitulo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private filtrosService: FiltrosService,
    private spinner: NgxSpinnerService
    ) {
      this.filtrosForm = this.fb.group({
        // ctas: [false],
        tr: [false],
        // ctos: [false]
        so: [false],
        rep: [false],
        td: [false], 
        des: [false],
        cat: [false],
        // prov: [true],
        campo: [''],
        fechaInicio: [],
        fechaFin: [],
        montoMinimo: [0],
        montoMaximo: [0],
        orden: [this.orden]
        });
   }

  ngOnInit(): void {
    
    // this.llamarContratoId('A1', 'CO', 'OP', 10, 1);

  }

  cambiarOrdenMenor(){

  if(this.orden === false){
    this.orden = true;
    console.log(this.orden);
    console.log('Orden de menor a mayor');
  }
  }

  cambiarOrdenMayor(){

  if(this.orden === true){
    this.orden = false;
    console.log(this.orden);
    console.log('Orden de mayor a menor');
  }

  }

//   verOrden1(){
//     // console.log(this.menorMayor);
//   console.log('MENOR A MAYOR');
//   }

//   verOrden2(){
//     // console.log(this.mayorMenor);
//     console.log('MAYOR A MENOR');
//   }

//   usarOrdenMayorMenor(){
//     this.orden = true;

//   if(this.orden === true){
//     console.log('Mayor a menor');
//     this.ordenValor = 'Mayor a menor';
//   }
//   console.log(this.orden);
//   }

//   usarOrdenMenorMayor(){
//     this.orden = false;

//     if(this.orden === false){
//       console.log('Menor a mayor');
//       this.ordenValor = 'Menor a mayor';
//     }
//   }

// cambiarOrden(e){
//   this.getOrden.setValue(e.target.value, {
//     onlySelf: true
//   })
// }

  // get getOrden(){
  //   return this.filtrosForm.get('orden');
  // }

  activarFiltros(){
    
      // this.isSubmitted = true;
      // if(!this.filtrosForm.valid){
      //   return false;
      // }else {
      //   let prueba = JSON.stringify(this.filtrosForm.value['orden']);
      //   alert(prueba);
      //   if(this.filtrosForm.value['orden'].value === 'De menor a mayor'){
      //     console.log('XD');
      //   }else if(this.filtrosForm.value['orden'].value === 'De mayor a menor'){
      //     console.log(':V');
      //   }
      // }

    // let { fechaInicio, fechaFin, montoMinimo, montoMaximo, tr, so, ctos, rep, des, campo, cat, orden } = this.filtrosForm.value;
    let { fechaInicio, fechaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden } = this.filtrosForm.value;
    
    this.spinner.show();

  if(fechaInicio === null && fechaFin === null){
    // EN CASO DE QUE LAS DOS FECHAS SEAN NULAS

    fechaInicio = '';
    fechaFin = '';

    this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');
    
    let $servicioFiltros = this.filtrosService.getFiltrarResultados(fechaInicio, fechaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden).subscribe((data: any) => {
      this.listaResultadoTitulo = 'Lista de resultados por filtros';
      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.spinner.hide();
        this.contrato = [];
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
       this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);
      }
      // DESUSCRIPCION DEL SERVICE EN CASO DE TENER OTROS FILTROS
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000);
    });

  }else if(fechaInicio === null && fechaFin !== null || fechaInicio === '' && fechaFin !== null){
    // EN CASO DE QUE LA FECHA DE INICIO SEA NULLA, PERO LA FECHA DE FIN ESTE BIEN
    this.listaResultadoTitulo = '';
    this.mensajeError = 'La fecha de inicio no puede ser vacia, agrega una fecha';
    this.spinner.hide();
    this.contrato = [];
    
  }else if(fechaInicio !== null && fechaFin === null || fechaInicio !== null && fechaFin === ''){
    // EN CASO DE QUE LA FECHA DE INICIO ESTE BIEN, PERO LA FECHA DE FIN SEA NULLA
    this.listaResultadoTitulo = '';
    this.mensajeError = 'La fecha de fin no puede ser vacia, agrega una fecha';
    this.spinner.hide();
    this.contrato = [];
  }else if(fechaInicio === null && fechaFin === null && montoMinimo >= 0 && montoMaximo >= 0){

    // this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    // this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');

    fechaInicio = '';
    fechaFin = '';

    let $servicioFiltros = this.filtrosService.getFiltrarResultados(fechaInicio, fechaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden).subscribe((data: any) => {
      this.listaResultadoTitulo = 'Lista de resultados por filtros';
      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.spinner.hide();
        this.contrato = [];
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
      //  this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);
      }

      // DESUSCRIPCION DEL SERVICE EN CASO DE QUE TENER OTROS FILTROS 
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000)
    });

  }else if(montoMinimo === null && montoMaximo === null){
    // SI LOS DOS MONTOS ESTAN VACIOS
    // this.mensajeError = 'Los montos son vacios, ingrese algunos';
    // this.spinner.hide();

    montoMinimo = 0;
    montoMaximo = 0;

    this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');

      let $servicioFiltros = this.filtrosService.getFiltrarResultados(this.fechaConvertidaInicio, this.fechaConvertidaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden).subscribe((data: any) => {
      this.listaResultadoTitulo = 'Lista de resultados por filtros';
      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.spinner.hide();
        this.contrato = [];
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
       this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);
      }

       // DESUSCRIPCION DEL SERVICE EN CASO DE TENER OTROS FILTROS
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000);
    });
    
  }else if(montoMinimo === null && montoMaximo !== null 
        ){
    // || montoMinimo === 0 && montoMaximo >= 0 
    // CASO PARA MONTOMINIMO
    // CASO 1: SI MONTO MINIMO ES NULLO Y MONTO MAXIMO ES DIFERENTE DE NULLO
    // CASO 2: SI MONTO ES NULLO Y MONTO MAXIMO ES IGUAL O MAYOR A 0
    montoMinimo = 0;
    
    this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');

    let $servicioFiltros = this.filtrosService.getFiltrarResultados(this.fechaConvertidaInicio, this.fechaConvertidaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden).subscribe((data: any) => {
      this.listaResultadoTitulo = 'Lista de resultados por filtros';
      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.spinner.hide();
        this.contrato = [];
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
       this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);
      }

      // DESUSCRIPCION DEL SERVICE EN CASO DE TENER OTROS FILTROS
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000);
    });

  }else if(montoMinimo !== null && montoMaximo === null 
    ){
      // || montoMinimo >= 0 && montoMaximo === 0
    // CASO PARA MONTOMAXIMO
    // CASO1: SI MONTO MINIMO ES DIFERENTE DE NULL Y MONTO MAXIMO ES IGUAL A NULL
    // CASO2: SI MONTO MINIMO ES DIFERENTE DE 0 Y MONTO MAXIMO ES IGUAL A 0

    this.mensajeError = 'Rango de Monto maximo vacio, ingrese una cantidad';
    // this.spinner.hide();
    this.contrato = [];
  }else if(montoMinimo >= 0 && montoMaximo >= 0){
    // EN CASO DE QUE LOS MONTOS SEAN IGUALES O MAYOR A CERO

    this.listaResultadoTitulo = 'Lista de resultados por filtros';

    this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');

    let $servicioFiltros = this.filtrosService.getFiltrarResultados(this.fechaConvertidaInicio, this.fechaConvertidaFin, montoMinimo, montoMaximo, tr, so, td, rep, des, campo, cat, orden).subscribe((data: any) => {
      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.contrato = [];
        this.spinner.hide();
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
       this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);

      
      }

      // DESUSCRIPCION DEL SERVICE EN CASO DE QUE TENER OTROS FILTROS 
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000)
    });

  }else{
    
  // FILTROS POR DEFECTO - EN CASO DE TENER TODO CORRECTO, 
  // EL CASO ANTERIOR ES UNA AYUDA EN CASO DE ERROR

    this.fechaConvertidaInicio = new DatePipe('en-USA').transform(fechaInicio, 'yyyy/MM/dd');
    this.fechaConvertidaFin = new DatePipe('en-USA').transform(fechaFin, 'yyyy/MM/dd');

    let $servicioFiltros = this.filtrosService.getFiltrarResultados(
      this.fechaConvertidaInicio, 
      this.fechaConvertidaFin, 
      montoMinimo, 
      montoMaximo, 
      tr, so, td, rep, des, 
      campo, cat, orden ).subscribe((data: any) => {

      if(data.length <= 0){
        // EN CASO DE QUE DE NO SE ENCUENTREN RESULTADOS CON LOS FILTROS, MUESTRA MENSAJE
        this.listaResultadoTitulo = '';
        this.contrato = [];
        this.spinner.hide();
        this.mensajeError = 'No se encontraron resultados';
        console.log(data);

      }else if(data.length > 0){
       // EN CASO DE QUE SI EXISTAN RESULTADOS CON LOS FILTROS
       this.spinner.hide();
       this.listaResultadoTitulo = 'Lista de resultados por filtros';
       this.mensajeError = '';
       this.contrato = data;
       console.log(data);
      }

      // DESUSCRIPCION DEL SERVICE EN CASO DE TENER OTROS FILTROS
      setTimeout(() => {
        $servicioFiltros.unsubscribe();
      }, 2000);
    });
  }

  }

  // FUNCIONALIDAD PARA BOTON QUE MUESTRA LA INFORMACIÓN DE LA VISTA PREVIA
  // - MUESTRA CIERTA INFORMACION AL HACER CLICK EN BOTÓN
  verMas(){
    this.verMasInformacion = true;
    if(this.verMasInformacion === true){
      this.opcionMensaje = 'Ver menos información';
    }
  }

  // - OCULTA CIERTA INFORMACION Y SE MUESTRA SOLO LA VISTA PREVIA DE DATOS
  verMenos(){
    this.verMasInformacion = false;
    if(this.verMasInformacion === false){
      this.opcionMensaje = 'Ver más información';
    }
  } 
  
  regresar(){
    this.location.back();
  }

  // VER LOS DOCUMENTOS DEL CONTRATO FILTRADOS
  verDocumentosContrato(){
    this.router.navigate(['/documentos']);
  }

  
  irInicio(){
    this.router.navigate(['/inicio']);
  }

  llamarContrato(){
    
  }

  llamarContratoId(area, tipo, categoria, folio, revision){
    // area, tipo, categoria, folio, revision
    // let $servicioFiltrosId
    
    // REVISAR *******PENDIENTE********

    this.filtrosService.getLlamarContratoId(area, tipo, categoria, folio, revision).subscribe((id: any) => {
      
      this.filtrosService.getLlamarContrato(id).subscribe((data: any) => {

      localStorage.setItem('idContrato', JSON.stringify(id));
      this.router.navigate(['/documentos-filtros'], id);
      console.log(id);

        console.log(data);
        localStorage.setItem('contrato3', JSON.stringify(data));
        this.router.navigate(['/documentos-filtros'], data);
      })


    });

  }
  
}



// llamarContrato(id) {
  //   this.filtrosService.llamarContrato(id).subscribe((data: any) => { 
    //     localStorage.setItem('contrato1', JSON.stringify(data));   
    //     this.router.navigate(['/documentos-filtros', data]);
    //     console.log(data);
    
    //   })
    // }

      // verResultado(){
      //   this.router.navigate(['/documentos-filtros']);
      // }