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

  getContratos(numero) {
    return this.http.get<any>('http://localhost:8083/contrato/contratos', {
      params: {
        numero: numero
      }
    });
  }
  
  llamarContrato(id) {
    return this.http.get<any>('http://localhost:8083/contrato/contrato', {
      params: {
        id: id
      }
    });
  }
}
