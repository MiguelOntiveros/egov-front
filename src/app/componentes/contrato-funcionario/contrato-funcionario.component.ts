import { Component, OnInit } from '@angular/core';
import { ContratoFuncionario } from '../../interfaces/ContratoFuncionario';
import { ContratoFuncionarioService } from './contrato-funcionario.service';

@Component({
  selector: 'app-contrato-funcionario',
  templateUrl: './contrato-funcionario.component.html',
  styleUrls: ['./contrato-funcionario.component.css']
})
export class ContratoFuncionarioComponent implements OnInit {

  contratosFuncionario: ContratoFuncionario;

  constructor(private contratoFuncionarioService: ContratoFuncionarioService) { }

  ngOnInit(): void {
    this.contratoFuncionarioService.getContratoFuncionario().subscribe((data: any) => {
      this.contratosFuncionario = data;
      console.log(data);
    })
  }

}
