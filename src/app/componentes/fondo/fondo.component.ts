import { Component, OnInit } from '@angular/core';
import { Fondo } from '../../interfaces/Fondo';
import { FondoService } from './fondo.service';

@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})
export class FondoComponent implements OnInit {

  fondo: Fondo[];

  constructor(private fondoService: FondoService) { }

  ngOnInit(): void {
    this.fondoService.getFondo().subscribe((data: any) => {
      this.fondo = data;
      console.log(data);
    })
  }

}
