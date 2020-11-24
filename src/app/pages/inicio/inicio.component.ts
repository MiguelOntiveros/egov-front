import { Component, OnInit } from '@angular/core';
import { Contratista } from 'src/app/interfaces/Contratista';
import { ContratistaServiceService } from 'src/app/services/contratista-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contratistas: Contratista[];

  constructor(private ContratistaService: ContratistaServiceService) { }

  ngOnInit(){
    this.ContratistaService.getContratista().subscribe((Temp)=>{
      this.contratistas = Temp;
    })
  }
}
