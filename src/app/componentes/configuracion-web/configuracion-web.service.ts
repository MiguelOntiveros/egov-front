import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionWebService {

  private url = 'https://maikiki.herokuapp.com/configuracionweb/todos';

  constructor(private http: HttpClient) { }

  getConfiguracionWeb(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}