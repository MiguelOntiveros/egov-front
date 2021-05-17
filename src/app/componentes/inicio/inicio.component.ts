import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contratista } from '../../interfaces/Contratista';
import { InicioService } from './inicio.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textoBuscar = '';
  textoBuscar2 = '';

  @Input('infoContratista') infoContratista: any;
  @Input('infoContratista2') infoContratista2: any;

  mensajeError: string;
  
  contratistas: Contratista[];
  contratistas2: Contratista[];

  inputActive = false;

  tituloCliente: string = 'valle hermoso';
  mostrarMenu = false;

  usuario = { rol: 'Administrador', correo: 'admin@hotmail.com' };

  menuOpciones = [
    {
      nombre: 'Inicio',
      icono: 'fa fa-home',
      ruta: '/inicio'
    },
    {
      nombre: 'Acerca de...',
      icono: 'fa fa-lightbulb-o',
      ruta: '/acerca-de'
    },
    {
      nombre: 'Terminos de Uso',
      icono: 'fa fa-question-circle',
      ruta: '/terminos'
    }
  ];

  cerrarSesion = {
    nombre: 'Cerrar Sesión',
    icono: 'fa fa-sign-out',
    ruta: '/login'
  }

  logo1Celular = 'assets/imagenes/ValleHermoso/logo_centro_1_celular.png';
  logo2Celular = 'assets/imagenes/ValleHermoso/logo_centro_2_celular.png';
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  constructor(
    private inicioService: InicioService, 
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  buscarContratistas(event) {
    // SE OBTIENE EL VALOR DEL TEXTO AGREGADO EN EL INPUT DE BUSQUEDA GENERAL
    const texto = event.target.value;
    this.textoBuscar = texto;

    // CASO ESPECIAL PARA CONTRATISTA M&M
      if(this.textoBuscar.length > 1 && this.textoBuscar === 'm&' || this.textoBuscar.length > 1 && this.textoBuscar === 'm&m' ){
        // || this.textoBuscar.length > 1 && this.textoBuscar === 'm&m'
        console.log('Servicio3 M&M');
        // this.contratistas = [];
        this.infoContratista = this.inicioService.getContratistas('m%26m').subscribe((data: any) => {
          this.contratistas = data;
          console.log('Servicio3 M&M');
          console.log(data);
        })
    }
    
    // EN CASO DE QUE EL INPUT ESTE VACIO, SE MUESTREN LAS IMAGENES

    if(this.textoBuscar.length === 0 || this.textoBuscar === ''){
      this.contratistas = [];
      this.logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
      this.logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';
  }

  if(this.textoBuscar.length >= 2 && this.textoBuscar !== 'm&'){
    if(this.textoBuscar.length >= 2 && this.textoBuscar !== 'm&m'){
      // || this.textoBuscar.length >= 2 && this.textoBuscar !== 'm&m'
    console.log('Servicio2');

    this.infoContratista = this.inicioService.getContratistas2(this.textoBuscar).subscribe((data: any) => {

      this.contratistas = data;

      if (this.contratistas.length <= 0) {

        // ERRROR CON MENSAJE DE ERROR, ARRAY SIN RESULTADOS
        this.mensajeError = 'No se encontraron resultados';
        // SE MUESTRAN LOS LOGOS
        this.logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
        this.logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';
        console.log(this.contratistas);

      } else if (this.contratistas.length > 0) {
        //  RESULTADO CON VALORES, ARRAY CON RESULTADOS
        this.contratistas = data;
        this.mensajeError = '';
        // SE OCULTAN LOS LOGOS
        this.logo1Pc = '';
        this.logo2Pc = '';
        console.log(this.contratistas);
      }
    });

    }

  }else if(this.textoBuscar.length === 1 && this.textoBuscar !== 'm&'){
    
    if(this.textoBuscar.length === 1 && this.textoBuscar !== 'm&m'){
      // || this.textoBuscar.length === 1 && this.textoBuscar !== 'm&m'
    console.log('Servicio1');

    this.infoContratista = this.inicioService.getContratistas(this.textoBuscar)
    .subscribe((data: any) => {

      this.contratistas = data;
      //console.log(data);

      if (this.contratistas.length <= 0) {

        // ERRROR CON MENSAJE DE ERROR, ARRAY SIN RESULTADOS
        this.mensajeError = 'No se encontraron resultados';
        // SE MUESTRAN LOS LOGOS
        this.logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
        this.logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';
        console.log(this.contratistas);

      } else if (this.contratistas.length > 0) {
        //  RESULTADO CON VALORES, ARRAY CON RESULTADOS
        this.contratistas = data;
        this.mensajeError = '';
        // SE OCULTAN LOS LOGOS
        this.logo1Pc = '';
        this.logo2Pc = '';
        console.log(this.contratistas);
      } 
    });

    }
  }

  }

  // buscarContratistas2(event){
  //   const texto2 = event.target.value;
  //   this.textoBuscar2 = texto2;

  //   this.infoContratista2 = this.inicioService.getContratistas2(this.textoBuscar2.toUpperCase()).subscribe((data: any) => {

  //   console.log('Servicio2');
  //   console.log(data);

  //   this.contratistas2 = data;

  //   })

  // }

  enrutarObrasPublicasGenerales(){
    this.router.navigate(['./obras-generales']);
  }

  enrutarAdquisicionesGenerales(){
    this.router.navigate(['./adquisiciones-generales']);
  }

  enrutarPatrimoniosGenerales(){
    this.router.navigate(['./patrimonios-generales']);
  }

  enviarnumero(id) {
    this.inicioService.getContratista(id).subscribe((data: any) => {
      this.contratistas = data;
      // primero se setea el contratista que se seleccionó
      localStorage.setItem('contratista', JSON.stringify(data));
    });
  }

  abrirMenu(){
    console.log('Menu abierto');
    this.mostrarMenu = true;
  }

  cerrarMenu(){
    this.mostrarMenu = false;
  }

  abrirFiltros(){
    console.log('Filtros abiertos');
    this.router.navigate(['./filtros']);
  }

  irinicio(){
    this.router.navigate(['/inicio']);
  }

}
