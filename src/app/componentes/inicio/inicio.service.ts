import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private url = 'http://localhost:8083/contratista/contratistas';

  private url2 = 'http://localhost:8083/contratista/obraspublicas';

  private url3 = 'http://localhost:8083/contratista/adquisiciones';

  private url4 = 'http://localhost:8083/contratista/patrimonios';

  constructor(private http: HttpClient) { }

  getContratistas(): Observable<any>{
    return this.http.get<any>(this.url);
  }

  getObrasPublicas(): Observable<any>{
    return this.http.get<any>(this.url2);
  }

  getAdquisiciones(): Observable<any>{
    return this.http.get<any>(this.url3);
  }

  getPatrimonios(): Observable<any>{
    return this.http.get<any>(this.url4);
  }

  getContratista(id) {
    return this.http.get<any>('http://localhost:8083/contratista/contratista', {
      params: {
        id: id
      }
    });
  }

  getConfiguracion(clave) {
    return this.http.get<any>('http://localhost:8083/configuracionweb/categoria', {
      params: {
        clave: clave
      }
    });
  }

  getValorDelMonto(monto) {
    return this.http.get<any>('http://localhost:8083/contratogeneraldato/valor', {
      params: {
        monto: monto
      }
    });
  }

  getSociosYRep(area: string, tipo: string, categoria: string, folio: number, revision: number): Observable<any>{
    return this.http.get('http://localhost:8083/contratoreferencia/sociosyreplegal?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getObservaciones(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratoanexoimagen/observaciones?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>('http://localhost:8083/contratoanexoimagen/documentos', {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
  }

  getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratodocumentoimagen/documentos?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }

  getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>('http://localhost:8083/contratooficialimagen/documentos?area='+ area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);
  }
}
