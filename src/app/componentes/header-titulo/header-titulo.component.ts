import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-titulo',
  templateUrl: './header-titulo.component.html',
  styleUrls: ['./header-titulo.component.css']
})
export class HeaderTituloComponent implements OnInit {

  @Input('titulo') titulo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
