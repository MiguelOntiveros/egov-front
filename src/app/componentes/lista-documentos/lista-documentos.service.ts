import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDocumentosService {

  // private url = 'https://maikiki.herokuapp.com/contratodocumentodato/busqueda?documento=ALTA%20DE%20HACIENDA';

  // private url2 = 'https://maikiki.herokuapp.com/contratodocumentodato/contratos'; 
  // private url = 'https://maikiki.herokuapp.com/contratodocumentodato/contratos?documento=ALTA%20DE%20HACIENDA';
  private url = 'https://maikiki.herokuapp.com/contrato/adquisiciones?contrato=OP-004'
  search;

  constructor(private http: HttpClient) { }

  // getDocumento(): Observable<any>{
  //   return this.http.get<any>(this.url);
  // }

  // getDocumento(): Observable<any>{
  // return this.http.get<any>(this.url);
  // }

  getContrato(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  

}
