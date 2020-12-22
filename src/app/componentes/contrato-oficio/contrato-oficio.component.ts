import { Component, OnInit } from '@angular/core';
import { ContratoOficio } from '../../interfaces/ContratoOficio';
import { ContratoOficioService } from './contrato-oficio.service';

@Component({
  selector: 'app-contrato-oficio',
  templateUrl: './contrato-oficio.component.html',
  styleUrls: ['./contrato-oficio.component.css']
})
export class ContratoOficioComponent implements OnInit {

  contratosOficio: ContratoOficio[];

  constructor(private contratoOficioService: ContratoOficioService) { }

  ngOnInit(): void {
    this.contratoOficioService.getContratoOficio().subscribe((data: any) => {
      this.contratosOficio = data;
      console.log(data);
    })
  }

}
