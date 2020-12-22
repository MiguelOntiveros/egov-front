import { Component, OnInit } from '@angular/core';
import { ContratoArea } from '../../interfaces/ContratoArea';
import { ContratoAreaService } from './contrato-area.service';

@Component({
  selector: 'app-contrato-area',
  templateUrl: './contrato-area.component.html',
  styleUrls: ['./contrato-area.component.css']
})
export class ContratoAreaComponent implements OnInit {

  contratosArea: ContratoArea[];

  constructor(private contratoAreaService: ContratoAreaService) { }

  ngOnInit(): void {
    this.contratoAreaService.getContratoArea().subscribe((data: any) => {
      this.contratosArea = data;
      console.log(data);
    })
  }

}
