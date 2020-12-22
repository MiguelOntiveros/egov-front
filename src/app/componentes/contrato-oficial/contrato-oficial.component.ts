import { Component, OnInit } from '@angular/core';
import { ContratoOficial } from '../../interfaces/ContratoOficial';
import { ContratoOficialService } from './contrato-oficial.service';

@Component({
  selector: 'app-contrato-oficial',
  templateUrl: './contrato-oficial.component.html',
  styleUrls: ['./contrato-oficial.component.css']
})
export class ContratoOficialComponent implements OnInit {

  contratosOficial: ContratoOficial[];

  constructor(private contratoOficialService: ContratoOficialService) { }

  ngOnInit(): void {
    this.contratoOficialService.getContratoOficial().subscribe((data: any) => {
      this.contratosOficial = data;
      console.log(data);
    })
  }

}
