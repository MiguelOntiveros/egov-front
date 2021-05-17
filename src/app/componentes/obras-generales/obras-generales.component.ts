import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ObrasService } from '../obras/obras.service';
import { InicioService } from '../inicio/inicio.service';
import { Contratista } from 'src/app/interfaces/Contratista';
import { Contrato } from '../../interfaces/Contrato';

@Component({
  selector: 'app-obras-generales',
  templateUrl: './obras-generales.component.html',
  styleUrls: ['./obras-generales.component.css']
})
export class ObrasGeneralesComponent implements OnInit {

  textoBuscar = '';
  @Input('infoContratista') infoContratista: any;
  mensajeError: string;
  contratos: Contrato[];
  contratistas : Contratista[];
  search;

  mostrarMenu = false;
  inputActive = false;

  logoCentro: string = 'assets/imagenes/main/obras.png';

  // MENU opciones
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
  ];


  constructor(private inicioService: InicioService, private obrasService: ObrasService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  buscarContratistas(event) {
    // SE OBTIENE EL VALOR DEL TEXTO AGREGADO EN EL INPUT DE BUSQUEDA GENERAL
    const texto = event.target.value;
    this.textoBuscar = texto;
    // EN CASO DE QUE EL INPUT ESTE VACIO, SE MUESTREN LAS IMAGENES
    this.infoContratista = this.inicioService.getObrasPublicas(this.textoBuscar)
      .subscribe((data: any) => {
        this.contratistas = data;
        console.log(data);

        if (this.contratistas.length <= 0) {
          // ERROR CON MENSAJE, ARRAY SIN RESULTADOS
          this.mensajeError = 'No se encontraron resultados';
          // SE MUESTRAN LOS LOGOS
          this.logoCentro = 'assets/imagenes/main/obras.png';

        } else if (this.contratistas.length > 0) {
          //  RESULTADO CON VALORES, ARRAY CON RESULTADOS
          this.contratistas = data;
          this.mensajeError = '';
          // SE OCULTAN LOS LOGOS
          this.logoCentro = '';
        }
        if (this.textoBuscar === '') {
          this.logoCentro = 'assets/imagenes/main/obras.png';
        }
      });
  }

  enrutarObrasPublicasGenerales(){
    this.router.navigate(['obras-generales']);
  }

  enrutarAdquisicionesGenerales(){
    this.router.navigate(['adquisiciones-generales']);
  }

  enrutarPatrimoniosGenerales(){
    this.router.navigate(['patrimonios-generales']);
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
    this.router.navigate(['/filtros']);
  }

  irinicio(){
    this.router.navigate(['/inicio']);
  }

}
