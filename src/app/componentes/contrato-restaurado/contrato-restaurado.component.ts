import { Component, OnInit } from '@angular/core';
import { ContratoRestaurado } from '../../interfaces/ContratoRestaurado';
import { ContratoRestauradoService } from './contrato-restaurado.service';

@Component({
  selector: 'app-contrato-restaurado',
  templateUrl: './contrato-restaurado.component.html',
  styleUrls: ['./contrato-restaurado.component.css']
})
export class ContratoRestauradoComponent implements OnInit {

  contratosRestaurado: ContratoRestaurado[];

  constructor(private contratoRestauradoService: ContratoRestauradoService) { }

  ngOnInit(): void {
    this.contratoRestauradoService.getContratoRestaurado().subscribe((data: any) => {
      this.contratosRestaurado = data;
      console.log(data);
    })
  }

}
