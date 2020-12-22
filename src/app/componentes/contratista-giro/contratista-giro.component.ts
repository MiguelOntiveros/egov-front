import { Component, OnInit } from '@angular/core';
import { ContratistaGiro } from '../../interfaces/ContratistaGiro';
import { ContratistaGiroService } from './contratista-giro.service';

@Component({
  selector: 'app-contratista-giro',
  templateUrl: './contratista-giro.component.html',
  styleUrls: ['./contratista-giro.component.css']
})
export class ContratistaGiroComponent implements OnInit {

  contratistasGiro: ContratistaGiro[];

  constructor(private contratistaGiroService: ContratistaGiroService) { }

  ngOnInit(): void {
    this.contratistaGiroService.getContratistaGiro().subscribe((data: any) => {
      this.contratistasGiro = data;
      console.log(data);
    })
  }

}
