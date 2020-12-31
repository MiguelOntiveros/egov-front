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

  contrato: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/patrimonios_icono.png';

  constructor(private patrimoniosService: PatrimoniosService, private router: Router) { }

  ngOnInit(): void {
    this.patrimoniosService.getPatrimonios().subscribe((data: any) => {
      this.contrato = data;
      console.log(data);
    })
  }

  llamarContrato(id){
    this.patrimoniosService.llamarContrato(id).subscribe((data: any) => {
      this.contrato = data;
      this.router.navigate(['documentos']);
      localStorage.setItem('data', JSON.stringify(data));
      console.log(data);
    })
  }

  verDocumentos(){
    console.info('-> VER DOCUMENTOS');
    this.router.navigate(['/documentos'])
  }

}
