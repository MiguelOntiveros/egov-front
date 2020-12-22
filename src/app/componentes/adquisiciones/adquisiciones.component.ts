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

  resultadoListaContrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/adquisiciones_icono.png';

  constructor(private adquisicionesService: AdquisicionesService, private router: Router) { }

  ngOnInit(): void {
    this.adquisicionesService.getAdquisiciones().subscribe((data: any) => {
      this.resultadoListaContrato = data;
      console.log(data);
    })
  }

  verDocumentos(){
    console.log('Documentos Abiertos');
  this.router.navigate(['/documentos']);
  }

}
