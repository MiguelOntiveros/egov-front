import { Component, Input, OnInit } from '@angular/core';
import { Contratista } from '../../interfaces/Contratista';
import { InicioService } from './inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  textoBuscar = '';
  @Input('infoContratista') infoContratista: any;
  mensajeError: string;
  contratistas: Contratista[]
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
  }

  buscarContratistas(event) {
    // SE OBTIENE EL VALOR DEL TEXTO AGREGADO EN EL INPUT DE BUSQUEDA GENERAL
    const texto = event.target.value;
    this.textoBuscar = texto;
    // EN CASO DE QUE EL INPUT ESTE VACIO, SE MUESTREN LAS IMAGENES
    this.infoContratista = this.inicioService.getContratistas(this.textoBuscar)
      .subscribe((data: any) => {
        this.contratistas = data;
        console.log(data);

        if (this.contratistas.length <= 0) {
          // ERRROR CON MENSAJE DE ERROR, ARRAY SIN RESULTADOS
          this.mensajeError = 'No se encontraron resultados';
          // SE MUESTRAN LOS LOGOS
          this.logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
          this.logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

        } else if (this.contratistas.length > 0) {
          //  RESULTADO CON VALORES, ARRAY CON RESULTADOS
          this.contratistas = data;
          this.mensajeError = '';
          // SE OCULTAN LOS LOGOS
          this.logo1Pc = '';
          this.logo2Pc = '';
        }
        if (this.textoBuscar === '') {
          this.logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
          this.logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';
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
