import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdquisicionesService {

  // private urlAdquisiciones = 'https://maikiki.herokuapp.com/contrato/adquisiciones';
  private urlAdquisiciones2 = 'https://maikiki.herokuapp.com/contrato/obraspublicas';

  constructor(private http: HttpClient) { }

  getAdquisiciones(): Observable<any>{
    return this.http.get<any>(this.urlAdquisiciones2);
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
