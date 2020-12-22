import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratistaService {


  private url = 'https://maikiki.herokuapp.com/contratista/todos';

  // private URL2 = 'http://localhost:8083/contratista/todos';

  constructor(private http: HttpClient) { }

  getContratista(): Observable<any>{
    return this.http.get<any>(this.url);
  }


}
