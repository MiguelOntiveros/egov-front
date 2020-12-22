import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SantoralService {
  
  private url = 'https://maikiki.herokuapp.com/santoral/todos';

  constructor(private http: HttpClient) { }

  getSantoral(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
