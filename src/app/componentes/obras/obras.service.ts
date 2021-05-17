import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Red } from '../../config/red';

@Injectable({
  providedIn: 'root'
})
export class ObrasService {

  // red: string;

  constructor(
    private http: HttpClient,
    // private redServidor: Red
    ) { 
    // this.red = redServidor.servidorLocal;
    // this.red = redServer.servidorMayagoitia;  
  }

  getContratos(numero) {
    return this.http.get<any>('http://complise.dyndns.org/egov-api/contrato/contratos', {
      params: {
        numero: numero
      }
    });
    // http://complise.dyndns.org/egov-api/contrato/contratos
    // http://localhost:8083/contrato/contratos
  }
  
  // return this.http.get<any>(this.red + 'contrato/contratos', {
  llamarContrato(id) {
    return this.http.get<any>('http://complise.dyndns.org/egov-api/contrato/contrato', {
      // return this.http.get<any>(this.red + 'contrato/contrato', {
      params: {
        id: id
      }
    });
  }
  // http://complise.dyndns.org/egov-api/contrato/contrato
  // http://localhost:8083/contrato/contrato
}
