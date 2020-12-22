import { Component, OnInit } from '@angular/core';
import { UsuarioDepartamento } from '../../interfaces/UsuarioDepartamento';
import { UsuarioDepartamentoService } from './usuario-departamento.service';

@Component({
  selector: 'app-usuario-departamento',
  templateUrl: './usuario-departamento.component.html',
  styleUrls: ['./usuario-departamento.component.css']
})
export class UsuarioDepartamentoComponent implements OnInit {

  usuariosDepartamento: UsuarioDepartamento[];

  constructor(private usuarioDepartamentoService: UsuarioDepartamentoService) { }

  ngOnInit(): void {
  this.usuarioDepartamentoService.getUsuarioDepartamento().subscribe((data: any) => {
    this.usuariosDepartamento = data;
    console.log(data);
  })

  }

}
