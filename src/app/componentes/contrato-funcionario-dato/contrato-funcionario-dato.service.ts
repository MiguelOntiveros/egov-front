import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoFuncionarioDatoService {

  private url = 'https://maikiki.herokuapp.com/contratofuncionariodato/todos';

  constructor(private http: HttpClient) { }

  getContratoFuncionarioDato(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
