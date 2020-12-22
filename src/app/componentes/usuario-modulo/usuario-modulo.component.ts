import { Component, OnInit } from '@angular/core';
import { UsuarioModulo } from '../../interfaces/UsuarioModulo';
import { UsuarioModuloService } from './usuario-modulo.service';

@Component({
  selector: 'app-usuario-modulo',
  templateUrl: './usuario-modulo.component.html',
  styleUrls: ['./usuario-modulo.component.css']
})
export class UsuarioModuloComponent implements OnInit {

  usuariosModulo: UsuarioModulo[];

  constructor(private usuarioModuloService: UsuarioModuloService) { }

  ngOnInit(): void {
    this.usuarioModuloService.getUsuarioModulo().subscribe((data: any) => {
      this.usuariosModulo = data;
      console.log(data);
    })
  }

}
