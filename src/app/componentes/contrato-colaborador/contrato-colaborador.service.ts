import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoColaboradorService {

  private url = 'https://maikiki.herokuapp.com/contratocolaborador/todos';

  constructor(private http: HttpClient) { }

  getContratoColaborador(): Observable<any>{
    return this.http.get<any>(this.url);
  }


}
