import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratistaPersonaService {

  private url = 'https://maikiki.herokuapp.com/contratistadocumento/todos';

  constructor(private http: HttpClient) { }

  getContratistaPersona(): Observable<any>{
  return this.http.get<any>(this.url);
  }
}