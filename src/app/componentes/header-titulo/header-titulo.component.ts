import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header-titulo',
  templateUrl: './header-titulo.component.html',
  styleUrls: ['./header-titulo.component.css']
})
export class HeaderTituloComponent implements OnInit {

  @Input('titulo') titulo: string;

  constructor(private location: Location ) { }

  ngOnInit(): void {
  }

  regresar(){
    this.location.back();
  }
  

}
