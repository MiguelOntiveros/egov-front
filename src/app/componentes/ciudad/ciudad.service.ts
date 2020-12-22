import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private url = 'https://maikiki.herokuapp.com/ciudad/todos';

  constructor(private http: HttpClient) { }

  getCiudades(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
