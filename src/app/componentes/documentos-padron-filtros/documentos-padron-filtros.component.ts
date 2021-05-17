import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentos-padron-filtros',
  templateUrl: './documentos-padron-filtros.component.html',
  styleUrls: ['./documentos-padron-filtros.component.css']
})
export class DocumentosPadronFiltrosComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  regresarAtras(){
    this.location.back();
  }

  abrirDocumento(){
    this.router.navigate(['/filtros'])
  }
}
