import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoReferenciaService {

  private url = 'https://maikiki.herokuapp.com/contratoreferencia/todos';

  constructor(private http: HttpClient) { 
    
  }
  
  getContratoReferencias(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
