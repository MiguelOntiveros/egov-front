import { Component, OnInit } from '@angular/core';
import { AdquisicionesService } from './adquisiciones.service';
import { Contrato } from '../../interfaces/Contrato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adquisiciones',
  templateUrl: './adquisiciones.component.html',
  styleUrls: ['./adquisiciones.component.css']
})
export class AdquisicionesComponent implements OnInit {

  contrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(private adquisicionesService: AdquisicionesService, private router: Router) { }

  ngOnInit(): void {
    this.adquisicionesService.getAdquisiciones().subscribe((data: any) => {
      this.contrato = data;
      console.log(data);
    })
  }

  llamarContrato(id){
    this.adquisicionesService.llamarContrato(id).subscribe((data: any) => {
      this.contrato = data;
      this.router.navigate(['documentos']);
      localStorage.setItem('data', JSON.stringify(data));
      console.log(data);
      console.log('Documentos Abiertos');
    })
  }
}
