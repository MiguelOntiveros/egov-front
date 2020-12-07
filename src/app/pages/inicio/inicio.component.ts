import { Component, OnInit } from '@angular/core';
import { Contratista } from 'src/app/interfaces/Contratista';
import { PruebaImagenesService } from 'src/app/services/prueba-imagenes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  contratistas: Contratista[];
  imagen: string;

  constructor( private ImagenService: PruebaImagenesService) { }

  ngOnInit(){
    this.ImagenService.getImagenes().subscribe((Temp)=>{
      this.imagen = Temp;
    })
  }
}
