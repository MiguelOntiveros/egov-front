import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url = 'https://maikiki.herokuapp.com/pais/todos';

  constructor(private http: HttpClient) { }

  getPais(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}
