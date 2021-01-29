import { Component, OnInit } from '@angular/core';
import { AdquisicionesService } from './adquisiciones.service';
import { Contrato } from '../../interfaces/Contrato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adquisiciones',
  templateUrl: './adquisiciones.component.html',
  styleUrls: ['./adquisiciones.component.css']
})
export class AdquisicionesComponent implements OnInit {

  contratos: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(private adquisicionesService: AdquisicionesService, private router: Router) { }

  ngOnInit(): void {
    var datos = localStorage.getItem('contratos');
    this.contratos = JSON.parse(datos);
    const numero = this.contratos['numero'];
  }

  getContratos(numero){
    this.adquisicionesService.getContratos(numero).subscribe((data: any) => {
      this.contratos = data;
      console.log(data);
    })
  }

  llamarContrato(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
     
      localStorage.setItem('contrato', JSON.stringify(data));
    
      this.router.navigate(['documentos', data.categoria]);
      console.log(data);
      console.log(data.categoria);
    })
  }
}
