import { Component, OnInit } from '@angular/core';
import { ContratoReferencia } from '../../interfaces/ContratoReferencias';
import { ContratoReferenciaService } from './contrato-referencia.service';

@Component({
  selector: 'app-contrato-referencia',
  templateUrl: './contrato-referencia.component.html',
  styleUrls: ['./contrato-referencia.component.css']
})
export class ContratoReferenciaComponent implements OnInit {

  contratosReferencia: ContratoReferencia[];

  constructor(private contratoReferenciaService: ContratoReferenciaService) { }

  ngOnInit(): void {
    this.contratoReferenciaService.getContratoReferencias().subscribe((data: any) => {
      this.contratosReferencia = data;
      console.log(data);
    })
  }

}
