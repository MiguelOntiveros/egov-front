import { Component, OnInit } from '@angular/core';
import { ContratoColaborador } from '../../interfaces/ContratoColaborador';
import { ContratoColaboradorService } from './contrato-colaborador.service';

@Component({
  selector: 'app-contrato-colaborador',
  templateUrl: './contrato-colaborador.component.html',
  styleUrls: ['./contrato-colaborador.component.css']
})
export class ContratoColaboradorComponent implements OnInit {

  contratosColaborador: ContratoColaborador[];
    
  constructor(private contratoColaboradorService: ContratoColaboradorService) { }

  ngOnInit(): void {
  this.contratoColaboradorService.getContratoColaborador().subscribe((data: any) => {
    this.contratosColaborador = data;
    console.log(data);
  })
  }

}
