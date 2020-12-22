import { Component, OnInit } from '@angular/core';
import { ContratoFirma } from '../../interfaces/ContratoFirma';
import { ContratoFirmaService } from './contrato-firma.service';

@Component({
  selector: 'app-contrato-firma',
  templateUrl: './contrato-firma.component.html',
  styleUrls: ['./contrato-firma.component.css']
})
export class ContratoFirmaComponent implements OnInit {

  contratosFirma: ContratoFirma[];

  constructor(private contratoFirmaService: ContratoFirmaService) { }

  ngOnInit(): void {
    this.contratoFirmaService.getContratoFirma().subscribe((data: any) => {
      this.contratosFirma = data;
      console.log(data);
    })
  }

}
