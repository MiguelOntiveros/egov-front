import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  opcionConfiguracion = [
    {nombre: 'Monto'},
    {nombre: 'Monto máximo'},
    {nombre: 'Resultado por página'},
    {nombre: 'Rango de intervalos'}
  ]

  configuracionesForm: FormGroup;

  constructor(
    private fb: FormBuilder, private router: Router
  ) { 
    this.configuracionesForm = this.fb.group({
      monto: ['', Validators.required],
      montoMaximo: ['', Validators.required],
      resultadoPagina: ['', Validators.required],
      rangoIntervalos: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  configurarSistema(){
    if (this.configuracionesForm.invalid){ return console.log('Datos incorrectos');;}
    const { monto, montoMaximo, resultadoPagina, rangoIntervalos } = this.configuracionesForm.value;

    console.log(monto, montoMaximo, resultadoPagina, rangoIntervalos);
    console.log('Sistema configurado');
    this.router.navigate(['/inicio']);

  }


}
