import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from '../../interfaces/Contratista';
import { Router } from '@angular/router';
import { PatrimoniosService } from '../patrimonios/patrimonios.service';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-patrimonios-generales',
  templateUrl: './patrimonios-generales.component.html',
  styleUrls: ['./patrimonios-generales.component.css']
})
export class PatrimoniosGeneralesComponent implements OnInit {

  contratos: Contrato[];
  contratista : Contratista[];
  search;

  tituloCliente: string = 'valle hermoso';
  mostrarMenu = false;
  inputActive = false;
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'
  constructor(private inicioService: InicioService,private patrimoniosService: PatrimoniosService, private router: Router) { }

  ngOnInit(): void {
    this.inicioService.getPatrimonios().subscribe((data: any) => {
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

  irinicio(){
    this.router.navigate(['/inicio']);
  }

}
