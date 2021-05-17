import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  sugerenciasForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.sugerenciasForm = this.fb.group({
      asunto: ['', [Validators.required, Validators.minLength(5)]],
      sugerencia: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit(): void {
  }
   // SE ENVIA EL ASUNTO Y LA SUGERENCIA
  // TAMBIEN SE UTILIZA UN MENSAJE PARA INDICAR QUE TUVO EXITO
  enviarSugerencia(){
    if (this.sugerenciasForm.invalid) { 
      return console.log('Datos incorrectos');
    }
    const { asunto, sugerencia } = this.sugerenciasForm.value;
    console.log(asunto, sugerencia);
    this.router.navigate(['/inicio']);
  }
}
