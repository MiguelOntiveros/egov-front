import { Component, OnInit } from '@angular/core';
import { ContratoSeguimientoCorreo } from '../../interfaces/ContratoSeguimientoCorreo';
import { ContratoSeguimientoCorreoService } from './contrato-seguimiento-correo.service';

@Component({
  selector: 'app-contrato-seguimiento-correo',
  templateUrl: './contrato-seguimiento-correo.component.html',
  styleUrls: ['./contrato-seguimiento-correo.component.css']
})
export class ContratoSeguimientoCorreoComponent implements OnInit {

  contratosSeguimientoCorreo: ContratoSeguimientoCorreo[];

  constructor(private contratoSeguimientoCorreoService: ContratoSeguimientoCorreoService) { }

  ngOnInit(): void {
    this.contratoSeguimientoCorreoService.getContratoSeguimientoCorreo()
    .subscribe((data: any) => {
      this.contratosSeguimientoCorreo = data;
      console.log(data);
    })

  }

}
