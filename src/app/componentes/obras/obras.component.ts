import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/Contrato';
import { Contratista } from 'src/app/interfaces/Contratista';
import { ObrasService } from './obras.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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

  imagenTipoContrato = 'assets/imagenes/main/obras_icono.png';

  constructor(
    private obrasService: ObrasService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      // obtiene el parametro llamado numero
      let numero = params['numero'];
      console.log(numero);
      this.getContratos(numero);
    });
  }
  
  // FUNCION PARA TRAER LOS CONTRATOS CON SU RESPECTIVA INFORMACIÓN
  getContratos(numero){
    this.obrasService.getContratos(numero).subscribe((data: any) => {

    this.spinner.show();     

    if(data.length <= 0){
      // EN CASO DE QUE NO SE ENCUENTRE NINGUN CONTRATO O NINGUN VALOR, SE RETORNA UN MENSAJE
      this.spinner.hide();
      this.mensaje = 'No se encontraron resultados';
      console.log(data);

    }else if(data.length > 0){
        // EN CASO DE QUE SE ENCUENTREN RESULTADOS, MUESTRA PANTALLA DE CARGA Y SE OBTIENEN LOS DATOS
        this.spinner.hide();
        this.contratos = data;
        this.mensaje = '';
        console.log(data);
      }
    })
  }

  // FUNCION PARA OBTENER LOS DATOS DE LOS DOCUMENTOS POR ID Y REDIRECCIONA A LA PANTALLA DE DOCUMENTOS
  llamarContrato(id) {
    this.obrasService.llamarContrato(id).subscribe((data: any) => { 
      // localStorage.setItem('contrato1', JSON.stringify(data));   
      this.router.navigate(['documentos', data]);
    })
  }

  abrirFiltros(){
    console.log('Filtros abiertos');
    this.router.navigate(['/filtros']);
  }

}


