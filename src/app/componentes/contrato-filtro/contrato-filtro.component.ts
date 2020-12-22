import { Component, OnInit } from '@angular/core';
import { ContratoFiltro } from '../../interfaces/ContratoFiltro';
import { ContratoFiltroService } from './contrato-filtro.service';

@Component({
  selector: 'app-contrato-filtro',
  templateUrl: './contrato-filtro.component.html',
  styleUrls: ['./contrato-filtro.component.css']
})
export class ContratoFiltroComponent implements OnInit {

  contratosFiltro: ContratoFiltro[];

  constructor(private contratoFiltroService: ContratoFiltroService) { }

  ngOnInit(): void {
    this.contratoFiltroService.getContratoFiltro().subscribe((data: any) => {
      this.contratosFiltro = data;
      console.log(data);
    })
  }

}
