import { Component, OnInit } from '@angular/core';
import { ContratoFuncionarioDatoService } from './contrato-funcionario-dato.service';
import { ContratoFuncionarioDato } from '../../interfaces/ContratoFuncionarioDato';

@Component({
  selector: 'app-contrato-funcionario-dato',
  templateUrl: './contrato-funcionario-dato.component.html',
  styleUrls: ['./contrato-funcionario-dato.component.css']
})
export class ContratoFuncionarioDatoComponent implements OnInit {

  contratosFuncionarioDato: ContratoFuncionarioDato[];

  constructor(private contratoFuncionarioDatoService: ContratoFuncionarioDatoService) { }

  ngOnInit(): void {
    this.contratoFuncionarioDatoService.getContratoFuncionarioDato().subscribe((data: any) => {
      this.contratosFuncionarioDato = data;
      console.log(data);
    })
  }

}
