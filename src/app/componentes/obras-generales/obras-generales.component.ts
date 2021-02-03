import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from '../../interfaces/Contratista';
import { ActivatedRoute, Router } from '@angular/router';
import { ObrasService } from '../obras/obras.service';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-obras-generales',
  templateUrl: './obras-generales.component.html',
  styleUrls: ['./obras-generales.component.css']
})
export class ObrasGeneralesComponent implements OnInit {

  contratos: Contrato[];
  contratista : Contratista[];
  search;

  tituloCliente: string = 'valle hermoso';
  mostrarMenu = false;
  inputActive = false;
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private inicioService: InicioService, private obrasService: ObrasService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.inicioService.getObrasPublicas().subscribe((data: any) => {
      this.contratista = data;
    })
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
