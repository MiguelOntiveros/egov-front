import { Component, OnInit } from '@angular/core';
import { ContratoSeguimientoBitacora } from '../../interfaces/ContratoSeguimientoBitacora';
import { ContratoSeguimientoBitacoraService } from './contrato-seguimiento-bitacora.service';

@Component({
  selector: 'app-contrato-seguimiento-bitacora',
  templateUrl: './contrato-seguimiento-bitacora.component.html',
  styleUrls: ['./contrato-seguimiento-bitacora.component.css']
})
export class ContratoSeguimientoBitacoraComponent implements OnInit {

  contratosSeguimientoBitacora: ContratoSeguimientoBitacora[];

  constructor(private contratoSeguimientoBitacoraService: ContratoSeguimientoBitacoraService) { }

  ngOnInit(): void {
    this.contratoSeguimientoBitacoraService.getContratoSeguimientoBitacora()
    .subscribe((data: any) => {
      this.contratosSeguimientoBitacora = data;
      console.log(data);
    })
  }

}
