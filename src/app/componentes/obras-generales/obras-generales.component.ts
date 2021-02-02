import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from '../../interfaces/Contratista';
import { ActivatedRoute, Router } from '@angular/router';
import { ObrasService } from '../obras/obras.service';

@Component({
  selector: 'app-obras-generales',
  templateUrl: './obras-generales.component.html',
  styleUrls: ['./obras-generales.component.css']
})
export class ObrasGeneralesComponent implements OnInit {

  contratos: Contrato[];
  contratista : Contratista[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private obrasService: ObrasService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getContratos(numero){
    this.obrasService.getContratos(numero).subscribe((data: any) => {
      this.contratos = data;
      //console.log(data);
    })
  }

  llamarContrato(id) {
    this.obrasService.llamarContrato(id).subscribe((data: any) => {    
      this.router.navigate(['documentos', data.categoria]);
      //console.log(data);
      //console.log(data.categoria);
    })
  }

}
