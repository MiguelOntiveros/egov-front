import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoFuncionarioService {

  private url = 'https://maikiki.herokuapp.com/contratofuncionario/todos';

  constructor(private http: HttpClient) { }

  getContratoFuncionario(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}
