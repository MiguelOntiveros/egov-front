import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratistaGiroService {

  private url = 'https://maikiki.herokuapp.com/contratistagiro/todos';

  constructor(private http: HttpClient) { }

  getContratistaGiro(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
