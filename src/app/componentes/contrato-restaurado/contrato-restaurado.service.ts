import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoRestauradoService {

  private url = 'https://maikiki.herokuapp.com/contratorestaurado/todos';

  constructor(private http: HttpClient) { }

  getContratoRestaurado(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
