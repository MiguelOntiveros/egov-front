import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratistaServiceService {

  private URL = 'https://maikiki.herokuapp.com/contratista/todos';

  constructor(private http: HttpClient) { }

  getContratista(): Observable<any>{
    return this.http.get<any>(this.URL);
  }

}
