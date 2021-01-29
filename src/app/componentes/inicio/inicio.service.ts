import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private url = 'http://localhost:8083/contratista/contratistas';

  constructor(private http: HttpClient) { }

  getContratistas(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  getContratos(numero) {
    return this.http.get<any>('http://localhost:8083/contrato/contratos', {
      params: {
        numero: numero
      }
    });
  }
  
  getConfiguracion(clave) {
    return this.http.get<any>('https://maikiki.herokuapp.com/configuracionweb/categoria', {
      params: {
        clave: clave
      }
    });
  }

  getSociosYRep(area: string, tipo: string, categoria: string, folio: number, revision: number): Observable<any>{
    return this.http.get('https://maikiki.herokuapp.com/contratoreferencia/sociosyreplegal?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getOservaciones(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratoanexoimagen/observaciones?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratoanexoimagen/documentos?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratodocumentoimagen/documentos?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratooficialimagen/documentos?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }
}
