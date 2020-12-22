import { Component, OnInit } from '@angular/core';
import { Contratista } from '../../interfaces/Contratista';
import { ContratistaService } from './contratista.service';

@Component({
  selector: 'app-contratista',
  templateUrl: './contratista.component.html',
  styleUrls: ['./contratista.component.css']
})
export class ContratistaComponent implements OnInit {

  contratistas: Contratista[];

  constructor(private ContratistaService: ContratistaService) { }

  ngOnInit(){
    this.ContratistaService.getContratista().subscribe((data: any)=>{
      this.contratistas = data;
      console.log(data);
    })
  }

}
