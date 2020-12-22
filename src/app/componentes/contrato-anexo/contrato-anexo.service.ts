import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoAnexoService {

  private url = 'https://maikiki.herokuapp.com/contratoanexo/todos';

  constructor(private http: HttpClient) { }

  getContratoAnexo(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
