import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioModuloService {

  private url = 'https://maikiki.herokuapp.com/usuariomodulo/todos';

  constructor(private http: HttpClient) { }

  getUsuarioModulo(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
