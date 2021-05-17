import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {


  /*  URL's para DESARROLLO */
  // private urlContratista = 'http://localhost:8083/contratista/search?nombre=';
  // private urlContratista2 = 'http://localhost:8083/contratista/search2?nombre=';

  // private urlObraPublica = 'http://localhost:8083/contratista/obraspublicas?nombre=';

  // private urlAdquisiciones = 'http://localhost:8083/contratista/adquisiciones?nombre=';

  // private urlPatrimonio = 'http://localhost:8083/contratista/patrimonios?nombre='

  // --------------------------------------------------------

  // private urlGetContratista = 'http://localhost:8083/contratista/contratista';

  // private urlGetConfiguracion = 'http://localhost:8083/configuracionweb/categoria';

  // private urlGetValorDelMonto = 'http://localhost:8083/contratogeneraldato/valor';

  // private urlGetSociosYRep = 'http://localhost:8083/contratoreferencia/sociosyreplegal?area=';

  // ------------------------------------------------------

  // private urlGetObservaciones = 'http://localhost:8083/contratoanexoimagen/observaciones?area=';

  // private urlGetAnexoImagen = 'http://localhost:8083/contratoanexoimagen/documentos';
  // private urlGetDocumentoImagen = 'http://localhost:8083/contratodocumentoimagen/documentos?area=';
  // private urlGetOficialImagen = 'http://localhost:8083/contratooficialimagen/documentos?area=';

  // LISTA DE IMAGENES - TODO
  // private urlGetIdsDocumentoImagen = 'http://localhost:8083/contratodocumentoimagen/ids';
  // private urlGetIdsAnexoImagen = 'http://localhost:8083/contratoanexoimagen/ids';
  // private urlGetIdsOficialImagen = 'http://localhost:8083/contratooficialimagen/ids';

  // IMAGENES POR CATEGORIA - INDIVIDUALES
  // private urlGetIdsDocImagenesDocumentosPadron = 'http://localhost:8083/contratodocumentoimagen/idsdoc';
  // private urlGetIdsDocImagenesAnexosOficiales = 'http://localhost:8083/contratooficialimagen/idsdoc';
  // private urlGetIdsDocImagenesContratosAnexos = 'http://localhost:8083/contratoanexoimagen/idsdoc';


  //complise.dyndns.org/egov-api
  /* URL's para PRODUCCIÓN */

  private urlContratista = 'http://complise.dyndns.org/egov-api/contratista/search?nombre='
  private urlContratista2 = 'http://complise.dyndns.org/egov-api/contratista/search2?nombre=';

  private urlObraPublica = 'http://complise.dyndns.org/egov-api/contratista/obraspublicas?nombre=';

  private urlAdquisiciones = 'http://complise.dyndns.org/egov-api/contratista/adquisiciones?nombre=';

  private urlPatrimonio = 'http://complise.dyndns.org/egov-api/contratista/patrimonios?nombre='

  // --------------------------------------------------------

  private urlGetContratista = 'http://complise.dyndns.org/egov-api/contratista/contratista';

  private urlGetConfiguracion = 'http://complise.dyndns.org/egov-api/configuracionweb/categoria';

  private urlGetValorDelMonto = 'http://complise.dyndns.org/egov-api/contratogeneraldato/valor';

  private urlGetSociosYRep = 'http://complise.dyndns.org/egov-api/contratoreferencia/sociosyreplegal?area=';

  // ------------------------------------------------------

  private urlGetObservaciones = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/observaciones?area=';

  private urlGetAnexoImagen = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/documentos';
  private urlGetDocumentoImagen = 'http://complise.dyndns.org/egov-api/contratodocumentoimagen/documentos?area=';
  private urlGetOficialImagen = 'http://complise.dyndns.org/egov-api/contratooficialimagen/documentos?area=';

  // LISTA DE IMAGENES - TODO
  private urlGetIdsDocumentoImagen = 'http://complise.dyndns.org/egov-api/contratodocumentoimagen/ids';
  private urlGetIdsAnexoImagen = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/ids';
  private urlGetIdsOficialImagen = 'http://complise.dyndns.org/egov-api/contratooficialimagen/ids';

  // IMAGENES POR CATEGORIA - INDIVIDUALES
  private urlGetIdsDocImagenesDocumentosPadron = 'http://complise.dyndns.org/egov-api/contratodocumentoimagen/idsdoc';
  private urlGetIdsDocImagenesAnexosOficiales = 'http://complise.dyndns.org/egov-api/contratooficialimagen/idsdoc';
  private urlGetIdsDocImagenesContratosAnexos = 'http://complise.dyndns.org/egov-api/contratoanexoimagen/idsdoc';

  constructor(private http: HttpClient) { }

  getContratistas(nombre: string){
    return this.http.get<any>(this.urlContratista + nombre);
  }

  getContratistas2(nombre: string){
    return this.http.get<any>(this.urlContratista2 + nombre);
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
    return this.http.get<any>(this.urlGetContratista, {
      params: {
        id: id
      }
    });
    // http://complise.dyndns.org/egov-api/contratista/contratista
    // http://localhost:8083/contratista/contratista
  }

  getConfiguracion(clave) {
    return this.http.get<any>(this.urlGetConfiguracion, {
      params: {
        clave: clave
      }
    });
    // http://complise.dyndns.org/egov-api/configuracionweb/categoria
    // http://localhost:8083/configuracionweb/categoria
  }

  getValorDelMonto(monto) {
    return this.http.get<any>(this.urlGetValorDelMonto, {
      params: {
        monto: monto
      }
    });
    // http://complise.dyndns.org/egov-api/contratogeneraldato/valor
    // http://localhost:8083/contratogeneraldato/valor
  }

  getSociosYRep(area: string, tipo: string, categoria: string, folio: number, revision: number): Observable<any>{
    return this.http.get(this.urlGetSociosYRep + area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);

    // http://complise.dyndns.org/egov-api/contratoreferencia/sociosyreplegal?area=
    // http://localhost:8083/contratoreferencia/sociosyreplegal?area=
  }

  getIdsDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>(this.urlGetIdsOficialImagen, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision,
      }
    });

    // http://complise.dyndns.org/egov-api/contratooficialimagen/ids
    // http://localhost:8083/contratooficialimagen/ids
  }

  getIdsDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>(this.urlGetIdsAnexoImagen, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
    // http://complise.dyndns.org/egov-api/contratoanexoimagen/ids
    // http://localhost:8083/contratoanexoimagen/ids
  }

  getIdsDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>(this.urlGetIdsDocumentoImagen, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision
      }
    });
    // http://complise.dyndns.org/egov-api/contratodocumentoimagen/ids
    // http://localhost:8083/contratodocumentoimagen/ids
  }

  getObservaciones(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>(this.urlGetObservaciones + area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);

    // http://complise.dyndns.org/egov-api/contratoanexoimagen/observaciones?area=
    // http://localhost:8083/contratoanexoimagen/observaciones?area=
  }

  getDocumentosContratoAnexoImagen(area, tipo, categoria, folio, revision) {
    return this.http.get<any>(this.urlGetAnexoImagen, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision,
      }
    });

    // http://complise.dyndns.org/egov-api/contratoanexoimagen/documentos
    // http://localhost:8083/contratoanexoimagen/documentos
  }

  getDocumentosContratoDocumentoImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>(this.urlGetDocumentoImagen + area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);

    // http://complise.dyndns.org/egov-api/contratodocumentoimagen/documentos?area=
    // http://localhost:8083/contratodocumentoimagen/documentos?area=
  }

  getDocumentosContratoOficialImagen(area, tipo, categoria, folio, revision): Observable<any> {
    return this.http.get<any>(this.urlGetOficialImagen + area + '&tipo=' + tipo + '&categoria=' + categoria +  '&folio=' + folio + '&revision=' + revision);

    // http://complise.dyndns.org/egov-api/contratooficialimagen/documentos?area=
    // http://localhost:8083/contratooficialimagen/documentos?area=
  }

  getIdsDocContratosOficial(area, tipo, categoria, folio, revision, documento){
    return this.http.get<any>(this.urlGetIdsDocImagenesAnexosOficiales, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision,
        documento: documento
      }
    })
  }

  getIdsDocContratosDocumentos(area, tipo, categoria, folio, revision, documento){
  return this.http.get<any>(this.urlGetIdsDocImagenesDocumentosPadron ,{
    params: {
      area: area,
      tipo: tipo,
      categoria: categoria,
      folio: folio,
      revision: revision,
      documento: documento
    }
  });
  }

  getIdsDocContratosAnexos(area, tipo, categoria, folio, revision, documento){
    return this.http.get<any>(this.urlGetIdsDocImagenesContratosAnexos, {
      params: {
        area: area,
        tipo: tipo,
        categoria: categoria,
        folio: folio,
        revision: revision,
        documento: documento
      }
    });
  }

}
