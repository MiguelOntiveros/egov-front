import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://maikiki.herokuapp.com/usuario/todos';

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
