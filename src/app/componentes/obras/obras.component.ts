import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from '../../interfaces/Contratista';
import { ObrasService } from './obras.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  mensaje: string;
  contratos: Contrato[];
  contratos2: Contrato;
  contratista : Contratista[];
  search;

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png'

  constructor(private obrasService: ObrasService, private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      var numero = params['numero'];
      console.log(numero);
      this.getContratos(numero);
    });
  }

  getContratos(numero){
    this.obrasService.getContratos(numero).subscribe((data: any) => {
      this.contratos = data;
      console.log(data);
      if(this.contratos.length <= 0){
        this.mensaje = 'No se encontraron resultados';
      }else if(this.contratos.length > 0){
        this.mensaje = '';
      }
    })
  }

  llamarContrato(id) {
    this.obrasService.llamarContrato(id).subscribe((data: any) => { 
      localStorage.setItem('contrato1', JSON.stringify(data));   
      this.router.navigate(['documentos', data]);
      //this.router.navigate(['documentos', data.categoria]);
      //console.log(data);
      //console.log(data.categoria);
    })
  }

}
