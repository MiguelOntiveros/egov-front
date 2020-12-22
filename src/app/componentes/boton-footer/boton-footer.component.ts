import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-footer',
  templateUrl: './boton-footer.component.html',
  styleUrls: ['./boton-footer.component.css']
})
export class BotonFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irInicio(){
    this.router.navigate(['/inicio']);
  }

}
