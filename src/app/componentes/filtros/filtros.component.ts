import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  valorMinimo: number = 0;
  valorMaximo: number = 10000000;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  activarFiltros(){
    console.log('Filtros activados');
    this.router.navigate(['/inicio']);
  }


}
