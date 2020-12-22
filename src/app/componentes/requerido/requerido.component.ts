import { Component, OnInit } from '@angular/core';
import { Requerido } from '../../interfaces/Requerido';
import { RequeridoService } from './requerido.service';

@Component({
  selector: 'app-requerido',
  templateUrl: './requerido.component.html',
  styleUrls: ['./requerido.component.css']
})
export class RequeridoComponent implements OnInit {

  requerido: Requerido[];

  constructor(private requeridoService: RequeridoService) { }

  ngOnInit(): void {
    this.requeridoService.getRequerido().subscribe((data: any) => {
      this.requerido = data;
      console.log(data);
    })
  }

}
