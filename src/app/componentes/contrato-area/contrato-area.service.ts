import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratoAreaService {

  private url = 'https://maikiki.herokuapp.com/contratoarea/todos';

  constructor(private http: HttpClient) { }

  getContratoArea(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
