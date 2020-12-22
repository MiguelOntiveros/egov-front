import { Component, OnInit } from '@angular/core';
import { ContratoSeguimiento } from '../../interfaces/ContratoSeguimiento';
import { ContratoSeguimientoService } from './contrato-seguimiento.service';

@Component({
  selector: 'app-contrato-seguimiento',
  templateUrl: './contrato-seguimiento.component.html',
  styleUrls: ['./contrato-seguimiento.component.css']
})
export class ContratoSeguimientoComponent implements OnInit {
  
  contratosSeguimiento: ContratoSeguimiento[];

  constructor(private contratoSeguimientoService: ContratoSeguimientoService) { }

  ngOnInit(): void {
    this.contratoSeguimientoService.getContratoSeguimiento().subscribe((data: any) => {
      this.contratosSeguimiento = data;
      console.log(data);
    })
  }

}
