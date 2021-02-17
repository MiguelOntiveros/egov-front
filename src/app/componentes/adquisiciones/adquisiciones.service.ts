import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdquisicionesService {

  constructor(private http: HttpClient) { }

  getContratos(numero) {
    return this.http.get<any>('http://localhost:8083/contrato/contratos', {
      params: {
        numero: numero
      }
    });
  }

  getValorDelMonto(tipo,categoria) {
    return this.http.get<any>('http://localhost:8083/contratogeneral/valor', {
     // responseType: 'text',
        params: {
        tipo: tipo,
        categoria: categoria
        }
      });
  }

 /* getValorDelMonto(tipo: string, categoria: string): Observable<any>{
    return this.http.get('http://localhost:8083/contratogeneral/valor?' + '&tipo=' + tipo + '&categoria=' + categoria);
  }*/


  getDescripcionDelContrato(tipo,categoria) {
    return this.http.get<any>('http://localhost:8083/contratogeneral/descripcion', {
      params: {
        tipo: tipo,
        categoria: categoria
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
