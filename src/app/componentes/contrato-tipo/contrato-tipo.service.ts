import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoTipoService {

  private url = 'https://maikiki.herokuapp.com/contratotipo/todos';

  constructor(private http: HttpClient) { }

  getContratoTipo(): Observable<any>{
  return this.http.get<any>(this.url);
  }

}
