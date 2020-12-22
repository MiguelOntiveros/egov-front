import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoCanceladoService {

  private url = 'https://maikiki.herokuapp.com/contratocancelado/todos';

  constructor(private http: HttpClient) { }

  getContratoCancelado(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
