import { Component, OnInit } from '@angular/core';
import { ContratoCanceladoService } from './contrato-cancelado.service';
import { ContratoCancelado } from '../../interfaces/ContratoCancelado';

@Component({
  selector: 'app-contrato-cancelado',
  templateUrl: './contrato-cancelado.component.html',
  styleUrls: ['./contrato-cancelado.component.css']
})
export class ContratoCanceladoComponent implements OnInit {

  contratosCancelado: ContratoCancelado[];

  constructor(private contratoCanceladoService: ContratoCanceladoService) { }

  ngOnInit(): void {
    this.contratoCanceladoService.getContratoCancelado().subscribe((data: any) => {
      this.contratosCancelado = data;
      console.log(data);
    })
  }

}
