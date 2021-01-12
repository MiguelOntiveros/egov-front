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

  getDocumentos(area: string, tipo: string, categoria: string, folio: number, revision: number): Observable<any>{
    return this.http.get('https://maikiki.herokuapp.com/contratoreferencia/sociosyreplegal?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }
}
