import { Component, OnInit } from '@angular/core';
import { AdquisicionesService } from './adquisiciones.service';
import { Contrato } from '../../interfaces/Contrato';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adquisiciones',
  templateUrl: './adquisiciones.component.html',
  styleUrls: ['./adquisiciones.component.css']
})
export class AdquisicionesComponent implements OnInit {

  contratos: Contrato[];
  contratos2: Contrato[];
  valor: string;
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(private adquisicionesService: AdquisicionesService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      var numero = params['numero'];
      console.log(numero);
      this.getContratos(numero);
    });
    this.getValorDelMonto(this.contratos,this.contratos);
  }

  getContratos(numero){
    this.adquisicionesService.getContratos(numero).subscribe((data: any) => {
      this.contratos = data;
      console.log(data);
    })
  }

  getValorDelMonto(tipo,categoria){
    this.adquisicionesService.getValorDelMonto(tipo,categoria).subscribe((data: any) => {
      this.valor = data;
      console.log(data);
    })
  }

  llamarContrato(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
    //primero se setea el contrato que se seleccionó
    localStorage.setItem('contrato1', JSON.stringify(data));
    this.router.navigate(['documentos', data]);
    console.log(data);
    })
  }
}
