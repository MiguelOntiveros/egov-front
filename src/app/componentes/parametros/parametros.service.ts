import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {

  private url = 'https://maikiki.herokuapp.com/parametro/todos'

  constructor(private http: HttpClient) { }

  getParametros(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
