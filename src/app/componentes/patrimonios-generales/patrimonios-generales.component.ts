import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Router } from '@angular/router';
import { PatrimoniosService } from '../patrimonios/patrimonios.service';

@Component({
  selector: 'app-patrimonios-generales',
  templateUrl: './patrimonios-generales.component.html',
  styleUrls: ['./patrimonios-generales.component.css']
})
export class PatrimoniosGeneralesComponent implements OnInit {

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

  llamarContrato(id) {
    this.patrimoniosService.llamarContrato(id).subscribe((data: any) => {
     
      localStorage.setItem('contrato', JSON.stringify(data));
    
      this.router.navigate(['documentos', data.categoria]);
      console.log(data);
      console.log(data.categoria);
    })
  }

  verDocumentos(){
    console.info('-> VER DOCUMENTOS');
    this.router.navigate(['/documentos'])
  }

}
