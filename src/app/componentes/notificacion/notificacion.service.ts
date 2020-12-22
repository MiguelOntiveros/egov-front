import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  
  private url = 'https://maikiki.herokuapp.com/notificacion/todos';
    
  constructor(private http: HttpClient) { }
  
  getNotificacion(): Observable<any>{
    return this.http.get<any>(this.url);
  }

}
