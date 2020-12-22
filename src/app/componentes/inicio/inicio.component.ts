import { Component, OnInit } from '@angular/core';
import { Contratista } from '../../interfaces/Contratista';
// import { ContratistaServiceService } from '../../services/contratista-service.service';
import { InicioService } from './inicio.service';
import { TipoBusqueda } from '../../interfaces/tipoBusqueda';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tipoBusqueda: TipoBusqueda[];
  contratistas: Contratista[];
  search;

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
      nombre: 'Configuraciones',
      icono: 'fa fa-cog',
      ruta: '/configuraciones'
    },
    {
      nombre: 'Acerca de...',
      icono: 'fa fa-lightbulb-o',
      ruta: '/acerca-de'
    },
    {
      nombre: 'Sugerencias',
      icono: 'fa fa-exclamation-circle',
      ruta: '/sugerencias'
    },
    {
      nombre: 'Terminos de Uso',
      icono: 'fa fa-question-circle',
      ruta: '/terminos'
    },
    {
      nombre: 'Cerrar Sesión',
      icono: 'fa fa-sign-out',
      ruta: '/login'
    },
    // {
    //   nombre: 'Tablas',
    //   icono: 'fa fa-table',
    //   ruta: '/tablas'
    // }
    // {
    //   nombre: 'Lista-Documentos',
    //   icono: 'fa fa-list',
    //   ruta: '/lista-documentos'
    // }
  ];

  logo1Celular = 'assets/imagenes/ValleHermoso/logo_centro_1_celular.png';
  logo2Celular = 'assets/imagenes/ValleHermoso/logo_centro_2_celular.png';
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  constructor(private inicioService: InicioService, private router: Router) { }

  ngOnInit(): void {
    // this.ContratistaService.getContratista().subscribe((Temp)=>{
    //   this.contratistas = Temp;
    // })
    this.inicioService.getTipoBusquedas().subscribe((data: any) => {
      this.tipoBusqueda = data;
    })
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
    this.router.navigate(['/filtros']);
  }

}