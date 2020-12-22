import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoOficialService {

  private url = 'https://maikiki.herokuapp.com/contratooficial/todos';

  constructor(private http: HttpClient) { }

  getContratoOficial(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
