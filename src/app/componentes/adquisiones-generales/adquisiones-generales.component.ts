import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from '../../interfaces/Contratista';
import { Router } from '@angular/router';
import { AdquisicionesService } from '../adquisiciones/adquisiciones.service';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-adquisiones-generales',
  templateUrl: './adquisiones-generales.component.html',
  styleUrls: ['./adquisiones-generales.component.css']
})
export class AdquisionesGeneralesComponent implements OnInit {

  textoBuscar = '';
  @Input('infoContratista') infoContratista: any;
  mensajeError: string;
  contratos: Contrato[];
  contratistas : Contratista[];
  search;

  tituloCliente: string = 'valle hermoso';
  mostrarMenu = false;
  inputActive = false;
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private inicioService: InicioService, private adquisicionesService: AdquisicionesService, private router: Router) { }

  ngOnInit(): void {

  }

  buscarContratistas(event) {
    // SE OBTIENE EL VALOR DEL TEXTO AGREGADO EN EL INPUT DE BUSQUEDA GENERAL
    const texto = event.target.value;
    this.textoBuscar = texto;
    // EN CASO DE QUE EL INPUT ESTE VACIO, SE MUESTREN LAS IMAGENES
    this.infoContratista = this.inicioService.getAdquisiciones(this.textoBuscar)
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
