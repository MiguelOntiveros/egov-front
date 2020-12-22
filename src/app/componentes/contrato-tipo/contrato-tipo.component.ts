import { Component, OnInit } from '@angular/core';
import { ContratoTipo } from '../../interfaces/ContratoTipo';
import { ContratoTipoService } from './contrato-tipo.service';

@Component({
  selector: 'app-contrato-tipo',
  templateUrl: './contrato-tipo.component.html',
  styleUrls: ['./contrato-tipo.component.css']
})
export class ContratoTipoComponent implements OnInit {

  contratosTipo: ContratoTipo[];

  constructor(private contratoTipoService: ContratoTipoService) { }

  ngOnInit(): void {
    this.contratoTipoService.getContratoTipo().subscribe((data: any) => {
      this.contratosTipo = data;
      console.log(data);
    })
  }

}
