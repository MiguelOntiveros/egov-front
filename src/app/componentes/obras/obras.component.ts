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

  llamarContrato(id){
    this.obrasService.llamarContrato(id).subscribe((data: any) => {
      this.contrato = data;
      this.router.navigate(['documentos']);
      localStorage.setItem('data', JSON.stringify(data));
      console.log(data);
    })
  }

}
