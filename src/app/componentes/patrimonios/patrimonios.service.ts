import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatrimoniosService {
  
  constructor(private http: HttpClient) { }

  getContratos(numero) {
    return this.http.get<any>('http://complise.dyndns.org/egov-api/contrato/contratos', {
      params: {
        numero: numero
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contratos
    // http://localhost:8083/contrato/contratos
  }

  llamarContrato(id) {
    return this.http.get<any>('http://complise.dyndns.org/egov-api/contrato/contrato', {
      params: {
        id: id
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contrato
    // http://localhost:8083/contrato/contrato
  }

}
