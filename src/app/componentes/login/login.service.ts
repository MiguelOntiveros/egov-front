import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://maikiki.herokuapp.com/usuario/validacion?';

  constructor(private http: HttpClient) { }

  getUsuario(usuario: string, password: string): Observable<any>{
    return this.http.get<any>(this.url + 'clave=' + usuario + '&password=' + password);
  }

}
