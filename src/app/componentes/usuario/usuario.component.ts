import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/Usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario[];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario()
    .subscribe((data: any) => {
      this.usuario = data;
      console.log(data);
    })
  }

}
