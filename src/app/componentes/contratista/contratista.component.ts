import { Component, OnInit } from '@angular/core';
import { Contratista } from 'src/app/interfaces/Contratista';
import { ContratistaServiceService } from 'src/app/services/contratista-service.service';

@Component({
  selector: 'app-contratista',
  templateUrl: './contratista.component.html',
  styleUrls: ['./contratista.component.css']
})
export class ContratistaComponent implements OnInit {

  contratistas: Contratista[];

  constructor(private ContratistaService: ContratistaServiceService) { }

  ngOnInit(){
    this.ContratistaService.getContratista().subscribe((Temp)=>{
      this.contratistas = Temp;
    })
  }

}
