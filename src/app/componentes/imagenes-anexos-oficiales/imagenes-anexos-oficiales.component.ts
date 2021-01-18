import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoOficialImagen } from 'src/app/interfaces/ContratoOficialImagen';
import { ImagenesAnexosOficialesService } from '../imagenes-anexos-oficiales/imagenes-anexos-oficiales.service';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-imagenes-anexos-oficiales',
  templateUrl: './imagenes-anexos-oficiales.component.html',
  styleUrls: ['./imagenes-anexos-oficiales.component.css']
})

export class ImagenesAnexosOficialesComponent implements OnInit {

  contratoAlmacenado = null;
  contratoOficialImagen: string[];
  //ConfiguracionWeb = {};

  constructor(private imagenesAnexas: ImagenesAnexosOficialesService, private router: Router, private inicio: InicioService) { }

  ngOnInit(): void {
    // obtiene el storage llamado contrato
    var contratoOriginal = localStorage.getItem('contrato');
    this.contratoAlmacenado = JSON.parse(contratoOriginal);

    const area = this.contratoAlmacenado['area'];
    const tipo = this.contratoAlmacenado['tipo'];
    const categoria = this.contratoAlmacenado['categoria'];
    const folio = this.contratoAlmacenado['folio'];
    const revision = this.contratoAlmacenado['revision'];
    console.log(this.contratoOficialImagen);
   
  }

  getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision) {
    this.inicio.getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision).subscribe((data: any) => {
      this.contratoOficialImagen = data;
    });
  }

  verBasesDeLicitacion() {
    this.router.navigate(['/imagenes-a-o-bases-de-licitacion']);
  }

  verProcedimientoAdjudicacion() {
    this.router.navigate(['/imagenes-a-o-procedimiento-de-adjudicacion']);
  }

  verOrigenRecursos() {
    this.router.navigate(['/imagenes-a-o-oficio-de-origen-de-los-recursos']);
  }

  verActaFallo() {
    this.router.navigate(['/imagenes-a-o-acta-de-fallo']);
  }

}
