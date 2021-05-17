import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { PatrimoniosService } from './patrimonios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-patrimonios',
  templateUrl: './patrimonios.component.html',
  styleUrls: ['./patrimonios.component.css']
})
export class PatrimoniosComponent implements OnInit {

  mensaje: string;
  contratos: Contrato[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/patrimonios_icono.png';

  constructor(
    private patrimoniosService: PatrimoniosService, 
    private router: Router, 
    private activateRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      var numero = params['numero'];
      console.log(numero);
      this.getContratos(numero);
    });
  }

  getContratos(numero){
    this.patrimoniosService.getContratos(numero).subscribe((data: any) => {

      this.spinner.show();

      this.contratos = data;
      console.log(data);
      if(this.contratos.length <= 0){
  
        this.spinner.hide();

        this.mensaje = 'No se encontraron resultados';
      }else if(this.contratos.length > 0){

        this.spinner.hide();

        this.mensaje = '';
      }
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

  abrirFiltros(){
    console.log('Filtros abiertos');
    this.router.navigate(['/filtros']);
  }

}
