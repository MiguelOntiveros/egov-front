import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/Pais';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: Pais[];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPais().subscribe( (data: any) => {
      this.pais = data;
      console.log(data);
    })
  }

}
