import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  private urlObrasPublicas = 'https://maikiki.herokuapp.com/contrato/obraspublicas';

  constructor(private http: HttpClient) { }

  getObrasPublicas(): Observable<any>{
    return this.http.get<any>(this.urlObrasPublicas);
  }

  llamarContrato(id) {
    return this.http.get<any>('https://maikiki.herokuapp.com/contrato/contrato', {
      params: {
        id: id
      }
    });
  }
}
