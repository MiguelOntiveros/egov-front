import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {

  busqueda = [
    {nombre: 'M&M CONSULTORIA EN FINANZAS Y ADMINISTRACION PÚBLICA, S.A. DE C.V.'},
    {nombre: 'MANUEL,CAVAZOS,ORTIZ'},
    {nombre: 'MARA MIREYA,MARTINEZ,ACOSTA'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
