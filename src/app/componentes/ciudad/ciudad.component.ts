import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../../interfaces/Ciudad';
import { CiudadService } from './ciudad.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  ciudades: Ciudad[];  

  constructor(private ciudadService: CiudadService) { }

  ngOnInit(): void {
  this.ciudadService.getCiudades().subscribe((data: any) => {
    this.ciudades = data;
    console.log(data);
  })
  }

  

}
