import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FondoService {

  private url = 'https://maikiki.herokuapp.com/fondo/todos';

  constructor(private http: HttpClient) { }

  getFondo(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
