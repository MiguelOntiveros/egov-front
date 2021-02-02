import { Component, OnInit } from '@angular/core';
import { Contratista } from '../../interfaces/Contratista';
import { InicioService } from './inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contratista: Contratista[];
  search;
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
    this.inicioService.getContratistas().subscribe((data: any) => {
      this.contratista = data;
    })
  }

  enviarnumero(id) {
    this.inicioService.getContratista(id).subscribe((data: any) => {
      this.contratista = data;
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
    this.router.navigate(['/filtros']);
  }

}
