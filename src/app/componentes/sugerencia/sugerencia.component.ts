import { Component, OnInit } from '@angular/core';
import { Sugerencia } from '../../interfaces/Sugerencia';
import { SugerenciaService } from './sugerencia.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {

  sugerencia: Sugerencia[];

  constructor(private sugerenciaService: SugerenciaService) { }

  ngOnInit(): void {
    this.sugerenciaService.getSugerencia().subscribe((data: any) => {
      this.sugerencia = data;
      console.log(data);
    })

  }
}
