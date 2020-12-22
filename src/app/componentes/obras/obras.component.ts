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

  resultadoListaContrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private obrasService: ObrasService, private router: Router) { }

  ngOnInit(): void {
    this.obrasService.getObrasPublicas().subscribe((data: any) => {
      this.resultadoListaContrato = data;
      console.log(data);
    });
    
  }

  verDocumentos(){
    console.log('-> VER DOCUMENTOS');
    this.router.navigate(['/documentos']);
  }

}
