import { Component, OnInit } from '@angular/core';
import { ContratistaSuspendido } from '../../interfaces/ContratistaSuspendido';
import { ContratistaSuspendidoService } from './contratista-suspendido.service';

@Component({
  selector: 'app-contratista-suspendido',
  templateUrl: './contratista-suspendido.component.html',
  styleUrls: ['./contratista-suspendido.component.css']
})
export class ContratistaSuspendidoComponent implements OnInit {

  contratistasSuspendido: ContratistaSuspendido[];

  constructor(private contratistaSuspendidoService: ContratistaSuspendidoService) { }

  ngOnInit(): void {
    this.contratistaSuspendidoService.getContratistaSuspendido().subscribe((data: any) => {
      this.contratistasSuspendido = data;
      console.log(data);
    })
  }

}
