import { Component, OnInit } from '@angular/core';
import { Estado } from '../../interfaces/Estado';
import { EstadoService } from './estado.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {

  estado: Estado[];

  constructor(private estadoService: EstadoService) { }

  ngOnInit(): void {
    this.estadoService.getEstado().subscribe((data: any) => {
      this.estado = data;
      console.log(data);
    })
  }

}
