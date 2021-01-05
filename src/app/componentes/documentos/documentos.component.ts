import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  contrato= null;
  configuracion = {}

  constructor(private router: Router, private inicio: InicioService) {}

  ngOnInit(): void {
    var datos = localStorage.getItem("data");
    this.contrato = JSON.parse(datos);
    console.log(datos);
    this.getConfiguracion(this.configuracion);
  }

  getConfiguracion(clave){
    var clave2 = localStorage.getItem("clave")
    this.inicio.getConfiguracion(clave2).subscribe((config: any) => {
      this.configuracion = config;
      console.log(clave2);
    })
  }


  verSeguimiento(){
    this.router.navigate(['/seguimientos']);
    console.log('-> VER SEGUIMIENTO');
  }

  /*
  Pagina oficial
  https://www.npmjs.com/package/pdfmake-wrapper
  */

 abrirFichaTecnica(){
  console.log('Ficha Técnica abierto');
  this.router.navigate(['/seguimientos']);
}

abrirDocumentosPadron(){
  console.log('Documentos Padron abierto');
  this.router.navigate(['/seguimientos']);
}

abrirAnexosOficiales(){
  console.log('Anexos Oficiales abierto');
  this.router.navigate(['/seguimientos']);
}

abrirContratosAnexos(){
  console.log('Contratos y Anexos abierto');
  this.router.navigate(['/seguimientos']);
}

irInicio(){
  this.router.navigate(['/inicio']);
}

}
