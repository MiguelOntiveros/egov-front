import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private urlContratista = 'http://localhost:8083/contratista/search?nombre='

  private urlObraPublica = 'http://localhost:8083/contratista/obraspublicas?nombre=';

  private urlAdquisiciones = 'http://localhost:8083/contratista/adquisiciones?nombre=';

  private urlPatrimonio = 'http://localhost:8083/contratista/patrimonios?nombre='

  constructor(private http: HttpClient) { }

  getContratistas(nombre: string){
    return this.http.get<any>(this.urlContratista + nombre);
  }

  getObrasPublicas(nombre: string){
    return this.http.get<any>(this.urlObraPublica + nombre);
  }

  getAdquisiciones(nombre: string){
    return this.http.get<any>(this.urlAdquisiciones + nombre);
  }

  getPatrimonios(nombre: string){
    return this.http.get<any>(this.urlPatrimonio + nombre);
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

  getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>('http://localhost:8083/contratoanexoimagen/ids', {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
  }

  getIdsDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>('http://localhost:8083/contratodocumentoimagen/ids', {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
  }

  getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>('http://localhost:8083/contratooficialimagen/ids', {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
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
