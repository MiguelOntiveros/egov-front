import { Component, OnInit } from '@angular/core';
import { Patrametros } from '../../interfaces/Parametros';
import { ParametrosService } from './parametros.service';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {
  
  parametros: Patrametros[];

  constructor(private parametrosService: ParametrosService) { }

  ngOnInit(): void {
    this.parametrosService.getParametros().subscribe((data: any) => {
      this.parametros = data;
      console.log(data);
    })
  }

}
