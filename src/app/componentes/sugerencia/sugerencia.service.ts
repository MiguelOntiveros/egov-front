import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SugerenciaService {

  private url = 'https://maikiki.herokuapp.com/sugerencia/todos';

  constructor(private http: HttpClient) { }

  getSugerencia(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}
