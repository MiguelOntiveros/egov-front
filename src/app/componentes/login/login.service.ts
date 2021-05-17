import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Red } from '../../config/red';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* URL DE DESARROLLO */
  // private urlLogin = 'http://localhost:8083/usuario/validacion?'
  
  /* URL DE PRODUCCIÓN */
  private urlLogin = 'http://complise.dyndns.org/egov-api/usuario/validacion?'

  red: string;

  constructor(
    private http: HttpClient,
    // private redServidor: Red
    ) {
      // this.red = redServidor.servidorLocal;
      // this.red = redServidor.servidorMayagoitia
     }

  getUsuario(usuario: string, password: string): Observable<any>{
    return this.http.get<any>( this.urlLogin + 'clave=' + usuario + '&password=' + password);




    // return this.http.get<any>(this.red + 'usuario/validacion?' + 'clave=' + usuario + '&password=' + password);
  }

}
