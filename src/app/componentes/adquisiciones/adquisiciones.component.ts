import { Component, OnInit } from '@angular/core';
import { AdquisicionesService } from './adquisiciones.service';
import { Contrato } from '../../interfaces/Contrato';
import { ContratoGeneral } from '../../interfaces/ContratoGeneral';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adquisiciones',
  templateUrl: './adquisiciones.component.html',
  styleUrls: ['./adquisiciones.component.css']
})
export class AdquisicionesComponent implements OnInit {

  contratos: Contrato[];
  contratos2: Contrato[];
  general: ContratoGeneral[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(private adquisicionesService: AdquisicionesService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      var numero = params['numero'];
      //console.log(numero);
      this.getContratos(numero);
    });
  }

  getContratos(numero){
    this.adquisicionesService.getContratos(numero).subscribe((data: any) => {
      this.contratos = data;
      this.contratos.forEach(contrato => {      
       this.adquisicionesService.getValorDelMonto(this.contratos[0].tipo, this.contratos[0].categoria).subscribe((data2: any) => {
        this.contratos[0].valor= data2
         console.log(this.contratos[0].valor);
       }); 
      })
    })
  }

  getValorDelMonto(tipo,categoria){
    this.adquisicionesService.getValorDelMonto(tipo,categoria).subscribe((data: any) => {
      this.general = data;
      this.general.forEach(contrato => {      
        this.adquisicionesService.getValorDelMonto(contrato.tipo[0], contrato.categoria[0]).subscribe((data2: any) => {
         contrato.valor= data2
          // console.log(contrato.valor);
        }); 
       })
    })
  }

     //console.log(this.contratos[0].tipo);
      //console.log(data);
  getDescripcionDelContrato(tipo,categoria){
    this.adquisicionesService.getDescripcionDelContrato(tipo,categoria).subscribe((data: any) => {
      this.general = data;
      //console.log(data);
    })
  }

  llamarContrato(id) {
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
    //primero se setea el contrato que se seleccionó
    localStorage.setItem('contrato1', JSON.stringify(data));
    this.router.navigate(['documentos', data]);
   // console.log(data);
    })
  }
}
