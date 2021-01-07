import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private url = 'https://maikiki.herokuapp.com/contratocategoria/categorias';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  getConfiguracion(clave) {
    return this.http.get<any>('https://maikiki.herokuapp.com/configuracionweb/categoria', {
      params: {
        clave: clave
      }
    });
  }
}
