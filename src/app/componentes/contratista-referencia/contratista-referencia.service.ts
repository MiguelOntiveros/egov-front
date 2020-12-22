import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratistaReferenciaService {
  
  private url = 'https://maikiki.herokuapp.com/contratistareferencia/todos';

  constructor(private http: HttpClient) { }

  getContratistaReferencia(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
