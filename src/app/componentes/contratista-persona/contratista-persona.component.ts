import { Component, OnInit } from '@angular/core';
import { ContratistaPersonaService } from './contratista-persona.service';
import { ContratistaPersona } from '../../interfaces/ContratistaPersona';

@Component({
  selector: 'app-contratista-persona',
  templateUrl: './contratista-persona.component.html',
  styleUrls: ['./contratista-persona.component.css']
})
export class ContratistaPersonaComponent implements OnInit {

  contratistasPersona: ContratistaPersona[];

  constructor(private contratistaPersonaService: ContratistaPersonaService) { }

  ngOnInit(): void {
    this.contratistaPersonaService.getContratistaPersona().subscribe((data: any) => {
      this.contratistasPersona = data;
      console.log(data);
    })
  }

}
