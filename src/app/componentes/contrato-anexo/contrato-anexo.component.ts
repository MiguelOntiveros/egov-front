import { Component, OnInit } from '@angular/core';
import { ContratoAnexo } from '../../interfaces/ContratoAnexo';
import { ContratoAnexoService } from './contrato-anexo.service';

@Component({
  selector: 'app-contrato-anexo',
  templateUrl: './contrato-anexo.component.html',
  styleUrls: ['./contrato-anexo.component.css']
})
export class ContratoAnexoComponent implements OnInit {

  contratosAnexo: ContratoAnexo[];

  constructor(private contratoAnexoService: ContratoAnexoService) { }

  ngOnInit(): void {
    this.contratoAnexoService.getContratoAnexo().subscribe((data: any) => {
      this.contratosAnexo = data;
      console.log(data);
    })
  }

}
