import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { PatrimoniosService } from './patrimonios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patrimonios',
  templateUrl: './patrimonios.component.html',
  styleUrls: ['./patrimonios.component.css']
})
export class PatrimoniosComponent implements OnInit {

  resultadoListaContrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/patrimonios_icono.png';

  constructor(private patrimoniosService: PatrimoniosService, private router: Router) { }

  ngOnInit(): void {
    this.patrimoniosService.getPatrimonios().subscribe((data: any) => {
      this.resultadoListaContrato = data;
      console.log(data);
    })
  }

  verDocumentos(){
    console.info('-> VER DOCUMENTOS');
    this.router.navigate(['/documentos'])
  }

}
