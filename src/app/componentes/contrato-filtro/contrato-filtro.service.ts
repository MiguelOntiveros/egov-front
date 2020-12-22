import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoFiltroService {

  private url = 'https://maikiki.herokuapp.com/contratofiltro/todos';

  constructor(private http: HttpClient) { }


  getContratoFiltro(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}
