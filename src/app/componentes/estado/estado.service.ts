import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url = 'https://maikiki.herokuapp.com/estado/todos';

  constructor(private http: HttpClient) { }

  getEstado(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
