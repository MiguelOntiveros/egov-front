import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { ObrasService } from './obras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  contrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private obrasService: ObrasService, private router: Router) { }

  ngOnInit(): void {
    this.obrasService.getObrasPublicas().subscribe((data: any) => {
      this.contrato = data;
      console.log(data);
    });
  }

  llamarContrato(id) {
    this.obrasService.llamarContrato(id).subscribe((data: any) => {
      // primero se setea el contrato que se seleccionó
      localStorage.setItem('contrato', JSON.stringify(data));
      // después llama al navigate y se envía su categoría como parametro
      this.router.navigate(['documentos', data.categoria]);
      console.log(data);
      console.log(data.categoria);
    })
  }

}
